let elapsed_time = 0;
let run =false;
let start_time = null;
let current_time= null;

function start(){
    if(!run){
        console.log("start");
        start_time = new Date - elapsed_time;
        timer =setInterval(update,10);
        run =true;
    }

}

function update(){
    console.log("upd");
    current_time = new Date();
    elapsed_time = current_time - start_time;
    
    let hours = Math.floor(elapsed_time/(1000*60*60));
    let min = Math.floor(elapsed_time/(1000*60) % 60);
    let sec = Math.floor(elapsed_time/1000 % 60);
    let mil = Math.floor(elapsed_time%1000 / 10);

    hours = String(hours).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec =String(sec).padStart(2,"0");
    mil =String(mil).padStart(2,"0");

    document.getElementById("clk").textContent = `${hours}:${min}:${sec}:${mil}`;
}

function stop(){
    if(run){
        clearInterval(timer);
        elapsed_time =Date.now() - start_time;
        run = false;
    }
}

function reset(){
    clearInterval(timer);
    elapsed_time=0;
    run = false;
    start_time = null;
    current_time =null;
    document.getElementById("clk").textContent = `00:00:00:00`
}