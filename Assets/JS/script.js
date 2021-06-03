function clock() {
  var currentTime = moment().format("LLL");
  $("#display-date").text(currentTime);
}
setInterval(clock, 1000);
