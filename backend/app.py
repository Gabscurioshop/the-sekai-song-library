from flask import Flask
from getUnit import getUnit

app = Flask(__name__)

#Retrieve Unit data

#VIRTUAL SINGERS data
@app.route('/VS')
def virtual_singers():
    return getUnit({"unit_ID":"VS"})

#Leo/need data
@app.route('/LN')
def leo_need():
    return getUnit({"unit_ID":"LN"})

#MORE MORE JUMP data
@app.route('/MMJ')
def more_more_jump():
    return getUnit({"unit_ID":"MMJ"})

#Vivid BAD SQUAD data
@app.route('/VBS')
def vivid_bad_squad():
    return getUnit({"unit_ID":"VBS"})

#Wonderlands x Showtime data
@app.route('/WXS')
def wonder_show():
    return getUnit({"unit_ID":"WXS"})

#Nightcord at 25:00 data
@app.route('/N25')
def night_cord():
    return getUnit({"unit_ID":"N25"})

#No Unit ID selected
@app.route('/NoUnit')
def no_unit():
    return getUnit({"unit_ID":""})

