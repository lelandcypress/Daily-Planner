$(document).ready(function () {
  function clock() {
    var clock = moment().format("LLL");
    $("#display-date").text(clock);
  }
  setInterval(clock, 1000);

  function changeColor() {
    currentTime = moment().format("H");
    var task = $(".task");

    console.log(task.length);
  }

  $(".saveBtn").click(function () {
    taskAtEight = $("#taskeight").val();
    taskAtNine = $("#tasknine").val();

    var savedTasks = {
      eightAM: taskAtEight,
      nineAM: taskAtNine,
    };
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  });

  function init() {
    retrieve = localStorage.getItem("savedTasks");
    oldTasks = JSON.parse(retrieve);
    $("#taskeight").val(oldTasks.eightAM);
    $("#tasknine").val(oldTasks.nineAM);
  }
  init();
  changeColor();
});
