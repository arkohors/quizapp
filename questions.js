$(document).ready(function() {

var answerCounter = $("#badge2");
var currentQuestion = 0;
var questions = [
{
	question: "1. What expansion set is this symbol from?",
	picture: "arbsymbol.png",
	answerChoices: ["Alara Reborn", "Dragons of Tarkir", "Khans of Tarkir", "Odyssey"],
	correctChoice: "Alara Reborn",
	feedback: "The previous symbol was from Alara Reborn."
},
{
	question: "2. What expansion set is this symbol from?",
	picture: "MOR_symbol.png",
	answerChoices: ["Alara Reborn", "MorningTide", "Khans of Tarkir", "Odyssey"],
	correctChoice: "MorningTide",
	feedback: "The previous symbol was from MorningTide."
},
{
	question: "3. What expansion set is this symbol from?",
	picture: "ODY_symbol.png",
	answerChoices: ["Alara Reborn", "Dragons of Tarkir", "Khans of Tarkir", "Odyssey"],
	correctChoice: "Odyssey",
	feedback: "The previous symbol was from Odyssey."
},
{
	question: "4. What expansion set is this symbol from?",
	picture: "LRW_symbol.png",
	answerChoices: ["Alara Reborn", "Lorwyn", "Scars of Mirrodin", "Odyssey"],
	correctChoice: "Lorwyn",
	feedback: "The previous symbol was from Lorwyn."
},
{
	question: "5. What expansion set is this symbol from?",
	picture: "SOM_symbol.png",
	answerChoices: ["Alara Reborn", "Dragons of Tarkir", "Scars of Mirrodin", "Odyssey"],
	correctChoice: "Scars of Mirrodin",
	feedback: "The previous symbol was from Scars of Mirrodin."

}]


	console.log(questions[currentQuestion]);
	genq();

	function genq() {
		$('.individual-questions').text(questions[currentQuestion].question);

		for (var i = 0; i < questions[currentQuestion].answerChoices.length; i++) {
			$('#choices').append('<input type="radio" name="radioName" value="' + questions[currentQuestion].answerChoices[i] + '" /> ' + questions[currentQuestion].answerChoices[i]);
			$('#quiz-image').prepend(questions[0].picture[i]);
		}
	}

	$('.quiz-button').on('click', function () {
		var selectedRadio = $('input[name=radioName]:checked', '#choices').val();
		var correctAnswer = questions[currentQuestion].correctChoice;
		currentQuestion++;
		$('.individual-questions').empty();
        $('#choices').empty();
        $('#quiz-image').empty();
        $('#correct-answer-feedback').empty();
        genq();
		if (selectedRadio === correctAnswer) {
			alert('Answer is correct!');
			$('#initial-feedback').text("Correct");
			$('#correct-answer-feedback').append(questions[currentQuestion].feedback);
			answerCounter++;
		}
		else {
			alert('Answer is incorect');
			$('#initial-feedback').text("Incorrect");
			$('#correct-answer-feedback').append(questions[currentQuestion].feedback);	
		}
	});
});




/* Functions needed:
Generate new questions from Object
	Must Append answer choices
	Must appened symbol Image
	Reset radio button selector

Compare Answer Function
	On click of Sumit Button
	Takes user input from radio button and compares it to "correctChoice from Object"
	Increment Correct Answer Counter if correct
	Tell user "Correct" or "Incorrect" in feedback section
	append Object key/value feedback to feedback section
	remove previous question/answers and append the next question
*/

