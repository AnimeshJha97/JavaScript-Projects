const newYear = "1 Jan 2021";

function countDown(){
  daysele = document.getElementById("days");
  hoursele = document.getElementById("hours");
  minele = document.getElementById("min");
  secele = document.getElementById("sec");

  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totseconds = (newYearDate - currentDate) / 1000;
  const seconds = Math.floor((totseconds)%60);
  const minutes = Math.floor((totseconds / 60)%60);
  const hours = Math.floor((totseconds / 3600) % 24);
  const days = Math.floor(totseconds / 3600 / 24);

  daysele.innerHTML = days
  hoursele.innerHTML = hours
  minele.innerHTML = minutes
  secele.innerHTML = seconds

}

countDown();
setInterval(countDown, 1000);
