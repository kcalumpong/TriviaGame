var userCorrect = 0;
var userIncorrect = 0;
var minutes = 10;
var intervalId;
var unanswered = 0;


$(document).ready(function() {

$("#questions").hide();  

$("#start").click(function(){
    $(this).hide();
    $("#questions").show();

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement () {
        minutes--;
        $("#timeRemaining").html("<h3> Time Remaining: " + minutes + "</h3>")
        
        if (minutes === 0) {
            stop();
        }
    }
    run()  
});

$("#finalScore").hide();

$("#finishedButton").click(function(){
    $(this).hide();
    $("#questions").hide();
    $("#finalScore").show();
});

  $("#questionOne").click(function() {
  var answerOne = $('input[type="radio"][name="country"]:checked').val();
  console.log(answerOne);

  if (answerOne === "4") {
      userCorrect++;
  } else {
      userIncorrect++;
  }
  scoreBoard();

  });

  $("#questionTwo").click(function() {
    var answerTwo = $('input[type="radio"][name="drink"]:checked').val();
    console.log(answerTwo);
  
    if (answerTwo === "3") {
        userCorrect++;
    } else {
        userIncorrect++;
    }
    scoreBoard();
  
    });

    $("#questionThree").click(function() {
        var answerThree = $('input[type="radio"][name="dessert"]:checked').val();
        console.log(answerThree)

        if (answerThree === "4") {
            userCorrect++;
        } else {
            userIncorrect++;
        }
        scoreBoard();

    })

    $("#questionFour").click(function() {
        var answerFour = $('input[type="radio"][name="got"]:checked').val();
        console.log(answerFour)

        if (answerFour === "1") {
            userCorrect++;
        } else {
            userIncorrect++;
        }
        scoreBoard();
    })

    $("#questionFive").click(function(){
        var answerFive = $('input[type="radio"][name="app"]:checked').val();
        console.log(answerFive);

        if (answerFive === "2") {
            userCorrect++;
        } else {
            userIncorrect++;      
        }
        scoreBoard();
       
    })

    function stop() {
        clearInterval(intervalId)
        scoreBoard();
    }

    var scoreBoard = function() {
        $("#userCorrect").text("Correct Answers: " + userCorrect)
        $("#userIncorrect").text("Incorrect Answers: " + userIncorrect)
    }

 

});




