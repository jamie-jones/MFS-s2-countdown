// getTime() returned the number of miliseconds since the Unix Epoch (Jan 1, 1970 00:00:00 GMT)
const premiereDate = new Date("June 22, 21 22:00:00 EST").getTime()

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
    const days = hour * 24

    // math.floor rounds down to the nearest integer
    // we then do math
    const secs = Math.floor((inBetween % minute) / second)
    const mins = Math.floor((inBetween % hour) / minute)
    const hrs = Math.floor((inBetween % days) / hour)
    const dys = Math.floor(inBetween / days)

    // console.log(dys, hrs, mins, secs)

    // grab the ID from the html and input the countdown through the text
    document.getElementById("day").innerText = dys
    document.getElementById("hr").innerText = hrs
    document.getElementById("min").innerText = mins
    document.getElementById("sec").innerText = secs
}
setInterval(function(){
    countdown();
},1000)

document.getElementById("panel0").setAttribute("src", "./test/tweetTest.html");
document.getElementById("panel1").setAttribute("src", "./test/instaTest.html");
document.getElementById("panel2").setAttribute("src", "./test/tumblrTest.html");
