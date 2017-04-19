$(document).ready(function() {
	var question1 = {question:"What does HTML stand for?",
		choices:["Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language"], 
		correctAnswer:1};
	var question2 = {question:"Who is making the Web standards?",
		choices:["The World Wide Web Consortium", "Mozilla", "Google", "Microsoft"], 
		correctAnswer:0};
	var question3 = {question:"Choose the correct HTML tag for the largest heading?",
		choices:["h1", "h6", "heading", "head"], 
		correctAnswer:0};
	var allQuestions = [question1, question2, question3];
	
	var question_index = 0;
	var user_answers = [];
	function showQuestion(index) {
		if(index >= allQuestions.length) {
			showScore();
			return false;
		}
		var current_question = allQuestions[index];
		var index_display = index+1;
		var question_text = current_question.question;
		var question_choices = current_question.choices;
        // display question
		$("#question_text").hide().text(index_display+". "+question_text).fadeIn("slow");

		// display choices
		var choices_html = "";
		var user_choice = user_answers[index];
		for(var i=0;i<question_choices.length;i++) {
			var isChecked = (user_choice == i) ? "checked":"";
			choices_html +="<input type=\"radio\" id=\""+i+"\" name=\"answer\" value=\""+i+"\" "+isChecked+ ">"
			    +"<label for=\""+i+"\">"+question_choices[i]+"</label><br>";
		}
		$("#question_choices").hide().html(choices_html).fadeIn("slow");
		// hidden index
		$("#current_index").val(index);
		if(index == 0) {
			$("#button_back").hide();
		} else {
			$("#button_back").show();			
		}
	}
	showQuestion(0);

	var user_score = 0;
	function checkAnswer(index, user_answer) {
		var current_question = allQuestions[index];	
		var question_correctAnswer = current_question.correctAnswer;
    	user_answers[index] = user_answer;
	    if(user_answer == question_correctAnswer) {
	    	user_score++;
	    	return true;
	    } else {
	    	return false;
	    }
	}
	
	function showScore() {
		var total_score = Math.round((user_score / allQuestions.length)* 100);
		$("#quiz_form").hide();
		$("#user_score").show().text("Your Score: "+total_score+" / 100");
	}
	
	$("#button_next").on("click", function(){
		var question_index = +$(this).closest('div').find("#current_index").val();		
		var selected = $("input[name=answer]:checked", "#quiz_form");
		var user_selected = selected.val();
		if(user_selected >=0) {
			var result = checkAnswer(question_index, user_selected);
			$("#message").text("");
			showQuestion(question_index+1);
		} else {
			$("#message").text("Please select your answer first!");
		}
	})
	
	$("#button_back").on("click", function(){
		var question_index = +$(this).closest('div').find("#current_index").val();	
		if(question_index > 0) {
			showQuestion(question_index-1);				
		}
	})
});