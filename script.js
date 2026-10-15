/* ====================================================
   QUESTIONS DU QUIZ
   
   C'EST PRINCIPALEMENT CETTE PARTIE QUE TU MODIFIERAS
   ==================================================== */

const questions = [

  {
    question:
      "Ecossais ou Pom pom girl ?",

    imageQuestion:
      "images/q01.jpg",

    choixA:
      "Ecossais",

    choixB:
      "Pom pom girl",

    bonneReponse:
      "Ecossais",

    explication:
      "Ecossais !",

    imageReponse:
      "images/r01.jpg"
  },


  {
    question:
      "À ton avis, quelle proposition est juste ?",

    imageQuestion:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",

    choixA:
      "Réponse A",

    choixB:
      "Réponse B",

    bonneReponse:
      "A",

    explication:
      "Cette fois, la bonne réponse était A.",

    imageReponse:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80"
  }

];



/* ====================================================
   MOTEUR DU JEU

   TU N'AS PAS BESOIN DE MODIFIER CETTE PARTIE
   ==================================================== */


let index = 0;

let score = 0;

let answered = false;



/* Affiche une question */

function showQuestion() {

  answered = false;

  const q = questions[index];


  document.getElementById("question-view").style.display =
    "block";

  document.getElementById("feedback-view").style.display =
    "none";

  document.getElementById("finish-view").style.display =
    "none";


  /* Numéro de question */

  document.getElementById("counter").textContent =
    (index + 1) + " / " + questions.length;


  /* Barre de progression */

  document.getElementById("bar").style.width =
    ((index + 1) / questions.length * 100) + "%";


  /* Question */

  document.getElementById("label").textContent =
    "Question " + (index + 1);


  document.getElementById("question").textContent =
    q.question;


  /* Réponses */

  document.getElementById("answer-a").textContent =
    q.choixA;


  document.getElementById("answer-b").textContent =
    q.choixB;


  /* Image */

  document.getElementById("quiz-image").src =
    q.imageQuestion;

}



/* Le joueur clique sur A ou B */

function answer(choice) {

  if (answered) {
    return;
  }

  answered = true;


  const q = questions[index];


  const correct =
    choice === q.bonneReponse;


  if (correct) {
    score++;
  }


  /* Cache la question */

  document.getElementById("question-view").style.display =
    "none";


  /* Affiche la correction */

  document.getElementById("feedback-view").style.display =
    "block";


  const result =
    document.getElementById("result");


  /* VRAI ou FAUX */

  if (correct) {

    result.textContent =
      "✓ VRAI !";

    result.className =
      "result good";

  }

  else {

    result.textContent =
      "✕ FAUX";

    result.className =
      "result bad";

  }


  /* Bonne réponse */

  document.getElementById("correct-answer").textContent =
    "Bonne réponse : " + q.bonneReponse;


  /* Explication */

  document.getElementById("explanation").textContent =
    q.explication;


  /* Image de correction */

  document.getElementById("quiz-image").src =
    q.imageReponse;


  /* Texte du bouton */

  if (index === questions.length - 1) {

    document.getElementById("next").textContent =
      "Voir mon score";

  }

  else {

    document.getElementById("next").textContent =
      "Question suivante →";

  }

}



/* Passage à la prochaine question */

function nextQuestion() {

  if (index === questions.length - 1) {

    finish();

  }

  else {

    index++;

    showQuestion();

  }

}



/* Fin du quiz */

function finish() {

  document.getElementById("feedback-view").style.display =
    "none";


  document.getElementById("finish-view").style.display =
    "block";


  document.getElementById("score").textContent =
    score + " / " + questions.length;


  document.getElementById("counter").textContent =
    "";


  document.getElementById("bar").style.width =
    "100%";

}



/* Recommencer */

function restart() {

  index = 0;

  score = 0;

  answered = false;

  showQuestion();

}



/* Lancement du jeu */

showQuestion();
