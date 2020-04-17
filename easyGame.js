//Easy Level: all words 4 letters or less, no timer, wrong guesses same as twice letters in word;
const easyList=["hall","page","raw","rib","city","draw","list","wolf","wife","raid","take","live","roof","save","make","mean","host","like","pray","chip","lay","acid","glow","art","snub","lack","boat","fork","cane","care","sigh","car","rare","map","sale","bat","bond","goal","mass","hurl","hill","wage","bait","rage","goat","land","pit","unit","ward","mind","burn","weak","van","rush","bang","axis","cast","file","find","last","vain","band","wall","tie","beg","turn","coma","load","fish","cute","rock","stay","bind","meat","gem","lace","riot","pole","eaux","feed","lung","good","fade","pen","cry","time","wash","toll","dark","wood","way","heel","law","pat","red","wake","nap","cell","moon","aid","arch","just","win","tip","soil","view","soak","flu","veil","soul","fax","pipe","nut","dive","fool","game","stem","jet","pig","rest","tape","silk","lid","hide","debt","job","mine","bank","mile","tidy","cow","ally","poll","slot","tree","bean","sail","brag","clay","desk","lazy","loan","poem","free","pest","era","tone","neck","stab","disk","fail","maze","pot","shop","hand","lead","log","slap","plan","tap","poor","main","act","wing","jail","race","joke","tear","lift","lie","loop","dump","top","hip","halt","belt","wave","deny","hurt","seed","heat","urge","age","loud","man","step","lean","lost","part","word","pawn","pull","mill","heir","navy","coal","date","fat","blue","set","peak","code","die","get","wind","node","pour","deer","shy","sin","nun","size"];
let getWord=easyList[Math.floor(Math.random()*easyList.length)];
let splitWord=getWord.split("");
console.log(splitWord);
let swL=splitWord.length;
let guesses=new Array(2*swL);

//let secretWord=[];
let populateSecretWord=()=>{
    for(i=0;i<8;i++){
        let secretLetter=document.createElement("span");
        secretLetter.textContent="_";
        secretLetter.setAttribute("class","ul nul spacey");
        document.getElementById("goodGuesses").appendChild(secretLetter);
    }
};
populateSecretWord();
/*let secretHolder=document.getElementById("goodGuesses");
secretHolder.appendChild(secretWord);*/
/*document.getElementById('goodGuesses').textContent;
let wrongLetters=[];
let guess=()=>{
    let gl=document.getElementById('guessBox').value;
    if(splitWord.includes(gl)){
        guesses.splice(splitWord.indexOf(gl),1,gl);
        
    }
}*/
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