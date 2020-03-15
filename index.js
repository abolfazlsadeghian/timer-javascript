const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const circle = document.querySelector("circle");

const preimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", preimeter);

// formula to calculate offset
// offset = (preimeter * timeRemaining)/ totalDuration - preimeter
//E.g. for 30 Seconds
// offsetAtStart = p * 30 / 30 - p
// offsetAtEnd = p * 0 /30 - p
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (preimeter * timeRemaining) / duration - preimeter
    );
  },
  onComplete() {
    console.log("Timer is Completed");
  }
});
// timer.start();

/*
    POSSIBLE IMPLEMENTATION
    ======================================================
    * Event Listeners to watch for a click on 'Start' Button
        -> Emit an event stating that the timer has started
        * Draw a full border around the timer
        * Start counting down the timer
        -> Emit an event that timer has 'ticked'
        * Each time the timer counts down, update the border
        * Each time the timer counts down, update the text
        * if we counted down and timer reaches 0
            -> Emit and event that the timer is done
            * Reset the border
            * Reset internal timer to get ready for another run
        
        classTimer
            constructor (durationInput, startButton, pauseButton)
            start()
            pause()
            onDurationChange()
            tick()
            
*/
