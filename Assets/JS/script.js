var userInput;
var currentTime
var localStorage = {
  8: "",
  9:"",
  10:""

};

function clock() {
  var currentTime = moment().format("LLL");
  $("#display-date").text(currentTime);
}
setInterval(clock, 1000);
$(".hour");
$(".input");
$(".saveBtn").addEventListener(click);



function updateTask(hour,userInput){

}

function init(){
//pull from local storage and dynamically populate list

}
