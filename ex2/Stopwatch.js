class Stopwatch {
    constructor(element)
    {
        this.element = element;
        this.myIntervall = "";

        this.minute = parseInt(this.element.innerHTML.split(":")[0],10)
        this.second = parseInt(this.element.innerHTML.split(":")[1],10)
        this.mis = parseInt(this.element.innerHTML.split(":")[2])

    }

    reset() {
        console.log("Reset Methode.")
      // TODO: reset timer
        this.element.innerHTML = "00:00:000"

        this.minute = parseInt(this.element.innerHTML.split(":")[0],10)
        this.second = parseInt(this.element.innerHTML.split(":")[1],10)
        this.mis = parseInt(this.element.innerHTML.split(":")[2])

        this.stop()
    }

    start() {
        console.log("Start Methode.")
        if(this.myIntervall === "") {
            this.myIntervall = setInterval(this.update.bind(this), 1)
        }
      // TODO: start timer
    }

    plusTime(ms) {
        this.mis = this.mis + ms;
        console.log("this mis = " + this.mis)
        if(this.mis>999){
            this.second = this.second + parseInt(String(this.mis/1000),10);
            console.log("this.second = " + this.second)
            this.mis = this.mis%1000;
            console.log("this newmis = " + this.mis)
        }
        console.log("plus Methode.")
      // TODO: increment timer by ms
        this.element.innerHTML = this.minute + ":"+ this.second + ":" + this.mis;
    }

    minusTime(ms) {

        this.mis = this.mis - ms;
        console.log("minus this.mis= " + this.mis)
        if(this.mis<0){
            this.second = this.second + parseInt(String(this.mis/1000),10);
            console.log("this.second = " + this.second)
            this.mis = this.mis%1000;
            console.log("this newmis = " + this.mis)
        }else{this.mis = this.mis - ms};

        console.log("minus Methode.")
      // TODO: decrement timer by ms
        this.element.innerHTML = this.minute + ":"+ this.second + ":" + this.mis;
    }

    stop() {
        console.log("stop Methode.")
      // TODO: stop timer here
        this.myIntervall = clearInterval(this.myIntervall)
        this.myIntervall = "";
    }

    update() {


        console.log("update Methode.")
        this.mis ++;
        if (this.mis >999){
            this.second++;
            this.mis=0;
        }
        if (this.second >61){
            this.minute++;
            this.second=0;
        }
        if (this.minute === 60){
            this.reset();
        }


        this.element.innerHTML = this.minute + ":"+ this.second + ":" + this.mis;





      // TODO: update running timer
    }

}
