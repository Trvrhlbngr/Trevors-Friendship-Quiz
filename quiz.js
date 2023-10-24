import rs from 'readline-sync';

import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

console.log('\n||==============================================================||\n||  Welcome to the "Do you deserve to be Trevors friend" Quiz!  ||\n||==============================================================||\n')


let userName = rs.question('||  Please enter your name: ')

let score = 0
    if (userName === "Joey") {
        score = score + 40
        console.log("\n\n             •.,¸,.•*`•.,¸¸,.•*¯ ╭━━━━━━━━━━━━━━━━╮\n             •.,¸,.•*¯`•.,¸,.•*¯.|:::::::::::/___/\n             •.,¸,.•*¯`•.,¸,.•* <|::::::::::(｡ ●ω●｡)\n             •.,¸,.•¯•.,¸,.•╰ *  >し---------し--Ｊ\n\n                 Whattup my boiiiiiiiiiiiiiiiii")
        console.log("\n||==============================================================||\n||        As a token of my gratitude, I have awarded you        ||\n||          ", score, "additional points just for being YOU!           ||\n||==============================================================||\n");
    } 
    else {
        score === score
        console.log("\n|| It's nice to meet you, " + userName + "!\n");

    }

// Introduction

const introQuestion = {
    question: "|| This is a quiz to assess your eligibility to be my friend.\n\n|| Do you wish to continue? Y / N \n\n==== Answer: ",
    answer: "Y"
}

let intro = [introQuestion]

let playIntro = (question,answer) => {
    var userAnswer = rs.question(question)

    if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("\n\n||==============================================================||\n||  ヽ(＾▽＾)人(＾▽＾)人(＾▽＾)ﾉ  ヽ(＾▽＾)人(＾▽＾)人(＾▽＾)ﾉ  ||\n||==============================================================||\n||                            Great!                            ||\n|| A passing score of at least 30 will be needed in order to be ||\n||         eligible to become/continue being my friend.         ||\n||                        Let's begin...                        ||")
    }
    else {
        console.log("\n||==============================================================||\n||   (ಠ_ಠ) Too bad... You lose 1,000,000 points... Bye now...   ||\n||==============================================================||\n")
        score = score - 1000000
        process.exit(0)
    }
};

intro.forEach(question => {
    playIntro(question.question,question.answer)
});

const continueQuestion = {
    question: "||==============================================================||\n||    NOTE: PLEASE ONLY ENTER THE LETTER THAT CORRESPONDS TO    ||\n||                 YOUR ANSWER IN YOUR RESPONSE                 ||\n||==============================================================||\n||                 Press [Enter] to Continue...                 ||\n||==============================================================||\n",
    answer: ""
}
let cont = [continueQuestion]

let playContinue = (question,answer) => {
    var userAnswer = rs.question(question)
};

cont.forEach(question => {
    playContinue(question.question,question.answer)
})

// Questions -- Ternary Operator to provide different questions based on userName: Essentially "if 'Joey', else..."

var question1 = {
    question: (userName === "Joey") ? "\n|| 1. What did Schrodinger's Cat experiment prove?\n\n[A] That all cats are assholes. Dogs ftw.\n[B] Nothing. Schrodinger constructed his imaginary experiment\n    with the cat to demonstrate that simple misinterpretations\n    of quantum theory can lead to absurd results which do not\n    match the real world.\n[C] The Theory of Relativity.\n[D] CoD should have died a long time ago.\n\n==== Answer: " : "\n|| 1. One show must go. Which one?\n\n[A] The Office\n[B] Seinfeld\n[C] Friends\n[D] Full House\n\nAnswer: ",
    answer: (userName === "Joey") ? "A" : "C"
}

var question2 = {
    question: (userName === "Joey") ? "\n|| 2. All three of these bands died. Choose one to have lived on.\n\n[A] Casen Pointe\n[B] The Anchor Collective\n[C] Newfound Line\n[D] I refuse to choose as they all should have lived. I will die on this hill.\n\n==== Answer: " : "\n|| 2. One Food must go. Which one?\n\n[A] Pizza\n[B] Tacos\n[C] Burgers\n[D] Pasta\n\n==== Answer: ",
    answer: (userName === "Joey") ? "D" : "D"
}

var question3 = {
    question: (userName === "Joey") ? "\n|| 3. How many dozen eggs does Gaston eat according to his song?\n\n[A] 3\n[B] 5\n[C] 7\n[D] 10\n\n==== Answer: " : "\n|| 3. Should you mix more than 2 flavors when you get a Slurpee?\n\n[A] Yes\n[B] No\n\n==== Answer: ",
    answer: (userName === "Joey") ? "B": "B"
}

var question4 = {
    question: (userName === "Joey") ? "\n|| 4. Are you a good boi?\n\n[A] Yes\n[B] No\n\n==== Answer: " : "\n|| 4. Which measurement system is better, metric or imperial?\n\n[A] Metric\n[B] Imperial\n\n==== Answer: ",
    answer: (userName === "Joey") ? "B": "A"
}

var question5 = {
    question: (userName === "Joey") ? "\n|| 5. Who is your Daddy?\n\n[A] Trevor\n\n==== Answer: " : "\n|| 5. Which character have I not been compared to because of my mustache?\n\n[A] The Monopoly Guy\n[B] The Pringles Guy\n[C] Captain Hook\n[D] White Goodman\n\n==== Answer: ",
    answer: (userName === "Joey") ? "A" : "C"
}

// Quiz
let questions = [question1,question2,question3,question4,question5]

let play = (question,answer) => {
    var userAnswer = rs.question(question)

    if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score = score + 10
    console.log("\n||==============================================================||\n||                          Correct!                            ||\n||                     You earned 10 points                     ||\n||                  Your current score is:", score, "                  ||\n||==============================================================||\n")
    }
    else {
        score = score - 5
        console.log("\nWrong! the correct answer was:", answer, ". You lost 5 points.\n")
    }
    }

questions.forEach(question => {
    play(question.question,question.answer)
})

console.log("\n--------------------------\nYour final score is:  ", score, "\n--------------------------")
console.log("\nThanks for playig!\n\nDo know, the passing score was completely arbitrary. As such, you are officially eligible to be my friend simply for completing this quiz - congratulations! Do note however that I will judge you for your responses to questions 1 and 2 .\n\nPlease find your score on the list below to see where you landed on the Trevor's Friend scale, as long as you made it into the top 10.\n")

// SQL
async function getCandidates() {
    const [rows] = await pool.query("SELECT candidate_name as Name, quiz_score as Score FROM Leaderboard ORDER BY quiz_score DESC LIMIT 10")
    return rows
};

async function createCandidate(userName, score) {
    const result = await pool.query(`
    INSERT INTO Leaderboard (candidate_name, quiz_score)
    VALUES (?, ?)
    `, [userName, score])
    return result
};

//Results
const result = await createCandidate(userName, score);

const candidate = await getCandidates()
console.log(candidate);
