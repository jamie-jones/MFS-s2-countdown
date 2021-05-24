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

]


// this line finds a random number between 0 and the list length. If using the limited number of panels, we need to have the range shrunk by 2 to avoid out of bounds exceptions when rand+1 and rand+2 are assigned
var rand= Math.floor(Math.random() * (list.length));
var panelspace = document.getElementById("panel0");
panelspace.setAttribute('src', list[rand]);

//this part was for when we had 3 slots and randomzied what got in there
/*
console.log(list.length)
console.log(rand)
console.log(list[rand])

panel="panel"

var i=0
for (i=0; i<panelNumber; i++){
    panel=panel.concat(i);
    console.log(panel);
    document.getElementById(panel).setAttribute("src", list[rand+i]);
    panel="panel"
}
*/


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
