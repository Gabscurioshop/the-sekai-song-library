from flask import Flask, request
from getUnit import getUnit
from getSinger import getSinger
from postSong import postSong
from getSong import getSong
from putSong import putSong

app = Flask(__name__)

#Retrieve Unit data

#VIRTUAL SINGERS data
@app.route('/VS')
def virtual_singers(): return getUnit({"unit_ID":"VS"})

#Leo/need data
@app.route('/LN')
def leo_need(): return getUnit({"unit_ID":"LN"})

#MORE MORE JUMP data
@app.route('/MMJ')
def more_more_jump(): return getUnit({"unit_ID":"MMJ"})

#Vivid BAD SQUAD data
@app.route('/VBS')
def vivid_bad_squad(): return getUnit({"unit_ID":"VBS"})

#Wonderlands x Showtime data
@app.route('/WXS')
def wonder_show(): return getUnit({"unit_ID":"WXS"})

#Nightcord at 25:00 data
@app.route('/N25')
def night_cord(): return getUnit({"unit_ID":"N25"})

#No Unit ID selected
@app.route('/NoUnit')
def no_unit(): return getUnit({"unit_ID":""})

#Retrieve Singer Data

#Miku data
@app.route('/VS-01')
def miku(): return getSinger({"singer_ID":"VS-01"})

#Rin data
@app.route('/VS-02')
def rin(): return getSinger({"singer_ID":"VS-02"})

#Len data
@app.route('/VS-03')
def len(): return getSinger({"singer_ID":"VS-03"})

#Luka data
@app.route('/VS-04')
def luka(): return getSinger({"singer_ID":"VS-04"})

#Meiko data
@app.route('/VS-05')
def meiko(): return getSinger({"singer_ID":"VS-05"})

#Kaito data
@app.route('/VS-06')
def kaito(): return getSinger({"singer_ID":"VS-06"})

#Ichika data
@app.route('/LN-01')
def ichika(): return getSinger({"singer_ID":"LN-01"})

#Saki data
@app.route('/LN-02')
def saki(): return getSinger({"singer_ID":"LN-02"})

#Honami data
@app.route('/LN-03')
def honami(): return getSinger({"singer_ID":"LN-03"})

#Shiho data
@app.route('/LN-04')
def shiho(): return getSinger({"singer_ID":"LN-04"})

#Minori data
@app.route('/MMJ-01')
def minori(): return getSinger({"singer_ID":"MMJ-01"})

#Haruka data
@app.route('/MMJ-02')
def haruka(): return getSinger({"singer_ID":"MMJ-02"})

#Airi data
@app.route('/MMJ-03')
def airi(): return getSinger({"singer_ID":"MMJ-03"})

#Shizuku data
@app.route('/MMJ-04')
def shizuku(): return getSinger({"singer_ID":"MMJ-04"})

#Kohane data
@app.route('/VBS-01')
def kohane(): return getSinger({"singer_ID":"VBS-01"})

#An data
@app.route('/VBS-02')
def an(): return getSinger({"singer_ID":"VBS-02"})

#Akito data
@app.route('/VBS-03')
def akito(): return getSinger({"singer_ID":"VBS-03"})

#Toya data
@app.route('/VBS-04')
def toya(): return getSinger({"singer_ID":"VBS-04"})

#Tsukasa data
@app.route('/WXS-01')
def tsukasa(): return getSinger({"singer_ID":"WXS-01"})

#Emu data
@app.route('/WXS-02')
def emu(): return getSinger({"singer_ID":"WXS-02"})

#Nene data
@app.route('/WXS-03')
def nene(): return getSinger({"singer_ID":"WXS-03"})

#Rui data
@app.route('/WXS-04')
def rui(): return getSinger({"singer_ID":"WXS-04"})

#Kanade data
@app.route('/N25-01')
def kanade(): return getSinger({"singer_ID":"N25-01"})

#Mafuyu data
@app.route('/N25-02')
def mafuyu(): return getSinger({"singer_ID":"N25-02"})

#Ena data
@app.route('/N25-03')
def ena(): return getSinger({"singer_ID":"N25-03"})

#Mizuki data
@app.route('/N25-04')
def mizuki(): return getSinger({"singer_ID":"N25-04"})

#No Singer
@app.route('/NoSinger')
def no_singer(): return getSinger({"singer_ID":""})

#Add Song to Database
@app.route('/postSong', methods=['POST'])
def add_song(): 
    data = request.get_json()
    return postSong(data)

#View song
@app.route('/getSong', methods=['POST'])
def view_song(): 
    data = request.get_json()
    return getSong(data)

#Update song
@app.route('/putSong', methods=['POST'])
def update_song(): 
    data = request.get_json()
    return putSong(data)