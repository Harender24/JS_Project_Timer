const startButton = document.querySelector("#start");
const inputDuration = document.querySelector("#inputDuration");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(inputDuration, pauseButton, startButton, {
  onStart() {
    console.log("Timer Started");
  },
  onTick() {
    console.log("Timer just ticked down");
  },
  onComplete() {
    console.log("timer is completed");
  }
});
