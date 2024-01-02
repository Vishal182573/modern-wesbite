var options = { timeZone: 'Asia/Kolkata' };

function setTime(){
    var currtime = new Date();
    var time = currtime.toLocaleTimeString('en-US', options);
    let setTime = document.querySelectorAll('.hour')[0];
    setTime.innerHTML = time;
}
setInterval(setTime,1000);