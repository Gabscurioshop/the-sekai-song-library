# the-sekai-song-library

# What is Project SEKAI?
Project SEKAI COLORFUL STAGE feat. Hatsune Miku (or Hatsune Miku: Colorful Stage! in English) is a Japanese rhythm based game for iOS and Android. It is developed by SEGA, Craft Egg, Colorful Palette, and Crypton Future Media. The goal of the game is to tap your device's screen to the beat of Virtual Singer songs. The majority of these songs are performed by five music groups and six Virtual Singers.

# What Are VIRTUAL SINGERS?
Virtual Singers are software-based synthesizers that mimic singers' vocals and are used by musicians from all across the globe. This game features six popular Japanese Virtual Singers owned by Crypton Future Media. These singers are Hatsune Miku, Kagamine Rin, Kagamine Len, Megurine Luka, MEIKO, and KAITO.

# What is the SEKAI Song Library?
The SEKAI Song Library is a fan-made app for managing discography data for the five music groups featured in the game. With this app, users can view song and CD data that were released in the game. In addition, it will allow users to generate and view a variety of charts based on song data. 

# How to Setup the App Locally
1. Install NodeJS: https://nodejs.org/en/download
2. For Node, install the following libraries:
   - react-router-dom, axios, chart.js, react-chartjs-2 
3. Install Python: https://www.python.org/downloads/
4. Install MySQL Workbench: https://dev.mysql.com/downloads/workbench/ 
   - In MySQL, import the SQL file: sekai-2020-09-30.sql
5. Install Flask: https://flask.palletsprojects.com/en/2.2.x/installation/ 
   - I'd recommend launching a virtual environment in your terminal every time you work on the code, just to prevent any clutter on your laptop while running the program.
   - $ . venv/bin/activate (for Mac)
   - venv\Scripts\activate (for Windows)
6. Install pymysql: https://pypi.org/project/pymysql/
7. To run the program, go into the backend folder with app.py and make sure the virtual environment is activated.
   - Run npm run start-backend
8. In another terminal in the main folder, run the following command:
   - npm start
