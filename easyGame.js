//Easy Level: all words 4 letters or less, no timer, wrong guesses same as twice letters in word;
document.getElementById("timerWrap").style.visibility="hidden"; 
/*OR just show infinite time
document.getElementById("timer").textContent="∞";
*/
const easyList=["hall","page","raw","rib","city","draw","list","wolf","wife","raid","take","live","roof","save","make","mean","host","like","pray","chip","lay","acid","glow","art","snub","lack","boat","fork","cane","care","sigh","car","rare","map","sale","bat","bond","goal","mass","hurl","hill","wage","bait","rage","goat","land","pit","unit","ward","mind","burn","weak","van","rush","bang","axis","cast","file","find","last","vain","band","wall","tie","beg","turn","coma","load","fish","cute","rock","stay","bind","meat","gem","lace","riot","pole","eaux","feed","lung","good","fade","pen","cry","time","wash","toll","dark","wood","way","heel","law","pat","red","wake","nap","cell","moon","aid","arch","just","win","tip","soil","view","soak","flu","veil","soul","fax","pipe","nut","dive","fool","game","stem","jet","pig","rest","tape","silk","lid","hide","debt","job","mine","bank","mile","tidy","cow","ally","poll","slot","tree","bean","sail","brag","clay","desk","lazy","loan","poem","free","pest","era","tone","neck","stab","disk","fail","maze","pot","shop","hand","lead","log","slap","plan","tap","poor","main","act","wing","jail","race","joke","tear","lift","lie","loop","dump","top","hip","halt","belt","wave","deny","hurt","seed","heat","urge","age","loud","man","step","lean","lost","part","word","pawn","pull","mill","heir","navy","coal","date","fat","blue","set","peak","code","die","get","wind","node","pour","deer","shy","sin","nun","size"];
let getWord=easyList[Math.floor(Math.random()*easyList.length)];
let splitWord=getWord.split("");
//for debugging gameplay - delete line 10 when everything works
console.log(splitWord);
let swL=splitWord.length;
let guesses=new Array(swL);
let populateSecretWord=()=>{
    for(i=0;i<swL;i++){
        let secretLetter=document.createElement("span");
        secretLetter.textContent="_";
        secretLetter.classList.add("ul","nul","spacey");
        document.getElementById("goodGuesses").appendChild(secretLetter);
    }
};
populateSecretWord();
/*may need to redo movement based on percentage of vw and breakpoints. if so:
console.log(window.innerWidth);
console.log(window.innerHeight);*/
let wrongWrap=document.getElementById("wrongWrap");
wrongWrap.style.visibility="hidden";
let wrongLetters=[];
//wc is wrong guess count
let wc=0;
//mp is max plays
let mp=2*swL;
//gc is good guess count
let gc=0;
//ga is good array
let ga=[];
let win=false;
let gameOver=false;
let gb=document.getElementById('guessBox');
let baro=document.getElementById('barometer');
let cloud=document.getElementById('wrongWrap');
let pauvre=document.getElementById('saveWrap');
let smallScreen=window.matchMedia("(max-width:767.98px) and (min-height:512px),(min-width:768px) and (min-height:512px) and (max-height:614.98px)");
let mediumScreen=window.matchMedia("(min-width:768px) and (max-width:991.98px) and (min-height:585px),(min-width:992px) and (min-height:615px) and (max-height:728.98px)");
let largeScreen=window.matchMedia("(min-width:992px) and (min-height:729px)");
//creature gets too far away on large screens
if(largeScreen.matches){
    pauvre.style.paddingRight="200px";
};
//Bug Note - If finish word correctly after reaching Warning stage, no WIN...BUT not always!
let guess=()=>{
    let gl=gb.value;
//add regexp for only alpha characters
    if((guesses.includes(gl))||(wrongLetters.includes(gl))){
        let bob=document.createElement("div");
        bob.textContent="Letter already used. Please guess a new letter.";
        bob.setAttribute('role','alert')
        bob.classList.add("alert","alert-info","alert-dismissible","fade","show");
        let gio=document.createElement('button');
        gio.setAttribute('type','button');
        gio.setAttribute('data-dismiss','alert');
        gio.setAttribute('aria-label','close');
        gio.id="noReuseClose1";
        gio.classList.add('close');
        let exy=document.createElement('span');
        exy.textContent='x';
        exy.id='noReuseClose2';
        exy.setAttribute('aria-hidden','true');
        gio.append(exy);
        bob.append(gio);
        document.getElementById('guessWrap').append(bob);
        $('#guessWrap').alert('show');
    } else if(splitWord.includes(gl)){
        gc++;
//audio still breaks if double letter last correct guess
        if((swL-ga.length>1)&&(win==false)){
            const ggs=new Audio('./assets/goodGuessSound.mp3');
            ggs.play();
        };
        for(c=0;c<splitWord.length;c++){
            if(splitWord[c]===gl){
                ga.push(gl);
                guesses.splice(c,1,gl);
                let rightLetter=document.createElement("span");
                rightLetter.textContent=gl;
                rightLetter.classList.add("ul","spacey");
                let replaceIt=document.getElementById("goodGuesses").children[c];
                let replaceParent=document.getElementById("goodGuesses");
                replaceParent.replaceChild(rightLetter,replaceIt);  
                console.log(ga);
            }
        };
        if((wc<=mp)&&(JSON.stringify(splitWord)===JSON.stringify(guesses))){
            gameOver=true;
            win=true;}
    } else {
    //Revisit max plays vs wrong plays & robot movements - not always getting to the creature
        wc++;
        wrongWrap.style.visibility="visible";
        wrongLetters.push(gl);
        let wrong=document.getElementById("wrong");
        wrong.textContent+=gl;  
        if(smallScreen.matches){
            baro.style.backgroundSize='61px';
            baro.style.backgroundPositionY=`${61-(wc*(61/mp))}px`
        } else if(mediumScreen.matches){
            baro.style.backgroundSize='87px';
            baro.style.backgroundPositionY=`${87-(wc*(87/mp))}px`
        } else if(largeScreen.matches){
            baro.style.backgroundSize='117px';
            baro.style.backgroundPositionY=`${117-(wc*(117/mp))}px`
        };
        if(wc==mp){
            gameOver=true;
            win=false;
        } else if(((mp-wc)==1)&&(mp==6)){
            const bgs3=new Audio('./assets/lastMoveSound.mp3');
            bgs3.play();
        } else if(((mp-wc)==1)&&(mp==8)){
            const bgs3=new Audio('./assets/lastmoveSound.mp3');
            bgs3.play();
            cloud.classList.remove("offset-3");
            cloud.classList.add("offset-4");
            pauvre.classList.remove("offset-2");
            pauvre.classList.remove("offset-md-1");
            pauvre.classList.add("offset-1");
            pauvre.classList.add("offset-md-0");
        } else if(mp==6){
            const bgs1=new Audio('./assets/badGuessSound.mp3');
            bgs1.play();
            if(cloud.classList.contains(`offset-${wc-1}`)){
                cloud.classList.remove(`offst-${wc-1}`);
                cloud.classList.add(`offset-${wc}`);
                pauvre.classList.remove(`offset-${4-wc+1}`);
                pauvre.classList.add(`offset-${4-wc}`);
            } else {
                cloud.classList.add(`offset-${wc}`);
                pauvre.classList.remove(`offset-4`);
                pauvre.classList.add(`offset-${4-wc}`);
            }
        }; /*else if(((mp-wc)>1)&&(((mp-wc)%2)>0)){
            const bgs2=new Audio('./assets/badGuessStillSound.mp3');
            bgs2.play();
            else{
            const bgs1=new Audio('./assets/badGuessSound.mp3');
            bgs1.play();
            let wc2=(wc/2);
            if(cloud.classList.contains(`offset-${wc2-1}`)){
                cloud.classList.remove(`offset-${wc2-1}`);
                cloud.classList.add(`offset-${wc2}`);
                pauvre.classList.remove(`offset-${5-wc2+1}`);
                pauvre.classList.remove(`offset-md-${4-wc2+1}`);
                pauvre.classList.add(`offset-${5-wc2}`);
                pauvre.classList.add(`offset-md-${4-wc2}`);
            } else {
                cloud.classList.add(`offset-${wc2}`);
                pauvre.classList.remove(`offset-5`);
                pauvre.classList.remove(`offset-md-4`);
                pauvre.classList.add(`offset-${5-wc2}`);
                pauvre.classList.add(`offset-md-${4-wc2}`);
            }
        };*/
    }
    document.getElementById('guessBox').value="";
    gb.focus;
    if(gameOver==true){
        if(document.getElementById('muzakOff').style.display==='block'){
            noMusic();
        };
        document.getElementById('gameOver').style.display="block";
        document.getElementById('guessButton').style.display="none";
        document.getElementById("levelWrap").style.height="0px";
        document.getElementById("levelWrap").style.visibility="hidden";
        if(win===false){
            document.getElementById("cage").style.backgroundImage=`url(${picked})`;
            document.getElementById("gameFin").style.display="block";
            document.getElementById('showWord').textContent=getWord;
            pauvre.style.visibility="hidden";
            let ls=new Audio('./assets/loseSound.mp3');
            ls.play();
        } else if(win===true){
            document.getElementById("gameWin").style.display="block";
            let ws=new Audio('./assets/winSound.mp3');
            ws.play();
        };
        start.style.display="none";
        replayb.style.display="inline-block";
        let replay=()=>{
            let rs=new Audio('./assets/replaySound.mp3');
            rs.play();
        };
        replayb.addEventListener('mouseover',replay,{once:true});
        let redo=()=>{
            location.reload();
        };
        replayb.addEventListener('click',redo,{once:true});
    };
};
const guessButton=document.getElementById('guessButton');
guessButton.onclick=guess;
gb.addEventListener("keyup", function(event) {
    if ((event.keyCode === 13)&&(gameOver===false)) {
        guessButton.click();
    }});
let sp=()=>{
    let secretMessage=new Audio(`./assets/secretSound${(Math.floor(Math.random()*2))+1}.mp3`);
    secretMessage.play()};
let secretButton=document.getElementById("secret");
secretButton.onclick=sp;

/*let letters=['h','o','u','n','d'];
let lel=letters.length;
let guesses=new Array(lel);
let wrong=[];
let playcount=0;
let guess=()=>{
  let gl=prompt('Guess letter');
  if (letters.includes(gl)){guesses.splice(letters.indexOf(gl),1,gl)
    } else {
      wrong.push(gl);
      playcount++};
  console.log(`Good guesses: ${guesses}`);
  console.log(`Bad guesses: ${wrong}`);
  console.log(`Wrong guesses left: ${letters.length-playcount}`)
  if(JSON.stringify(letters)===JSON.stringify(guesses)){playcount=letters.length;console.log("You win!")};
};

while(playcount<letters.length){guess()};*/
/*Need to add in js:
  reward $ along with the playcount
  word bank, word selector, word-to-letter split
  dom-manipulation
  result styling
  alterations necessary for scoring and recording words with repeating letters
*/