$(function() {
	// Deck initialization
	$.deck('.slide');
	
	// Change Theme and Transition	
	$('#style-themes').change(function() {
		$('#style-theme-link').attr('href', $(this).val());
	});	
	$('#transition-themes').change(function() {
		$('#transition-theme-link').attr('href', $(this).val());
	});
	
	// Navigation Panel
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		if($(this).hasClass("active")) {
			$(this).text('\xa0'); // &nbsp;
		} else {
			$(this).text("Menu");
		}
		$(this).toggleClass("active");
		return false;
	});
	
	/* quiz */
	var question1 = {question:"A strand of DNA is a chain of nucleotides. The backbone of the DNA strand is made of:",
		choices:["nitrogenous bases",
		         "purines", 
		         "deoxyribose sugars only",
		         "phosphate groups and deoxyribose sugars",
		         "adenine, cytosine, guanine, and thymine"], 
		correctAnswer:3};
	var question2 = {question:"In double-stranded DNA, cytosine pairs with",
		choices:["cytosine",
		         "adenine",
		         "guanine", 
		         "thymine",
		         "adenine or guanine"], 
		correctAnswer:2};
	var question3 = {question:"It is important for DNA replication to be accurate because",
		choices:["DNA changes passed on to daughter cells are hard to fix",
		         "the DNA molecule will fall apart if it is altered",
		         "the cell can't divide unless DNA replication is accuratet", 
		         "changes in the genetic information may affect the functions of the cell",
		         "None of the above"], 
		correctAnswer:3};
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
			choices_html +="<div class=\"row\"><input type=\"radio\" id=\""+i+"\" name=\"answer\" value=\""+i+"\" "+isChecked+ ">"
			    +"<label for=\""+i+"\">"+question_choices[i]+"</label><br></div>";
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
	$("#num_quiz").text(allQuestions.length);
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
		if(total_score == 100) {
			$("#user_score").text("Congratulations! Your Score: "+total_score+" / 100");
			$("#button_restart").val("Restart");
		} else {
			$("#user_score").text("Your Score: "+total_score+" / 100");
			$("#button_restart").val("Try Again");
			$("#quiz_badge").hide();			
		}
		$("#quiz_result").show();
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
	
	$("#button_restart").on("click", function(){
		showQuestion(0);
		user_score = 0;
		$("#quiz_result").hide();
		$("#quiz_form").show();
	});
});
