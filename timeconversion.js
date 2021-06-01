// Aim -  Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add 
// 45 min &45 sec in the result and the display the output. 
            // E.g.: - Input – 12:01:00PM Output 12:46:45 
            //  Input – 12:01:00AM Output 00:46:45

// Author: Tushar Nayan
// Email: tusharnayan10@gmail.com

    const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes, second] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
// Add 45 min and 45 sec to current time
    var newSec = 2745;

    if (newSec > 59) {
        var mins = parseInt(newSec / 60);
        var sec = newSec - mins * 60;
        var newMin = parseInt(minutes) + mins;

        if (newMin > 59) {
            var hrs = parseInt(newMin / 60);
            var min = newMin - (hrs * 60);
            var newHrs = parseInt(hours) + hrs;
        } else {
            newHrs = hours;
            min = newMin;

        }

    } else {
        newHrs = hours;
        min = minutes;
        sec = newSec;
    }
    var hh =newHrs
    var mm = min
    var ss = sec

    return `${hh}:${mm}:${ss} ${modifier}`;
  }
  
  console.log(convertTime12to24('12:01:00 PM'));
  console.log(convertTime12to24('12:01:00 AM'));