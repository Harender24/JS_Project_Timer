class Timer {
  constructor(inputDuration, pauseButton, startButton, callbacks) {
    this.inputDuration = inputDuration;
    this.pauseButton = pauseButton;
    this.startButton = startButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTick = callbacks.onTick;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    console.log(this);
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };
  get timeRemaining() {
    return parseFloat(this.inputDuration.value);
  }
  set timeRemaining(time) {
    this.inputDuration.value = time;
  }
  pause = () => {
    clearInterval(this.interval);
  };
}
