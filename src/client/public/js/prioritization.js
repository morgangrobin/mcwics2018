var dailySleepHours;
var dailyEatHours;
var dailyStudyHours = 9.3;
var studentType = [0,1];
var startDate = new Date('4/8/2018 12:00:00');

var exam = function(name, difficulty, endDate) {
  this.name = name;
  this.difficulty = difficulty;
  this.endDate = new Date(endDate);
  this.startTime = startDate;
  this.studyHours = (endDate-startDate)*dailyStudyHours;
};

var exam1 = new class('exam1', 0.1, '4/11/2018 9:00:00');
var exam2 = new class('exam2', 0.2, '4/12/2018 14:00:00');
var exam3 = new class('exam3', 0.15, '4/16/2018 18:30:00');
var exam4 = new class('exam4', 0.35, '4/20/2018 14:00:00');
var exam5 = new class('exam5', 0.2, '4/23/2018 14:00:00');
var allExams = [exam1, exam2, exam3, exam4, exam5];
var priorities = [];
var sumPriorities;

allExams.forEach(function(elem) {
  if (elem.studyHours > 0) {
    priori = (100/elem[studyHours])*(elem[difficulty]^0.5)-(dailyStudyHours/3);
    priorities.push(priori)
  } else {
    elem.studyHours = 0;
  };
};

priorities.forEach(function(elem){
  if(elem > 0) {
    for(var i = 0, i < priorities.length; sumPriorities += priorities[i++]);
    dailyStudyHours*(elem/sumPriorities)
    
  }
})
