/**
 * An alarm clock which performs a specified alarm function after a specified amount of time has passed. 
 * An unlimited number of alarms can be specified in the `alarms` array.
 * @param {Array} alarms An array of numbers (strings if inputted via command line arguments), each number representing time in seconds. 
 * @param {Function} alarmOutput a callback function that executes some code when the specified amount of time has passed. 
 */
const scheduler = function(alarms, alarmOutput) {
  for (let alarm of alarms) {
    alarm = +alarm;
    if (alarm > 0 && !isNaN(alarm)) {
      setTimeout(alarmOutput, alarm * 1000);
    }
  }
};

/**
 * Returns a function that either emits sound or logs to the console. A helper function for `scheduler`.
 * @param {boolean} isSound  Specify `true` to return a function that emits a beep sound or `false` to return a function that writes 'BEEP!' to the console.
 * @returns {Function} Returns the new function.
 */
const setSoundorLog = function(isSound) {
  if (isSound) {
    return () => process.stdout.write('\x07');
  } else {
    return () => console.log('BEEP!');
  };
};

// DRIVER CODE
// command line arguments:
//    first argument -> true or false, depending on if you want a beeping sound (true) or log to the console (false).
//    arguments #2, #3, ... #n -> numbers.
let isSound = process.argv.slice(2, 3).join(''); // return array with 3rd item only and then convert array to string
isSound = (isSound === 'true'); // convert string to boolean.
const alarms = process.argv.slice(3);
const alarmFormat = setSoundorLog(isSound);
scheduler(alarms, alarmFormat);

// Notes from Jon:
// 1. watch bugs (e.g., alarm < 1, what if alarm = 0.5?)
// 2. try to avoid using the `continue` keyword - make the conditional a positive one to avoid continue
// 3. make the function reusable - instead of hardcoding a callback inside setTimeout(), pass in a callback as a parameter to the timer1/scheduler function.
// 4. use more descriptive names for functions - `timer1` does not tell us what the function does. `scheduler` is better.
// 5. instead of parseFloat(), just add a `+` operator to the beginning of the `alarm` item.