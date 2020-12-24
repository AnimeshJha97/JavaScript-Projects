const newYear = "1 Jan 2021";
daysele = document.getElementById("days");
hoursele = document.getElementById("hours");
minele = document.getElementById("min");
secele = document.getElementById("sec");

function countDown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totseconds = (newYearDate - currentDate) / 1000;
  const seconds = Math.floor((totseconds)%60);
  const minutes = Math.floor((totseconds / 60)%60);
  const hours = Math.floor((totseconds / 3600) % 24);
  const days = Math.floor(totseconds / 3600 / 24);

  daysele.innerHTML = formateTime(days)
  hoursele.innerHTML = formateTime(hours)
  minele.innerHTML = formateTime(minutes)
  secele.innerHTML = formateTime(seconds)

}

function formateTime(time){
  return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
