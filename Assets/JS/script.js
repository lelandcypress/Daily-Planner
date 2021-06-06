$(document).ready(function () {
  function clock() {
    var currentTime = moment().format("LLL");
    $("#display-date").text(currentTime);
  }

  setInterval(clock, 1000);

  $(".saveBtn").click(function () {
    taskAtEight = $("#taskeight").val();
    taskAtNine = $("#tasknine").val();
    console.log(taskAtEight);
    console.log(taskAtNine);

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
});
