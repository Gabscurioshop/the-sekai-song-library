import sys, logging, pymysql, json
import db_config

def checkForQuery(userInput):
    #Check if mysql queries are passed in user input
    input = userInput.lower()
    if ("select" in input or "insert" in input or "update" in input or "delete" in input):
        return True
    else: 
        return False
    
def getSong(event):
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

    #Get song name
    songName = event['name']
    songData = ""

    #get the cursor
    with conn.cursor() as cur:
        #if song name contains mysql query, return error message
        if checkForQuery(songName): 
            songData = "Invalid song name." 
        #Otherwise, check if song exists in database
        else:
            cur.execute("SELECT song_name FROM Song WHERE song_name = %s",  [songName])
            query_check = cur.fetchone()
            #if the song name exists, return song data
            if query_check:
                cur.execute("SELECT * FROM Song WHERE song_name = %s",  [songName])
                song = cur.fetchone()
                songData = {
                    "name": song[0],
                    "unit": song[1],
                    "length": song[2],
                    "release_date": song[3],
                    "composer1": song[4],
                    "composer2": song[5],
                    "lyricist1": song[6],
                    "lyricist2": song[7],
                    "arranger1": song[8],
                    "arranger1": song[9],
                    "bpm": song[10],
                    "song_category": song[11],
                    "singer1": song[12],
                    "singer2": song[13],
                    "singer3": song[14],
                    "singer4": song[15],
                    "singer5": song[16],
                    "singer6": song[17],
                    "song_desc": song[18]
                }
            #Otherwise, return error message
            else:
               songData = "Song doesn't exist."
    
    return json.dumps(songData, default=str)


