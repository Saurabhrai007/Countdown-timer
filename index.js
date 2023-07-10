const endDate = "10 SEPTEMBER 2023 10:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(diff);
  
// for not getting negatve value in clock after time completed;
  if (diff < 0) return;
  //convert into days;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //calculate hours;
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //calculate minutes;
  inputs[2].value = Math.floor((diff / 60) % 60);
  //calculate seconds;
  inputs[3].value = Math.floor(diff % 60);
}

//initial call
clock();

/*
 *1 day = 24hours;
 *1 hour = 60 minutes;
 *60 minutes = 3600 seconds;
 */

setInterval(() => {
  clock();
}, 1000);
