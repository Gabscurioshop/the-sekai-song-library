from flask import Flask
from getUnit import getUnit

app = Flask(__name__)

@app.route('/unit', methods=['GET', 'POST'])
def unit():
    param = {"unit_ID":"LN"}
    response = getUnit(param)
    return response
