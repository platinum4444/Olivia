"use strict";

$("document").ready(function () {
  var numberQuestionForAdding;
  var preguntas = ["He was …. clever that he won a special prize. ", "You need to turn ... the music, it’s half past 10 already. ", "A lot of flights ...  cancelled because of the bad weather.", "Can I leave my bike here?", "I don’t understand this message.", "What dress are you going to wear for her wedding?", "I’ll have two large pizzas, please.", "Would you like to go to the cinema tonight?", "Why are you angry with me?", "Is she going to be ok?", "I’m really sorry- I didn’t ...  to upset you.", "He began his speech ... the famous saying ‘to be or not to be?’.", "I can’t watch them eating the bugs. ... money in the world wouldn’t get me to even touch them.", "Can I …. this book? I’ll bring it back next month.", "… is always a problem with this printer.", "Would you mind…..these glasses a wipe before putting them on the table?", "I was looking forward … you next weekend. What a shame that I have to work.", "Were you….to say something? Sorry, I’m listening now.", "Before we go you have to …… your seat belts.", "I’d rather you….  me the truth.", "You should…me before! I can’t believe you didn’t trust me!", "Before making any decisions on that matter you should…… all the possibilities.", "Once I realised I had lost my wallet, I decided to…   in the park where I spent most of the afternoon."];
  var respuestas = [["very", "such", "too", "so"], ["on", "up", "left", "down"], ["will", "was", "is", "were"], ["Thank you. I like that.", "You’re more than welcome.", "Maybe you could do it tomorrow?"], ["Maybe you could.", "I think you’ll be ok.", "I can help you with it if you want."], ["It’s complicated.", "I’m not sure yet.", "I hope she likes it."], ["With diet coke and sprite.", "They will be ready in 15 minutes.", "How much do you want?"], ["No problem at all.", "What are we going to watch?", "I don’t think it’s ok."], ["I want to.", "You never listen to me.", "I don’t think so."], ["If she feels like.", "She will go to the doctor tomorrow.", "Only if she takes her medication."], ["wanted", "mean", "won't", "like"], ["in", "on", "with", "by"], ["Enough", "A lot", "All the", "Much"], ["lend", "borrow", "ask"], ["Their", "There", "They're"], ["getting", "making", "having", "giving"], ["to see", "see", "to have seen", "to seeing"], ["about", "wanting", "want", "almost"], ["close", "put", "fasten", "attach"], ["would tell", "told", "to tell", "will tell"], ["be telling", "have told", "told", "have been telling"], ["think", "notice", "consider", "foreseen"], ["Look it up", "Look after it", "Look forward to it", "Look for it"]];
  var respuestasCorrectas = ["so", "down", "were", "You’re more than welcome.", "I can help you with it if you want.", "I’m not sure yet.", "They will be ready in 15 minutes.", "What are we going to watch?", "You never listen to me.", "Only if she takes her medication.", "mean", "with", "All the", "borrow", "There", "giving", "to seeing", "about", "fasten", "told", "have told", "consider", "Look for it"];
  var puntuation = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2];
  var totalPuntuation = 0;
  var boxQuestion;
  var posibleAnswer;
  var boxPosibleAnswers;
  var MOVEMENT_BUS = calculateMovementBus();

  for (var i = 0; i < preguntas.length; i++) {
    addQuestion();
    boxQuestion = $(".box-test-questions__box-question").eq(i);
    boxQuestion.append("<h3 class='box-test-questions__title-question'>" + preguntas[i] + "</h3>");
    addBoxAnswers();
    boxPosibleAnswers = $(boxQuestion).find(".box-test-questions__posible-answers");

    for (var j = 0; j <= 3; j++) {
      posibleAnswerText = respuestas[i][j];

      if (respuestas[i][j] != undefined) {
        addAnswers();
      }
    }
  }

  function addQuestion() {
    var boxQuestionCode = "\n            <div class='box-test-questions__box-question'>\n                \n            </div>\n        ";
    $(".box-test-questions").append(boxQuestionCode);
  }

  function addBoxAnswers() {
    var boxAnswersCode = "\n            <div class='box-test-questions__posible-answers'>\n            \n            </div>\n        ";
    boxQuestion.append(boxAnswersCode);
  }

  function addAnswers() {
    var answerCode = "\n            <button class='box-test-questions__answer-button'>\n                ".concat(posibleAnswerText, "\n            </button>\n        ");
    $(boxPosibleAnswers).append(answerCode);
  }

  function addFinalResults() {
    var level = resolveLevel(totalPuntuation);
    var results = "\n            <h3> Final Result ".concat(level, " </h3>\n            <h4>Well done, keep up the good work.</h4>\n        ");

    switch (level) {
      case "A1":
        results += "<h5>You are at the level: beginner. You should be able to understand and use common everyday expressions and very basic phrases. You should be able to introduce yourself and others and ask and answer questions about personal details, people you know and things you have. You should be able to have a simple conversation if the other person talks slowly and clearly and is prepared to help you.\n                I will be happy to help you improve. Book an online class or follow me on social media.</h5>";
        break;

      case "A2":
        results += "<h5>You are at the level: elementary. You should be able to understand sentences and commonly used expressions about familiar to you subjects (for example basic personal and family information, shopping, local area, work). You should be able to describe in simple words your background, close environment routines and your needs. You should be able to exchange basic information with others.\n                I will be happy to help you improve. Book an online class or follow me on social media.</h5>";
        break;

      case "B1":
        results += "<h5>You are at the level: intermediate. You should be able to understand the main points of conversations found in different situations at work, school, etc. You should be able to deal with most situations when travelling. You should be able to write a simple text on a familiar subject or one of personal interest. You should be able to describe experiences and events, dreams, hopes & ambitions and explain your reasons, opinions and plans. You should be able to justify your opinions.\n                I will be happy to help you improve. Book an online class or follow me on social media.</h5>";
        break;

      case "B2":
        results += "<h5>You are at the level: upper-intermediate. You should be able to understand the main ideas of complex text. You should be able to interact with some fluency where you are spontaneous with a native speaker and there shouldn\u2019t be too much strain from your side. The native speaker should understand you without any major problems. You should be able to write a clear, detailed text on a wide range of subjects and justify your opinions with details.\n                I will be happy to help you improve. Book an online class or follow me on social media.</h5>";
        break;

      case "C1":
        results += "<h5>You are at the level: advanced. You should be able to understand a wide range of difficult, longer texts. You should be able to express yourself fluently and spontaneously in a fast manner. You should be able to use language effectively for all purposes. You should be able to write a detailed and cohesive text on complicated subjects.\n                I will be happy to help you improve. Book an online class or follow me on social media.</h5>";
        break;

      default:
        break;
    }

    results += "<small>Please bear in mind this test gives you a general idea of your language level based solely on a number of different difficulty questions. To receive a detailed and more adequate evaluation of your language level you should be assessed by a professional. </small>";
    $(".box-test-questions").html(results);
  }

  var numberQuestionShowing = 0;
  var questionShowing = $(".box-test-questions__box-question").eq(numberQuestionShowing);
  var lastQuestion = preguntas.length;
  questionShowing.fadeIn(1000);
  $(".box-test-questions__box-question").eq(0).fadeIn(1000);
  var textSelectedButton;
  var hasFailed = false;
  $(".box-test-questions__answer-button").click(function () {
    textSelectedButton = $(this).text().trim();

    if (textSelectedButton === respuestasCorrectas[numberQuestionShowing]) {
      questionShowing.hide();
      numberQuestionShowing++;
      questionShowing = $(".box-test-questions__box-question").eq(numberQuestionShowing);
      questionShowing.fadeIn(1000);
      moveBus();
      addPuntuation();

      if (numberQuestionShowing == lastQuestion) {
        addFinalResults();
      }
    } else {
      $(this).css("background-color", "#8F3636");
      $(this).css("color", "white");
      hasFailed = true;
    }
  });

  function addPuntuation() {
    if (hasFailed != true) {
      totalPuntuation += puntuation[numberQuestionShowing - 1];
      hasFailed = false;
    } else {
      hasFailed = false;
    }
  }

  function resolveLevel(puntuation) {
    if (puntuation <= 10) {
      return "A1";
    } else if (puntuation < 20) {
      return "A2";
    } else if (puntuation <= 30) {
      return "B1";
    } else if (puntuation <= 37) {
      return "B2";
    } else if (puntuation <= 39) {
      return "C1";
    }
  }

  function calculateMovementBus() {
    // The total size of the stage will be 70vw
    // The position of the bus is 1 vw
    var TOTAL_QUESTIONS = preguntas.length,
        FINISH_POSITION = 50;
    return FINISH_POSITION / TOTAL_QUESTIONS;
  }

  console.log(calculateMovementBus());

  function moveBus() {
    $(".bus").animate({
      left: "+=" + MOVEMENT_BUS + "vw"
    }, 1000);
  }
});