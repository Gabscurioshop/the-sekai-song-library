import sys, logging, pymysql, json
import db_config

def formatJSON(cur, query_dict):
    #return query results in JSON format
    response = []
    for entity in cur.fetchall():
        #loop through each row fetched from table
        entity_fact = {}
        #assign each value to proper field name
        for row in range(0, len(entity)):
            entity_fact[query_dict[row]] = entity[row]
        response.append(entity_fact)
    return response

def aggregateData(event):
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

    response = []
    #check the type of chart selected
    option = event["option"]
    #get the cursor
    with conn.cursor() as cur:

        #Get total songs per unit
        if(option == "countUnitSongs"):
            total_unit_songs={0:"Unit_ID", 1: "Song_Count"}
            cur.execute("Select unit_id, COUNT(song_name) FROM Song GROUP BY unit_id;")
            #Convert query results to list of {"Unit_Id":"value","Song_Count":"Value"} pairs
            response = formatJSON(cur, total_unit_songs)
        return response

