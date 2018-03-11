

// Logic for inputting classes
var input = document.getElementById("classselect");
new Awesomplete(input, {list: "#mylist"});
var counter=1;
var classes=[];
input.addEventListener('awesomplete-selectcomplete',function(){
  //console.log(this.value);
  document.getElementById("class"+counter).innerHTML=this.value;
  document.getElementById("divclass"+counter).style.display="block";
  document.getElementById("submitclasses").style.display="block";
  classes.push(this.value);
  counter++;
  this.value = '';
});  


//On submit, reveal the rest of questionnaire
var submitclasses = document.getElementById("submitclasses");
submitclasses.addEventListener('click',function(){
	submitclasses.style.display="none";
	document.getElementById("habits").style.display="block";
	$('#calendar').fullCalendar('render');

	var submitquestionnaire = document.getElementById("submitquestionnaire");
	submitquestionnaire.addEventListener('click',function(){
	var studytype = $('#filterDay input:radio:checked').val();
	console.log(studytype);
	//study type

});

});



//var classes
//var studytype = {0,1,2} --> {9-5, early bird, night owl}
//var examdays = {true,false} --> {study on exam days, don't study on exam days}
//var timestudying = 2 - 12 hours
//var timesleeping = 2 - 14 hours
//var studyblock = 1 - 8 hours
//var breaktime = 5 - 60 minutes
//var mealtime = 10 - 120 minutes
