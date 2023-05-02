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

    #If there is no Unit ID selected, return error values
    if unit_ID is "":
        no_data = {"id": "Select a unit from the units page",
                    "name":"No Unit Found.",
                    "profile":"N/A",
                    "color":"N/A",
                    "member_1":"N/A",
                    "member_2":"N/A",
                    "member_3":"N/A",
                    "member_4":"N/A",
                    "member_5":"N/A",
                    "member_6":"N/A"
        }
        return no_data
    
    #Otherwise, retrieve unit data from the database
    else:
       #get the cursor
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM Unit Where Unit_ID = %s ",[unit_ID])
            unit = cur.fetchone()

            #Convert response to JSON 
            unit_data = {"id": unit[0],
                     "name":unit[1],
                     "profile":unit[2],
                     "color":unit[3],
                     "member_1":unit[4],
                     "member_2":unit[5],
                     "member_3":unit[6],
                     "member_4":unit[7],
                     "member_5":unit[8],
                     "member_6":unit[9]
            }
        return unit_data
    
        