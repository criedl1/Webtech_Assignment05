let el = document.querySelector("#timertext");
let sw = new Stopwatch(el);

// click events
document.querySelector("#startBtn").addEventListener("click", () => sw.start());
document.querySelector("#stopBtn").addEventListener("click", () => sw.stop());
document.querySelector("#resetBtn").addEventListener("click", () => sw.reset());

// TODO: create custom events for key presses here
//const startEvent;
//const stopEvent;
//const resetEvent;
//const plusEvent;
//const minusEvent;

// TODO: add listeners for custom events to 'el'

// listen for keyboard input
document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        if (key === 's') {
                sw.start()
            // TODO: dispatch startEvent
        }
        else if (key === 't') {
                sw.stop()
            // TODO: dispatch stopEvent
        }
        else if (key === 'r') {
                sw.reset()
            // TODO: dispatch resetEvent
        }
        else if (key === "+") {
                sw.plusTime(5000)
            // TODO: dispatch plusEvent
        }
        else if (key === "-") {
                sw.minusTime(5000)
            // TODO: dispatch minusEvent
        }
});
