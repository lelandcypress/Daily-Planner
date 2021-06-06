$(document).ready(function () {
  function clock() {
    var clock = moment().format("LLL");
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

  $(".saveBtn").click(function () {
    taskAtEight = $("#08").val();
    taskAtNine = $("#09").val();

    var savedTasks = {
      eightAM: taskAtEight,
      nineAM: taskAtNine,
    };
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  });

  function init() {
    retrieve = localStorage.getItem("savedTasks");
    oldTasks = JSON.parse(retrieve);
    $("#08").val(oldTasks.eightAM);
    $("#09").val(oldTasks.nineAM);
    changeColor();
    setInterval(changeColor(), 1000 * 60 * 5);
  }
  init();
});
