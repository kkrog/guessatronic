//display an imaginary friend
let creatures=["./images/creature1.png","./images/creature2.png","./images/creature3.png","./images/creature4.png"];
let saveable=creatures[Math.floor(Math.random()*creatures.length)];
document.getElementById('saveIt').src=saveable;
//music controls
let mon=document.getElementById('muzakOn');
let mof=document.getElementById('muzakOff');
let zak=new Audio('./assets/music2.mp3');
const playMusic=()=>{
  zak.play().loop;
  mon.style.display='none';
  mof.style.display='block';
}
const noMusic=()=>{
  zak.pause();
  mon.style.display='block';
  mof.style.display='none';
}
mon.onclick=playMusic;
mof.onclick=noMusic;
//instructions toggle
let instructions=document.getElementById('howToButton');
const howPlay=()=>{
  let c=0;
  instructions.onclick=()=>{
    c++;
    if(c%2 !== 0){
      document.getElementById('howTo').style.display='block';
      document.getElementById('start').style.display='none';
    } else if(c%2==0){
      document.getElementById('howTo').style.display='none';
      document.getElementById('start').style.display='inline-block';
    }
  }
};
howPlay();
const start=document.getElementById("start");
const replayb=document.getElementById("replay");
const gameDisplay=document.getElementById("gameWrap");
let gb=document.getElementById('guessBox');
let ss=new Audio('./assets/startSound.mp3');

//levels
let levels=Array.from(document.getElementsByClassName('lb'));
let eL=levels[0];
let mL=levels[1];
let hL=levels[2];
let xL=levels[3];
//limit active button to find level - native tbs toggle wasn't functioning well for purpose
let easylimit=()=>{
    if (!eL.classList.contains("active")){
        eL.classList.add("active");
        mL.classList.remove("active");
        hL.classList.remove("active");
        xL.classList.remove("active");
    };
};
eL.onclick=easylimit;

let medlimit=()=>{
    if(!mL.classList.contains("active")){
        mL.classList.add("active");
        eL.classList.remove("active");
        hL.classList.remove("active");
        xL.classList.remove("active");
    };
};
mL.onclick=medlimit;

let hardlimit=()=>{
    if(!hL.classList.contains("active")){
        hL.classList.add("active");
        eL.classList.remove("active");
        mL.classList.remove("active");
        xL.classList.remove("active");
    };
};
hL.onclick=hardlimit;

let extlimit=()=>{
    if(!xL.classList.contains("active")) {
        xL.classList.add("active");
        eL.classList.remove("active");
        mL.classList.remove("active");
        hL.classList.remove("active");
    }
};

xL.onclick=extlimit;
//Load the game and play
let ssp=()=>{
  let picked=document.querySelector(".active").id;
  if(picked=="easy"){
    ss.play();
    easyPlay();
  } else if(picked=="medium"){
    ss.play();
    mediumPlay();
  } else if(picked=="hard"){
    ss.play();
    hardPlay();
  } else if(picked=="extreme"){
    ss.play();
    extremePlay();
  };
  gb.focus();
};
start.addEventListener("click",ssp);

//change game visibility if window shrunk too small for gameplay after game started
let xsmall=window.matchMedia("(max-width:575.98px),(max-height:511.98px)");
let cloud=document.getElementById('wrongWrap');
function xsCheck(e){
  if(e.matches){
    gameDisplay.style.visibility="hidden";
    cloud.style.visibility="hidden";
    document.getElementById('gameFin').style.visibility="hidden";
  } else{
    gameDisplay.style.visibility="visible";
    cloud.style.visibility="visible";
    document.getElementById('gameFin').style.visibility="visible";
  }
};
xsmall.addListener(xsCheck);
