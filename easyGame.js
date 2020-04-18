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
let playCount=0;
let populateSecretWord=()=>{
    for(i=0;i<swL;i++){
        let secretLetter=document.createElement("span");
        secretLetter.textContent="_";
        secretLetter.classList.add("ul","nul","spacey");
        document.getElementById("goodGuesses").appendChild(secretLetter);
    }
};
populateSecretWord();
let wrongWrap=document.getElementById("wrongWrap");
wrongWrap.style.visibility="hidden";
let wrongLetters=[];
let wc=0;
let guess=()=>{
    let gl=document.getElementById('guessBox').value;
    if(splitWord.includes(gl)){
        let letterloc=splitWord.indexOf(gl);
        guesses.splice(letterloc,1,gl);
        let rightLetter=document.createElement("span");
        rightLetter.textContent=gl;
        rightLetter.classList.add("ul","spacey");
        let replaceIt=document.getElementById("goodGuesses").children[letterloc];
        let replaceParent=document.getElementById("goodGuesses");
        replaceParent.replaceChild(rightLetter,replaceIt);
        playCount++;
    } else {
        wc++;
        wrongWrap.style.visibility="visible";
        wrongLetters.push(gl);
        let wrong=document.getElementById("wrong");
        wrong.textContent+=gl;
        let cloud=document.getElementById('wrongWrap');
        let pauvre=document.getElementById('saveWrap');
        if(cloud.classList.contains(`offset-${wc-1}`)){
            cloud.classList.remove(`offset-${wc-1}`);
            cloud.classList.add(`offset-${wc}`);
            pauvre.classList.remove(`offset-${6-wc+1}`);
            pauvre.classList.remove(`offset-md-${4-wc+1}`);
            pauvre.classList.add(`offset-${6-wc}`);
            pauvre.classList.add(`offset-md-${4-wc}`);
        } else {
            cloud.classList.add(`offset-${wc}`);
            pauvre.classList.remove(`offset-6`);
            pauvre.classList.remove(`offset-md-4`);
            pauvre.classList.add(`offset-${6-wc}`);
            pauvre.classList.add(`offset-md-${4-wc}`);
        };
        let baro=document.getElementById(barometer);
        playCount++;
        //move robot to right by changing col class, barometer percent vs total moves
    }
}
const guessButton=document.getElementById('guessButton');
guessButton.onclick=guess;
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