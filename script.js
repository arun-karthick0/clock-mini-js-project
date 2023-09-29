const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const sec = document.getElementById("seconds");

setInterval(() => {
  const currentTime = new Date();

  hours.innerHTML = currentTime.getHours();
  mins.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
}, 1000);
