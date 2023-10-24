![Alt text](logo.png)

# Welcome to the Trevor's Friendship Quiz!

## Installing and Running the App

### Create MySQL Database and Table

1.  Run the following scripts in MySQL

    > `CREATE DATABASE trevors_friendship_quiz;`

    > `USE trevors_friendship_quiz;`

    > `CREATE TABLE Leaderboard (id INTEGER PRIMARY KEY AUTO_INCREMENT, candidate_name VARCHAR(30) NOT NULL, quiz_score INTEGER NOT NULL, quiz_date TIMESTAMP NOT NULL DEFAULT NOW());`

### Install NPM Packages

1. MySQL

   > `npm i mysql2`

2. Readline Sync

   > `npm install readline-sync`

3. DotEnv
   > `npm install dotenv --save`

### Update .env to connect to the MySQL Database you created

1. In the .env file, update the arguments for the following parameters to link to your MySQL

   > `MYSQL_HOST`

   > `MYSQL_USER`

   > `MYSQL_PASSWORD`

### Running the App

1. Open Terminal/PowerShell and navigate to the "Trevors Friend Quiz" folder.
2. Run:
   > `node quiz.js`
3. Follow the on-screen instructions.
4. **Become my friend!**
