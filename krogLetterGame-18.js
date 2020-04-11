let creatures=["./images/creature1.png","./images/creature2.png","./images/creature3.png","./images/creature4.png"];
let pickCreature=()=>{
  let picked=creatures[Math.floor(Math.random()*creatures.length)];
  document.getElementById('saveIt').src=picked;
};
pickCreature();

let instructions=document.getElementById('howToButton');
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
};


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


