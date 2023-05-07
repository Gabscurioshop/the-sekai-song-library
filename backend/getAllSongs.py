import sys,logging, pymysql, json
import db_config


def retrieveTable(cur, table_dict):
    table_details = []
    for entity in cur.fetchall():
        entity_fact = {}
        #Iterate element by element in each row
        for row in range(0, len(entity)):
            #Assign element to field header
            entity_fact[table_dict[row]] = entity[row]
        table_details.append(entity_fact)
    return table_details

def allSongs():
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

    #Create song dictionary
    song_dict ={0: "Song Name", 1: "Unit", 2: "Release Date", 3: "Composer 1", 4: "Category"}
    table_details = []

    #get the cursor
    with conn.cursor() as cur:
        #Convert Song Table to JSON string
        cur.execute("SELECT song_name, unit_id, release_date, composer_1, category FROM Song")
        table_details = retrieveTable(cur, song_dict)       
    return {'body':json.dumps(table_details, default=str)}                       
         
