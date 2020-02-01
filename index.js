class Timer {
  constructor(inputDuration, pauseButton, startButton) {
    this.inputDuration = inputDuration;
    this.pauseButton = pauseButton;
    this.startButton = startButton;

    this.startButton.addEventListener("click", this.start);
  }
  start() {
    console.log("Time to start the Timer");
  }
}
const startButton = document.querySelector("#start");
const inputDuration = document.querySelector("#inputDuration");
const pauseButton = document.querySelector("#pauseButton");

const timer = new Timer(inputDuration, pauseButton, startButton);
