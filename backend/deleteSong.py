import sys, logging, pymysql
import db_config

def checkForQuery(userInput):
    input = userInput.lower()
    #Check if mysql queries are passed in user input
    if ("select" in input or "insert" in input or "update" in input or "delete" in input):
        return True
    else: 
        return False

def deleteSong(event):
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
            #if the song name exists, delete the song
            if query_check:
                cur.execute("DELETE FROM Song WHERE song_name = %s",  [songName])
                conn.commit()
                response = "Deleted " + songName + " from the database."
            #Otherwise, alert the user song doesn't exist
            else:
                response = "Song doesn't exist."
    return response 
