var userCorrect = 0;
var userIncorrect = 0;
var minutes = 2;
var seconds = 60;
var intervalId;
var unanswered = 5;
var b = false;


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
        

        if (seconds === 0 && minutes === 0) {
            stop();
            return;
        }

        if (seconds === 0) {
            minutes--;
            $("#minute").text(minutes);
            seconds = 60;
        }
    
        seconds--;
        $("#seconds").text(seconds);
        if (b === false) {// should only hit once
            $('#minute').text(2);
            b = true;
        }        
    }
    run()  
});

$("#finalScore").hide();

function determineScore(userAnswer, solution) {
    if (!userAnswer) return;
    if (userAnswer === solution) {
        userCorrect++;
        unanswered--;

    } else {
        userIncorrect++;
        unanswered--;

    }
}

$("#finishedButton").click(function(){
    var answerOne = $('input[type="radio"][name="country"]:checked').val();
    var answerTwo = $('input[type="radio"][name="drink"]:checked').val();
    var answerThree = $('input[type="radio"][name="dessert"]:checked').val();
    var answerFour = $('input[type="radio"][name="got"]:checked').val();
    var answerFive = $('input[type="radio"][name="app"]:checked').val();

    determineScore(parseInt(answerOne), 4);
    determineScore(parseInt(answerTwo), 3);
    determineScore(parseInt(answerThree), 4);
    determineScore(parseInt(answerFour), 1);
    determineScore(parseInt(answerFive), 2);
    stop();

});

    function hideShowScoreboard() {
        $("#questions").hide();
        $("#finalScore").show();
        $("#finishedButton").hide();
    }

    function stop() {
        clearInterval(intervalId)
        scoreBoard();
        hideShowScoreboard();
    }

    var scoreBoard = function() {
        $("#userCorrect").text("Correct Answers: " + userCorrect)
        $("#userIncorrect").text("Incorrect Answers: " + userIncorrect)
        $("#unanswered").text("Unanswered: " + unanswered);
    }

 

});




