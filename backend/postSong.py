import sys, logging, pymysql
import db_config

def checkForQuery(userInput):
    input = userInput.lower()
    #Check if mysql queries are passed in user input
    if ("select" in input or "insert" in input or "update" in input or "delete" in input):
        return True
    else: 
        return False
    
def getSingerName(cur, singerID):
    #if singer id is left blank, return empty string
    if(singerID == ""): return ""

    #Check if an entire group is selected for a singer
    elif(singerID == "VS"): return "VIRTUAL SINGER"
    elif(singerID == "LN"): return "Leo/need"
    elif(singerID == "MMJ"): return "MORE MORE JUMP!"
    elif(singerID == "VBS"): return "Vivid BAD SQUAD"
    elif(singerID == "WXS"): return "Wonderlands x Showtime"
    elif(singerID == "N25"): return "Nightcord at 25:00"

    else:
        #Otherwise, retrieve singer's first name from the Singer Table
        cur.execute("SELECT first_name FROM Singer WHERE singer_id = %s",  [singerID])
        tuple = cur.fetchone()
        first_name = tuple[0]
        return first_name

def postSong(event):
    #Connect to database    
    db_host = db_config.db_host
    usr = db_config.db_username
    password = db_config.db_password
    db_name = db_config.db_name

    logger = logging.getLogger()
    logger.setLevel(logging.INFO)

    try:
        conn = pymysql.connect(host=db_host, user=usr, passwd=password, db=db_name, connect_timeout=5)
    except pymysql.MySQLError as e:
        logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
        logger.error(e)
        sys.exit()
    logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

    #Retrieve Song Name from React
    song_name = event["name"]
    response = ""

    #get the cursor
    with conn.cursor() as cur:
        #if song name contains mysql query, return error message
        if checkForQuery(song_name): 
            response = "Invalid song name"
        #Otherwise, check if song exists in database
        else:
            cur.execute("SELECT song_name FROM Song WHERE song_name = %s",  [song_name])
            query_check = cur.fetchone()
            #if the song name exists, return error message
            if query_check:
                response = "Song already exists."

            #Otherwise, prepare fields for insert query
            else:
                unit_id = event['unit']
                singer1 = getSingerName(cur, event['singer1'])
                singer2 = "" if event.get('singer2') is None else getSingerName(cur, event['singer2'])
                singer3 = "" if event.get('singer3') is None else getSingerName(cur, event['singer3'])
                singer4 = "" if event.get('singer4') is None else getSingerName(cur, event['singer4'])
                singer5 = "" if event.get('singer5') is None else getSingerName(cur, event['singer5'])
                singer6 = "" if event.get('singer6') is None else getSingerName(cur, event['singer6'])     
                songLength = str(event['min']) + str(event['sec'])
                releaseDate = event['date']
                composer1 = "" if checkForQuery(event['composer1']) else event['composer1']
                composer2 = "" if event.get('composer2') is None or checkForQuery(event['composer2'])  else event['composer2']
                lyricist1 = "" if checkForQuery(event['lyricist1']) else event['lyricist1']
                lyricist2 = "" if event.get('lyricist2') is None or checkForQuery(event['lyricist2'])  else event['lyricist2']
                arranger1 = "" if event.get('arranger1') is None or checkForQuery(event['arranger1'])  else event['arranger1']
                arranger2 = "" if event.get('arranger2') is None or checkForQuery(event['arranger2'])  else event['arranger2']
                bpm = "" if event.get('bpm') is None else event['bpm']
                category = event['category']
                description = "" if event.get('description') is None or checkForQuery(event['description']) else event['description']

                cur.execute("INSERT INTO Song(song_name,unit_id,song_length,release_date, composer_1,composer_2,lyricist_1,lyricist_2, arranger_1, arranger_2, bpm, category, singer_1, singer_2, singer_3, singer_4, singer_5, singer_6, song_desc) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                (song_name, unit_id, songLength, releaseDate, composer1, composer2, lyricist1, lyricist2, 
                arranger1,arranger2, bpm, category, singer1, singer2, singer3, singer4, singer5, singer6, description))

                conn.commit()
                response = "Added " + song_name + " to database." 
    return response 

          


