const date_1Register = new Date((new Date("Feb 27, 2021 0:0:0").getTime()));
const date_2Register = new Date((new Date("Aug 27, 2021 0:0:0").getTime()));
const date_3Register = new Date((new Date("Sep 11, 2021 0:0:0").getTime()));
const date_4Register = new Date((new Date("Sep 11, 2100 0:0:0").getTime()));

function CheckEndReg(end, clock, id, time) {
  if (end < time) {
    if (id == "clockdiv_1"){
      document.getElementById('clockdiv_5').innerHTML = ""
      clock.innerHTML = "<h21>Registration Ended</h21>"}
    else if (id == "clockdiv_2"){
      document.getElementById('clockdiv_6').innerHTML = ""
      clock.innerHTML = "<h21>Registration Ended</h21>"}
    else if (id == "clockdiv_3"){
      document.getElementById('clockdiv_7').innerHTML = ""
      clock.innerHTML = "<h21>Registration Ended</h21>"}
    else if (id == "clockdiv_4"){
      document.getElementById('clockdiv_7').innerHTML = ""
      clock.innerHTML = "<h21>Open To All Public</h21>"
    }
  }
  else {
    if (id == "clockdiv_1"){
      clock.innerHTML = "<h21>Registration Started</h21>"
      initializeClock('clockdiv_5', date_1Register);
    }
    else if (id == "clockdiv_2"){
      clock.innerHTML = "<h21>Registration Started</h21>"
      initializeClock('clockdiv_6', date_2Register);
    }
    else if (id == "clockdiv_3"){
      clock.innerHTML = "<h21>Registration Started</h21>"
      initializeClock('clockdiv_7', date_3Register);
    }
    else if (id == "clockdiv_4"){
      document.getElementById('clockdiv_7').innerHTML = ""
      clock.innerHTML = "<h21>Open To All Public</h21>"
    }
  }
}


function returnDeltaTime(endtime) {
    var delta_time = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((delta_time / 1000) % 60);
    var minutes = Math.floor((delta_time / 1000 / 60) % 60);
    var hours = Math.floor((delta_time / (1000 * 60 * 60)) % 24);
    var days = Math.floor(delta_time / (1000 * 60 * 60 * 24));
    return {
      "delta": delta_time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime, time=0) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = returnDeltaTime(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.delta <= 0) {
        CheckEndReg(t.days, clock, id, time)
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  const date_1 = new Date((new Date("Feb 17, 2021 0:0:0").getTime()));
  const date_2 = new Date((new Date("Aug 17, 2021 0:0:0").getTime()));
  const date_3 = new Date((new Date("Aug 27, 2021 0:0:0").getTime()));
  const date_4 = new Date((new Date("Sep 11, 2021 0:0:0").getTime()));

  initializeClock('clockdiv_1', date_1);
  initializeClock('clockdiv_2', date_2, 10);
  initializeClock('clockdiv_3', date_3, 15);
  initializeClock('clockdiv_4', date_4);
  