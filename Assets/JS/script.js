$(document).ready(function () {
  function clock() {
    var clock = moment().format("dddd, MMMM Do, LT");
    $("#display-date").text(clock);
  }
  setInterval(clock, 1000);

  function changeColor() {
    currentTime = moment().format("H");
    var task = $(".task");
    for (var i = 0; i < task.length; i++) {
      var timeElementIdVal = task[i].id;
      var elementDOMSelector = document.getElementById(task[i].id);
      $(task[i].id).removeClass(".present .past .future");

      if (timeElementIdVal < currentTime) {
        $(elementDOMSelector).addClass("past");
      } else if (timeElementIdVal > currentTime) {
        $(elementDOMSelector).addClass("future");
      } else {
        $(elementDOMSelector).addClass("present");
      }
    }
  }

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

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  });

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
