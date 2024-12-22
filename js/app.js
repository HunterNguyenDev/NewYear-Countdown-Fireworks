const fireworkContainer = document.querySelector(".fireworks-container");

const daysSpan = document.querySelector("#days");
const hoursSpan = document.querySelector("#hours");
const minutesSpan = document.querySelector("#minutes");
const secondsSpan = document.querySelector("#seconds");
const newYear = document.querySelector("#new-year");

const now = new Date();
// console.log(now)

newYear.innerHTML = now.getFullYear() + 1;

const countToDate = new Date(now.getFullYear() + 1, 0, 1).getTime(); //2025/01/01-00:00:00

const countdown = () => {
  const now = new Date().getTime();
  const distance = countToDate - now;  //Tgian con lai tinh bang Mili giay

//   console.log(distance)

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countDownInterval);
  }
};

countdown();

const countDownInterval = setInterval(countdown, 1000);


//Hieu ung Phao Hoa
const fireworks = new Fireworks(fireworkContainer, {
  speed: 1,
  acceleration: 1.05,
  friction: 1,
  particles: 400,
  explosion: 10,
});

fireworks.start();
