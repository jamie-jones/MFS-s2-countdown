// getTime() returned the number of miliseconds since the Unix Epoch (Jan 1, 1970 00:00:00 GMT)
const premiereDate = new Date("June 22, 21 20:00:00 EST").getTime()

console.log(premiereDate)

let countdown = function(){
    // rightNow will be the current date and time
    let rightNow = new Date
    // inBetween is the amount of time between the premiere and the current time
    let inBetween = premiereDate - rightNow;

    // variables of the out of miliseconds, seconds, etc. in the sec, min, hour, and day
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // math.floor rounds down to the nearest integer
    // we then divide the the time variables by the variable inBetween
    const secs = Math.floor(inBetween / second)
    const mins = Math.floor(inBetween / minute)
    const hrs = Math.floor(inBetween / hour)
    const dys = Math.floor(inBetween / day)

    console.log(rightNow)
    console.log(inBetween)

    console.log(secs, mins, hrs, dys)
}

countdown();