$(document).ready(function () {
  //Uses moment.js to build clock displayed on page
  function clock() {
    var clock = moment().format("dddd, MMMM Do, LT");
    $("#display-date").text(clock);
  }
  setInterval(clock, 1000);

  //controls color change. Loops through every 5 minutes removing CSS elements and reapplying them based on the time of day//
  function changeColor() {
    //Sets current hour as a string variable//
    currentTime = moment().format("H");
    var task = $(".task");
    for (var i = 0; i < task.length; i++) {
      //Grabs ID value of hour blocks as string//
      var timeElementIdVal = task[i].id;
      //Element Selector for hour blocks
      var elementDOMSelector = document.getElementById(task[i].id);
      //removes any pre-existing class//
      $(task[i].id).removeClass(".present .past .future");
      //reassigns class and subsequent CSS property based on matching the current time
      if (timeElementIdVal < currentTime) {
        $(elementDOMSelector).addClass("past");
      } else if (timeElementIdVal > currentTime) {
        $(elementDOMSelector).addClass("future");
      } else {
        $(elementDOMSelector).addClass("present");
      }
    }
  }
  //Event Listeners for save buttons, updates object literal upon button press, and sets updated Object into Local Storage//
  $(".saveBtn").click(function (event) {
    event.preventDefault();

    var taskAtEight = $("#08").val();
    var taskAtNine = $("#09").val();
    var taskAtTen = $("#10").val();
    var taskAtEleven = $("#11").val();
    var taskAtNoon = $("#12").val();
    var taskAtOne = $("#13").val();
    var taskAtTwo = $("#14").val();
    var taskAtThree = $("#15").val();
    var taskAtFour = $("#16").val();
    var taskAtFive = $("#17").val();

    var savedTasks = {
      eightAM: taskAtEight,
      nineAM: taskAtNine,
      tenAM: taskAtTen,
      elevenAM: taskAtEleven,
      noon: taskAtNoon,
      onePM: taskAtOne,
      twoPM: taskAtTwo,
      threePM: taskAtThree,
      fourPM: taskAtFour,
      fivePM: taskAtFive,
    };
    //converts object literal into JSON string and sets it to Local Storage//
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  });
  // Populates hour blocks from key value pairs based on Object saved in local storage//
  function init() {
    retrieve = localStorage.getItem("savedTasks");
    oldTasks = JSON.parse(retrieve);
    $("#08").val(oldTasks.eightAM);
    $("#09").val(oldTasks.nineAM);
    $("#10").val(oldTasks.tenAM);
    $("#11").val(oldTasks.elevenAM);
    $("#12").val(oldTasks.noon);
    $("#13").val(oldTasks.onePM);
    $("#14").val(oldTasks.twoPM);
    $("#15").val(oldTasks.threePM);
    $("#16").val(oldTasks.fourPM);
    $("#17").val(oldTasks.fivePM);

    changeColor();
    setInterval(changeColor(), 1000 * 60 * 5);
  }
  init();
});
