
function showClock(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "A M";
    var day = time.getDay();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();

//-----------Converts the time 24hrs to 12 hrs---------

    if(hr > 12){
        hr -= 12;
        am_pm = "P M";
    }

    if(hr == 0){
        hr = 12;
        am_pm = "A M";
   }

//--------Adding a every increase seconds,Minutes and Hours values------

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var currentTime = document.getElementById("hrMinSec");
    var session = document.getElementById("am-pm");

    //Output the current hour, minute, second and merdian the device
    currentTime.innerHTML = hr +":"+ min + ":" + sec;
    session.innerHTML = am_pm;


//-------Creates a variable with the names of days in an array----   
    var daysOfTheWeek =['S U N D A Y', 'M O N D A Y', 'T U E S D A Y', 'W E D N E S D A Y', 'T H U R S D A Y', 'F R I D A Y', 'S A T U R D A Y'];
    var currentDay =daysOfTheWeek[day];
    weekDay = document.getElementById("days");
    weekDay.innerHTML = currentDay;
    
    
//Creates a variable with the names of months in an array    
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var currentMonth = months[month];
    monOfYear = document.getElementById("month");
     var currentDate = document.getElementById("date");
     var currentYear = document.getElementById("year");
     
//Output the month, date and year
    monOfYear.innerHTML = currentMonth;
    currentDate.innerHTML = date;
    currentYear.innerHTML = year;

    setInterval(showClock, 1000);
}
//Displays the digital clock
showClock();



