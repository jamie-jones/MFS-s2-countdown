// getTime() returned the number of miliseconds since the Unix Epoch (Jan 1, 1970 00:00:00 GMT)
const premiereDate = new Date("June 21, 22 21:00:00 EST").getTime()

// const episodeDates = [new Date("July 13, 21 21:00:00 EST").getTime(),
//     new Date("July 20, 21 21:00:00 EST").getTime(),
//     new Date("July 27, 21 21:00:00 EST").getTime(),
//     new Date("August 03, 21 21:00:00 EST").getTime(),
//     new Date("August 10, 21 21:00:00 EST").getTime(),
//     new Date("August 17, 21 21:00:00 EST").getTime(),
//     new Date("August 24, 21 21:00:00 EST").getTime()]

console.log(premiereDate)

const stopCountdown = function() {
    document.getElementById("day").innerText = "00"
    document.getElementById("hr").innerText = "00"
    document.getElementById("min").innerText = "00"
    document.getElementById("sec").innerText = "00"
}

let rightNow = new Date

// the function holds a for loop
// let countdown = function(){

//     // this for loop loops over the episodeDates array
//     for(let i=0; i<episodeDates.length; i++){
//         // the if/else statement says that if the episodeDate element is greater than the current date/time...
//         if(episodeDates[i]>=rightNow){
//             // the setNewDate function will go to the next date from the array.
//             setNewDate(episodeDates[i])
//             // break stops the for loop
//             break;
//         }
//     } 
// }

// this function takes a parameter of dateToBeSet, which equals an element from episodeDates as seen in countdown() 
// const setNewDate = function(dateToBeSet){

//     rightNow = new Date
//     let inBetween = dateToBeSet - rightNow;

//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const days = hour * 24;

//     const secs = Math.floor((inBetween % minute) / second)
//     const mins = Math.floor((inBetween % hour) / minute)
//     const hrs = Math.floor((inBetween % days) / hour)
//     const dys = Math.floor(inBetween / days)

//     document.getElementById("day").innerText = dys
//     document.getElementById("hr").innerText = hrs
//     document.getElementById("min").innerText = mins
//     document.getElementById("sec").innerText = secs   
// }
// setInterval(function(){
//     countdown();
// },1000)


let countdown = function(){
    // rightNow will be the current date and time
    let rightNow = new Date
    // console.log(rightNow)
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

    if(rightNow >= premiereDate){
        stopCountdown()
    }
}
setInterval(function(){
    countdown();
},1000)


var panelNumber=3;
var list=[
"./test/tumblrTest.html",
"./FeaturedArtHtmls/Art_001.html",
"./FeaturedArtHtmls/Art_002.html",
"./FeaturedArtHtmls/Art_003.html",
"./FeaturedArtHtmls/Art_004.html",
"./FeaturedArtHtmls/Art_005.html",
"./FeaturedArtHtmls/Art_006.html",
"./FeaturedArtHtmls/Art_007.html",
"./FeaturedArtHtmls/Art_008.html",
"./FeaturedArtHtmls/Art_009.html",
"./FeaturedArtHtmls/Art_010.html",
"./FeaturedArtHtmls/Art_011.html",
"./FeaturedArtHtmls/Art_012.html",
"./FeaturedArtHtmls/Art_013.html",
"./FeaturedArtHtmls/Art_014.html",
"./FeaturedArtHtmls/Art_015.html",
"./FeaturedArtHtmls/Art_016.html",
"./FeaturedArtHtmls/Art_017.html",
"./FeaturedArtHtmls/Art_018.html",
"./FeaturedArtHtmls/Art_019.html",
"./FeaturedArtHtmls/Art_020.html",
"./FeaturedArtHtmls/Art_021.html",
"./FeaturedArtHtmls/Art_022.html",
"./FeaturedArtHtmls/Art_023.html",
"./FeaturedArtHtmls/Art_024.html",
"./FeaturedArtHtmls/Art_025.html",
"./FeaturedArtHtmls/Art_026.html",
"./FeaturedArtHtmls/Art_027.html",
"./FeaturedArtHtmls/Art_028.html",
"./FeaturedArtHtmls/Art_029.html",
"./FeaturedArtHtmls/Art_030.html",
"./FeaturedArtHtmls/Art_031.html",
"./FeaturedArtHtmls/Art_032.html",
"./FeaturedArtHtmls/Art_033.html",
"./FeaturedArtHtmls/Art_034.html",
"./FeaturedArtHtmls/Art_035.html",
"./FeaturedArtHtmls/Art_036.html",
"./FeaturedArtHtmls/Art_037.html",
"./FeaturedArtHtmls/Art_038.html",
"./FeaturedArtHtmls/Art_039.html",
"./FeaturedArtHtmls/Art_040.html",
"./FeaturedArtHtmls/Art_041.html",
"./FeaturedArtHtmls/Art_042.html",
"./FeaturedArtHtmls/Art_043.html",
"./FeaturedArtHtmls/Art_044.html",
"./FeaturedArtHtmls/Art_045.html",
"./FeaturedArtHtmls/Art_046.html",
"./FeaturedArtHtmls/Art_047.html",
"./FeaturedArtHtmls/Art_048.html",
"./FeaturedArtHtmls/Art_049.html",
"./FeaturedArtHtmls/Art_050.html",
"./FeaturedArtHtmls/Art_051.html",
"./FeaturedArtHtmls/Art_052.html",
"./FeaturedArtHtmls/Art_053.html",

]


// this line finds a random number between 0 and the list length. If using the limited number of panels, we need to have the range shrunk by 2 to avoid out of bounds exceptions when rand+1 and rand+2 are assigned
var rand= Math.floor(Math.random() * (list.length));
var panelspace = document.getElementById("panel0");
panelspace.setAttribute('src', list[rand]);


//from here on testing new panel creation

artIndex=rand;
document.getElementById("btnNext").addEventListener("click", goRight);
document.getElementById("btnPrev").addEventListener("click", goLeft);

function goRight(){
    if(artIndex<list.length-1){
        artIndex++;
    } else {
        artIndex=0;
    }
    console.log(artIndex);
    //makeNewPanel();
    panelspace = document.getElementById("panel0");
    panelspace.setAttribute('src', list[artIndex]);
}

function goLeft(){
    if(artIndex==0){
        artIndex=list.length-1;
    }
    else {
        artIndex--;
    }
    console.log(artIndex);
    //makeNewPanel();

    panelspace = document.getElementById("panel0");
    panelspace.setAttribute('src', list[artIndex]);
}
