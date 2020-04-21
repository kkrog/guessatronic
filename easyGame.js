//Easy Level: all words 4 letters or less, no timer, wrong guesses same as twice letters in word;
document.getElementById("timerWrap").style.visibility="hidden"; 
/*OR just show infinite time
document.getElementById("timer").textContent="∞";
*/
const easyList=["hall","page","raw","rib","city","draw","list","wolf","wife","raid","take","live","roof","save","make","mean","host","like","pray","chip","lay","acid","glow","art","snub","lack","boat","fork","cane","care","sigh","car","rare","map","sale","bat","bond","goal","mass","hurl","hill","wage","bait","rage","goat","land","pit","unit","ward","mind","burn","weak","van","rush","bang","axis","cast","file","find","last","vain","band","wall","tie","beg","turn","coma","load","fish","cute","rock","stay","bind","meat","gem","lace","riot","pole","eaux","feed","lung","good","fade","pen","cry","time","wash","toll","dark","wood","way","heel","law","pat","red","wake","nap","cell","moon","aid","arch","just","win","tip","soil","view","soak","flu","veil","soul","fax","pipe","nut","dive","fool","game","stem","jet","pig","rest","tape","silk","lid","hide","debt","job","mine","bank","mile","tidy","cow","ally","poll","slot","tree","bean","sail","brag","clay","desk","lazy","loan","poem","free","pest","era","tone","neck","stab","disk","fail","maze","pot","shop","hand","lead","log","slap","plan","tap","poor","main","act","wing","jail","race","joke","tear","lift","lie","loop","dump","top","hip","halt","belt","wave","deny","hurt","seed","heat","urge","age","loud","man","step","lean","lost","part","word","pawn","pull","mill","heir","navy","coal","date","fat","blue","set","peak","code","die","get","wind","node","pour","deer","shy","sin","nun","size"];
let getWord=easyList[Math.floor(Math.random()*easyList.length)];
let splitWord=getWord.split("");
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
/*may need to redo movement based on percentage of vw and breakpoints:
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
let win=false;
let gameOver=false;
let gb=document.getElementById('guessBox');
let baro=document.getElementById('barometer');
let pauvre=document.getElementById('saveWrap');
let guess=()=>{
    let gl=gb.value;
    if(splitWord.includes(gl)){
        gc++;
        if(((gc+wc)<=mp)&&(splitWord===guesses)){
            gameOver=true;
            win=true;
        } else{
            const ggs=new Audio('./assets/goodGuessSound.mp3');
            ggs.play();
            for(c=0;c<splitWord.length;c++){
                if(splitWord[c]===gl){
                    guesses.splice(c,1,gl);
                    let rightLetter=document.createElement("span");
                    rightLetter.textContent=gl;
                    rightLetter.classList.add("ul","spacey");
                    let replaceIt=document.getElementById("goodGuesses").children[c];
                    let replaceParent=document.getElementById("goodGuesses");
                    replaceParent.replaceChild(rightLetter,replaceIt);
                }
            }
        };
    } else {
        wc++;
        wrongWrap.style.visibility="visible";
        wrongLetters.push(gl);
        let wrong=document.getElementById("wrong");
        wrong.textContent+=gl;
        baro.style.backgroundSize=`${wc*(508/mp)}%`;
        if((gc+wc)===mp){
            gameOver=true;
            win=false;
        } else if((mp-wc-gc)===1){
            const bgs3=new Audio('./assets/lastMoveSound.mp3');
            bgs3.play();
        } else if(((mp-wc-gc)>1)&&(((mp-wc)%2)>0)){
            const bgs2=new Audio('./assets/badGuessStillSound.mp3');
            bgs2.play();
        }else{
            const bgs1=new Audio('./assets/badGuessSound.mp3');
            bgs1.play();
            let cloud=document.getElementById('wrongWrap');
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
        };
    }
    document.getElementById('guessBox').value="";
    gb.focus;
    if(gameOver==true){
        if(document.getElementById('muzakOff').style.display==='block'){
            noMusic();
        };
        document.getElementById("levelWrap").style.height="0px";
        document.getElementById("levelWrap").style.visibility="hidden";
        if(win==false){
            document.getElementById("cage").style.backgroundImage=`url(${picked})`;
            document.getElementById("gameOver").style.display="block";
            document.getElementById('showWord').textContent=getWord;
            pauvre.style.visibility="hidden";
            let ls=new Audio('./assets/loseSound.mp3');
            ls.play();
        } else if(win==true){
            let ws=new Audio('./assets/winSound.mp3');
            ws.play();
        };
        start.textContent="Replay";
        let replay=()=>{
            let rs=new Audio('./assets/replaySound.mp3');
            rs.play();
            location.reload();
        };
        start.addEventListener('click',replay,{once:true});
    };
};
const guessButton=document.getElementById('guessButton');
guessButton.onclick=guess;
gb.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        guessButton.click();
    }});


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