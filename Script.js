function updateDateTime() {
  var now = new Date();
  var dateTimeString = now.toLocaleString();
  document.getElementById("currentDateTime").textContent = dateTimeString;
}
setInterval(updateDateTime, 1000); 
updateDateTime();