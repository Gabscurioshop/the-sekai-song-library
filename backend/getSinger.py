import sys, logging, pymysql
import db_config

def getSinger(event):
    
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

    #Retrieve Singer ID from React
    singer_ID = event["singer_ID"]

    #If there is no Singer ID selected, return error values
    if singer_ID is "":
        no_data = {
            "name": "Singer not found.",
            "unit": "N/A",
            "dob": "N/A",
            "height": "N/A",
            "color": "N/A",
            "voice_actor": "N/A",
            "singer_profile": "N/A"
        }
        return no_data
    
    #Otherwise, retrieve singer data from the database
    else:
       #get the cursor
        with conn.cursor() as cur:
            cur.execute("SELECT last_name, first_name, \
                        unit_id, dob, height_cm, hex_color, \
                        voice_actor,singer_profile From Singer \
                        Where Singer_ID = %s ",[singer_ID])
            singer = cur.fetchone()

            #Convert response to JSON 
            singer_data = {
            "name": singer[0] + " " +singer[1],
            "unit": singer[2],
            "dob": str(singer[3]),
            "height": singer[4],
            "color": singer[5],
            "voice_actor": singer[6],
            "singer_profile": singer[7]
            }
        return singer_data
    
        