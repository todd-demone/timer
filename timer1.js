/**
 * An alarm clock which beeps after a specified amount of time has passed. 
 * An unlimited number of alarms can be specified in the `alarms` array.
 * @param {Array} alarms An array of numbers, each number representing time in seconds. 
 */
const timer1 = function(alarms) {
  for (let alarm of alarms) {
    alarm = parseFloat(alarm);
    if (alarm < 1 || isNaN(alarm)) {
      continue;
    }
    setTimeout((alarm) => {
      process.stdout.write('\x07');
    }, alarm * 1000);
  }
};

const alarms = process.argv.slice(2);
timer1(alarms);