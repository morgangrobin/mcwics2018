

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

var startTimes = ["2018-04-25T09:00:00", "2018-04-16T14:00:00", "2018-04-18T18:30:00", "2018-04-26T09:00:00", "2018-04-23T16:30:00", "2018-04-24T09:00:00"];
var endTimes = ["2018-04-25T12:00:00", "2018-04-16T17:00:00", "2018-04-18T21:30:00", "2018-04-26T12:00:00", "2018-04-23T21:30:00", "2018-04-24T12:00:00"];


//On submit, reveal the rest of questionnaire
var submitclasses = document.getElementById("submitclasses");
submitclasses.addEventListener('click',function(){
	submitclasses.style.display="none";
	document.getElementById("habits").style.display="block";
	$('#calendar').fullCalendar('render');

	var myCalendar = $('#calendar'); 
	myCalendar.fullCalendar();
	for (i = 0; i < classes.length; i++) { 
    	var newEvent = {
    		title: classes[i],
    		allDay: false,
    		start: startTimes[i],
    		end: endTimes[i]
    	};
    	myCalendar.fullCalendar('renderEvent', newEvent, true);

    	//make class sliders visible

    	mysliderdiv = document.getElementById("examdiv"+(i+1));
    	console.log(mysliderdiv);
    	mysliderdiv.style.display="block";
    	myclassh3 = document.getElementById("examtitle"+(i+1));
    	myclassh3.innerHTML=classes[i];

	}

	var submitquestionnaire = document.getElementById("submitquestionnaire");
	submitquestionnaire.addEventListener('click',function(){
	var studytype = $('#studytype label.active input').val();
	var examdays = $('#examdays label.active input').val();
	var timestudying = $('#timestudying').val();
	var timesleeping = $('#timesleeping').val();
	var studyblock = $('#studyblock').val();
	var breaktime = $('#breaktime').val();
	var mealtime = $('#mealtime').val();
	var startDate = document.getElementById('startdate').innerHTML;
	var endDate = document.getElementById('enddate').innerHTML;
	console.log("Study Type: " + studytype);
	console.log("Exam days: "+ examdays);
	console.log("Time Studying: " + timestudying);
	console.log("Time Sleeping: " + timesleeping);
	console.log("Study block: " + studyblock);
	console.log("Break Time: " + breaktime);
	console.log("Meal Time: " + mealtime);
	console.log("Start Date: " + startDate);
	console.log("End date: " + endDate);

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
//var startDate
//var endDate
