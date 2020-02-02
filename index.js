const startButton = document.querySelector("#start");
const inputDuration = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(inputDuration, pauseButton, startButton, {
  onStart(totalduration) {
    duration = totalduration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("timer is completed");
  }
});
