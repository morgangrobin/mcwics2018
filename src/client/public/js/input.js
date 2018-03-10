

// Logic for inputting classes
var input = document.getElementById("classselect");
new Awesomplete(input, {list: "#mylist"});
var counter=1;
input.addEventListener('awesomplete-selectcomplete',function(){
  console.log(this.value);
  document.getElementById("class"+counter).innerHTML=this.value;
  document.getElementById("divclass"+counter).style.display="block";
  document.getElementById("submitclasses").style.display="block";
  counter++;
  this.value = '';
});  

//On submit, reveal the rest of questionnaire
var submitclasses = document.getElementById("submitclasses");
submitclasses.addEventListener('click',function(){
	submitclasses.style.display="none";
	document.getElementById("habits").style.display="block";
});