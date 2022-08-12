let select = document.querySelectorAll("select");
let current = document.querySelector("h1");
let button = document.querySelector("button");
let content = document.querySelector(".content");
let timeAlarm,
  isAlarm = false;
ringAlarm = new Audio("https://nada-medhat229.github.io/Alarm/image/sound.mp3");
console.log(ringAlarm.play());

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  select[0].innerHTML += option;
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  select[1].innerHTML += option;
}

for (let i = 1; i >= 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  select[2].innerHTML += option;
}

setInterval(() => {
  let date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  current.innerText = `${h}:${m}:${s} ${ampm}`;
  if (timeAlarm == `${h}:${m}:${ampm}`) {
    ringAlarm.play();
    ringAlarm.loop = true;
  }
}, 1000);
function setAlarm() {
  if (isAlarm) {
    timeAlarm = "";
    ringAlarm.pause();
    content.classList.remove("disable");
    button.innerText = "set Alarm";
    return (isAlarm = false);
  }
  let time = `${select[0].value}:${select[1].value}:${select[2].value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("please select your alarm");
  }
  isAlarm = true;
  timeAlarm = time;
  button.innerText = "Clear Alarm";
  content.classList.add("disable");
}
button.addEventListener("click", setAlarm);
