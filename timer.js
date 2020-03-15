class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start); //  <- or you can add "this.start.bind(this)" then it will always use the instance of the class
    this.pauseButton.addEventListener("click", this.pause);
  }
  //Declared the function as arrow function to fix the this issue to always represent the current instance of the class

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 20);
  };
  pause = () => {
    clearInterval(this.intervalId);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      //if this callback provided go ahead and call the function , we do it like this so it doesn't break the code
      // if there are no such callbacks
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  //Using this getter better it is like it creates an instance variable that you can access anytime wonderful eventhough it is just another function
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
  // getTime() {
  //   return parseFloat(this.durationInput.value);
  // }
  // setTime() {
  //   this.durationInput.value = time;
  // }
}
