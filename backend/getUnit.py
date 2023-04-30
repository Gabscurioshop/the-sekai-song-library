import sys, logging, pymysql
import db_config

def getUnit(event):
    
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

    #Retrieve Unit ID from React
    unit_ID = event["unit_ID"]

    #get the cursor
    with conn.cursor() as cur:
        #Retrieve Unit data from database by Unit ID
        cur.execute("SELECT * FROM Unit Where Unit_ID = %s ",[unit_ID])
        unit = cur.fetchone()

        #Convert response to JSON 
        unit_data = {
            "id": unit[0],
            "name":unit[1],
            "profile":unit[2],
            "color":unit[3],
            "member_1":unit[4],
            "member_2":unit[5],
            "member_3":unit[6],
            "member_4":unit[7],
            "member_5":unit[8],
            "member_6":unit[9],
        }
    return unit_data