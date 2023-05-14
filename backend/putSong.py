import sys, logging, pymysql, json
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
    if(singerID == "" or singerID == "Singer1" or singerID == "Singer2" 
       or singerID == "Singer3"or singerID == "Singer4" 
       or singerID == "Singer5" or singerID == "Singer6"): 
        return ""

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

def getField(cur, conn, event, songName):
  #No update field selected
    if(event.get('updateField') is None or event['updateField'] == ""):
       return "No field to update"  
    
    #update song name
    elif(event['updateField'] == "updateSongName"):
        #If new Song Name input is empty, do nothing
        if(event.get('newSongName') is None or event['newSongName'] == ""): return "No new song name found."
        #If new Song Name input is the same as the original or already appears in the song table, do nothing
        elif(event['newSongName'] == songName or
             cur.execute("SELECT song_name FROM Song WHERE song_name = %s",  [event['newSongName']])):
            return "Song name already exists"
        #If song name contains mysql query, do nothing
        elif checkForQuery(event['newSongName']): 
            return "Invalid song name"
        else:
            newSongName = event['newSongName']
            cur.execute("UPDATE Song SET song_name = % s WHERE song_name = %s", (newSongName, songName))
            conn.commit()
            return "Updating Song Name"
        
    #update unit id
    elif(event['updateField'] == "updateUnit"):
        #If new Unit ID input is empty, do nothing
        if(event.get('newUnit') is None or event['newUnit'] == ""): return "No new unit id found."
        else:
            newUnit = event['newUnit']
            cur.execute("UPDATE Song Set unit_id = %s WHERE song_name = %s", (newUnit, songName))
            conn.commit()
            return "Updating Unit"
        
    #update song length
    elif(event['updateField'] == "updateLength"):
        #If new song length input is empty, do nothing
        if(event.get('newMin') is None 
        or event.get('newSec') is None
        or event['newMin'] == ""
        or event['newSec'] == ""): return "No new song length found."
        else:
            newLength =str(event['newMin']) + str(event['newSec'])
            cur.execute("UPDATE Song Set song_length = %s WHERE song_name = %s", (newLength, songName))
            conn.commit()
            return "Updating Song Length"
   
    #update release date
    elif(event['updateField'] == "updateReleaseDate"):
        #If new release date input is empty, do nothing
        if(event.get('newDate') is None or event['newDate'] == ""): return "No new release date found."
        else:
            newDate = event['newDate']
            cur.execute("UPDATE Song Set release_date = %s WHERE song_name = %s", (newDate, songName))
            conn.commit()
            return "Updating Release Date"
            
    #update composer 1
    elif(event['updateField'] == "updateComposer1"):
        #If new composer input is empty, do nothing
        if(event.get('newComposer1') is None or event['newComposer1'] == ""): return "No new composer found."
        #If composer name has query, return nothing
        elif checkForQuery(event['newComposer1']): return "Invalid composer name"
        else:
            newComposer = event['newComposer1']
            cur.execute("UPDATE Song Set composer_1 = %s WHERE song_name = %s", (newComposer, songName))
            conn.commit()
            return "Updating Composer 1"
        
    #update composer 2
    elif(event['updateField'] == "updateComposer2"):
        #If new composer input is empty, do nothing
        if(event.get('newComposer2') is None or event['newComposer2'] == ""): return "No new composer found."
        #If composer name has query, return nothing
        elif checkForQuery(event['newComposer2']): return "Invalid composer name"
        else:
            newComposer = event['newComposer2']
            cur.execute("UPDATE Song Set composer_2 = %s WHERE song_name = %s", (newComposer, songName))
            conn.commit()
            return "Updating Composer 2"
    
    #update lyricist 1
    elif(event['updateField'] == "updateLyricist1"):
        #If new lyricist input is empty, do nothing
        if(event.get('newLyricist1') is None or event['newLyricist1'] == ""): return "No new lyricist found."
        elif checkForQuery(event['newLyricist1']): return "Invalid lyricist name"
        else:
            newLyricist = event['newLyricist1']
            cur.execute("UPDATE Song Set lyricist_1 = %s WHERE song_name = %s", (newLyricist, songName))
            conn.commit()
            return "Updating Lyricist 1"
    
     #update lyricist 2
    elif(event['updateField'] == "updateLyricist2"):
        #If new lyricist input is empty, do nothing
        if(event.get('newLyricist2') is None or event['newLyricist2'] == ""): return "No new lyricist found."
        elif checkForQuery(event['newLyricist2']): return "Invalid lyricist name"
        else:
            newLyricist = event['newLyricist2']
            cur.execute("UPDATE Song Set lyricist_2 = %s WHERE song_name = %s", (newLyricist, songName))
            conn.commit()
            return "Updating Lyricist 2"
        
    #update arranger 1
    elif(event['updateField'] == "updateArranger1"):
        #If new arranger input is empty, do nothing
        if(event.get('newArranger1') is None or event['newArranger1'] == ""): return "No new arranger found."
        elif checkForQuery(event['newArranger1']): return "Invalid arranger name"
        else:
            newArranger = event['newArranger1']
            cur.execute("UPDATE Song Set arranger_1 = %s WHERE song_name = %s", (newArranger, songName))
            conn.commit()
            return "Updating Arranger 1"
    
    #update arranger 2
    elif(event['updateField'] == "updateArranger2"):
        #If new arranger input is empty, do nothing
        if(event.get('newArranger2') is None or event['newArranger2'] == ""): return "No new arranger found."
        elif checkForQuery(event['newArranger2']): return "Invalid arranger name"
        else:
            newArranger = event['newArranger2']
            cur.execute("UPDATE Song Set arranger_2 = %s WHERE song_name = %s", (newArranger, songName))
            conn.commit()
            return "Updating Arranger 2"
    
    #update BPM
    elif(event['updateField'] == "updateBPM"):
        #If new BPM input is empty, do nothing
        if(event.get('newBPM') is None or event['newBPM'] == ""): return "No new BPM found."
        else:
            newBPM = event['newBPM']
            cur.execute("UPDATE Song Set bpm = %s WHERE song_name = %s", (newBPM, songName))
            conn.commit()
            return "Updating BPM"
        
    #Update Song Category
    elif(event['updateField'] == "updateCategory"):
        #If new Category input is empty, do nothing
        if(event.get('newCategory') is None or event['newCategory'] == ""): return "No new Category found."
        else:
            newCat = event['newCategory']
            cur.execute("UPDATE Song Set category = %s WHERE song_name = %s", (newCat, songName))
            conn.commit()
            return "Updating Song Category"
    
    #update singers
    elif(event['updateField'] == "updateSinger1"):
         if(event.get('newSinger1') is None or event['newSinger1'] == ""): return "New Singer 1 not found."
         else:
             singer1 = getSingerName(cur, event['newSinger1'])
             cur.execute("UPDATE Song Set singer_1 = %s WHERE song_name = %s", (singer1, songName))
             conn.commit()
             return "Updating Singer 1"

    elif(event['updateField'] == "updateSinger2"):
         if(event.get('newSinger2') is None ): return "New Singer 2 not found."
         else:
             singer2 = getSingerName(cur, event['newSinger2'])
             cur.execute("UPDATE Song Set singer_2 = %s WHERE song_name = %s", (singer2, songName))
             conn.commit()
             return "Updating Singer 2"
            
    elif(event['updateField'] == "updateSinger3"):
         if(event.get('newSinger3') is None ): return "New Singer 3 not found."
         else:
             singer3 = getSingerName(cur, event['newSinger3'])
             cur.execute("UPDATE Song Set singer_3 = %s WHERE song_name = %s", (singer3, songName))
             conn.commit()
             return "Updating Singer 3"

    elif(event['updateField'] == "updateSinger4"):
         if(event.get('newSinger4') is None ): return "New Singer 4 not found."
         else:
             singer4 = getSingerName(cur, event['newSinger4'])
             cur.execute("UPDATE Song Set singer_4 = %s WHERE song_name = %s", (singer4, songName))
             conn.commit()
             return "Updating Singer 4"

    elif(event['updateField'] == "updateSinger5"):
         if(event.get('newSinger5') is None ): return "New Singer 5 not found."
         else:
             singer5 = getSingerName(cur, event['newSinger5'])
             cur.execute("UPDATE Song Set singer_5 = %s WHERE song_name = %s", (singer5, songName))
             conn.commit()
             return "Updating Singer 5"

    elif(event['updateField'] == "updateSinger6"):
         if(event.get('newSinger6') is None ): return "New Singer 6 not found."
         else:
             singer6 = getSingerName(cur, event['newSinger6'])
             cur.execute("UPDATE Song Set singer_6 = %s WHERE song_name = %s", (singer6, songName))
             conn.commit()
             return "Updating Singer 6"
    
    #update song description
    elif(event['updateField'] == "updateSongDesc"):
        #If new Song desc input is empty, do nothing
        if(event.get('newSongDesc') is None or event['newSongDesc'] == ""): return "No new song name found."
        #If song name contains mysql query, do nothing
        elif checkForQuery(event['newSongDesc']): 
            return "Invalid song description"
        else:
            newSongDesc = event['newSongDesc']
            cur.execute("UPDATE Song SET song_desc = % s WHERE song_name = %s", (newSongDesc, songName))
            conn.commit()
            return "Updating Song Description"
        
def putSong(event):
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

    songName = event['name']
    response = ""
    
    #get the cursor
    with conn.cursor() as cur:
        #if song name contains mysql query, return error message
        if checkForQuery(songName): 
            response = "Invalid song name"
        #Otherwise, check if song exists in database
        else:
            cur.execute("SELECT song_name FROM Song WHERE song_name = %s",  [songName])
            query_check = cur.fetchone()
            #if the song name exists, form update paramters
            if query_check:
                response = getField(cur, conn, event, songName)
            else:
                response = "Song doesn't exist."
    return json.dumps(response)