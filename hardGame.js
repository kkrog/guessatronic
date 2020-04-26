//Hard Level: words 4 to 6 letters, 1 minute timer; wrong guesses 3/4 of word length;
let playHard=()=>{
    gameDisplay.style.display="flex";
    start.style.display="none";
    instructions.style.display="none";
    let cd;
    let secsleft;
    document.getElementById('guessButton').setAttribute("data-time","60");
    const timeDisplay=document.getElementById("timer");
    const timeButton=document.getElementById('guessButton');
    function timer(seconds){
        clearInterval(cd);
        const rn=Date.now();
        const theend=rn+seconds*1000;
        console.log(seconds);
        dsl(seconds);
        cd=setInterval(()=>{
            secsleft=Math.round((theend-Date.now())/1000);
            if((secsleft<0)||(gameOver==true)){
                clearInterval(cd);
                return;
            }
            dsl(secsleft);
        },1000);
    };
    function dsl(seconds){
        const display=`${seconds}`;
        timeDisplay.textContent=display; 
    };
    let startcd=()=>{
        const seconds = parseInt(timeButton.dataset.time);
        timer(seconds);
    }
    timeButton.addEventListener('click',startcd,{once:true});
/* Can you call the same dom element different things?!?! we'll find out in a second...
depending on what button works for this:
hard is element.setAttribute("data-time",60);
extreme is element.setAttribute("data-time",30);
*/
    const hardList=["road","loose","serve","meat","flush","mill","sacred","flood","aspect","murder","news","bleed","nuance","share","wild","oven","duty","tiptoe","deadly","visual","belong","legend","tablet","feel","thank","opera","poison","assume","beef","full","shelf","social","damage","loop","panel","carrot","king","star","irony","ignore","method","fresh","worker","brake","volume","green","seek","late","diet","nest","cafe","reward","crack","plain","disk","speed","cute","upset","free","march","gravel","card","dine","tape","soar","coup","front","woman","arena","employ","smash","load","mood","oral","view","knot","agenda","hard","policy","home","guilt","accept","basin","tribe","value","dragon","graze","quiet","brave","twist","float","lawyer","able","fast","ghost","resort","plug","firm","decide","gift","order","wake","depend","gutter","mark","result","inject","giant","habit","palm","Venus","voyage","rotten","boat","bench","cheque","repeat","miss","west","drop","crude","warm","calm","self","velvet","ready","wound","useful","model","fork","punish","work","petty","pole","back","shorts","heavy","engine","stick","filter","water","middle","clean","brick","dilute","branch","form","hiccup","deep","refund","canvas","pipe","give","school","favour","punch","father","meal","draw","lily","weak","pepper","broken","option","ample","wood","breeze","sound","insert","wire","hole","gain","sweet","virus","facade","wonder","lion","risk","refuse","peanut","bottle","date","palace","oppose","trial","trance","cancel","world","wrong","injury","debut","suntan","thanks","lift","writer","fire","shine","prayer","gold","unit","bring","read","sense","slump","bolt","mole","ritual","coffin","monk","ratio","wrist","final","queue","fraud","chop","drift","piece","honor","acute","draft","know","night","white","dozen","number","mill","leaf","refund","wage","power","hobby","button","ward","margin","silk","animal","lion","soar","fear","tune","repeat","rack","forbid","orbit","bell","second","rule","rocket","absorb","charge","ladder","tempt","twitch","artist","outfit","cart","narrow","acquit","barrel","visual"];
    let getWord=hardList[Math.floor(Math.random()*hardList.length)];
    let splitWord=getWord.split("");
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
    let wrongWrap=document.getElementById("wrongWrap");
    wrongWrap.style.visibility="hidden";
    let wrongLetters=[];
    let wc=0;
    let mp=Math.round(0.75*swL);
    let gc=0;
    let ga=[];
    let win=false;
    let gameOver=false;
    let baro=document.getElementById('barometer');
    let cloud=document.getElementById('wrongWrap');
    let pauvre=document.getElementById('saveWrap');
    let smallScreen=window.matchMedia("(min-width:576px) and (max-width:767.98px) and (min-height:512px),(min-width:768px) and (min-height:512px) and (max-height:614.98px)");
    let mediumScreen=window.matchMedia("(min-width:768px) and (max-width:991.98px) and (min-height:585px),(min-width:992px) and (min-height:615px) and (max-height:728.98px)");
    let largeScreen=window.matchMedia("(min-width:992px) and (min-height:729px)");
    //creature gets too far away on large screens
    /*if(largeScreen.matches){
        pauvre.style.paddingRight="200px";
    };*/
    //Bug Note - If finish word correctly after reaching Warning stage, no WIN...BUT not always! Not finding bug at It's Alive commit
    let guess=()=>{
        let gl=gb.value;
        let alpha=/[a-z]/i;
        if(alpha.test(gl)){
            if(secsleft<=0){
                gameOver=true;
                win=false;
            } else if((guesses.includes(gl))||(wrongLetters.includes(gl))){
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
                    }
                };
                if((wc<=mp)&&(JSON.stringify(splitWord)===JSON.stringify(guesses))){
                    gameOver=true;
                    win=true;}
            } else {
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
                } else if((mp-wc)==1){
                    const bgs3=new Audio('./assets/lastMoveSound.mp3');
                    bgs3.play();
                } else if(((mp-wc)%2)==0){
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
                } else if(((mp-wc)>1)&&(((mp-wc)%2)>0)){
                    const bgs1=new Audio('./assets/badGuessSound.mp3');
                    bgs1.play();
                    if(cloud.classList.contains(`offset-${wc-Math.floor((2/3)*wc)}`)){
                        cloud.classList.remove(`offset-${wc-Math.floor((2/3)*wc)}`);
                        cloud.classList.add(`offset-${wc-Math.floor(wc/2)}`);
                        pauvre.classList.remove(`offset-${mp-wc-Math.floor(mp/wc)}`);
                        pauvre.classList.add(`offset-${3-Math.floor(wc/2)}`);
                    } else {
                        cloud.classList.add(`offset-${wc}`);
                        pauvre.classList.remove(`offset-4`);
                        pauvre.classList.add(`offset-${4-wc}`);
                    };
                } else {
                    const bgs2=new Audio('./assets/badGuessStillSound.mp3');
                    bgs2.play();            
                };
            };
            document.getElementById('guessBox').value="";
            gb.focus();
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
        //BUG ALERT! If doubleclick howToButton after gameplay, start and replay buttons appear when howTo toggled shut 
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
};