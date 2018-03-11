var myCalendar = $('#weeklycalendar'); 
	myCalendar.fullCalendar();
	for (i = 0; i < classes.length; i++) { 
    	var newEvent = {
    		title: classes[i],
    		allDay: false,
    		start: startTimes[i],
    		end: endTimes[i]
    	};
    	myCalendar.fullCalendar('renderEvent', newEvent, true);
}