//Medium Level: words up to 6 letters, no timer, wrong guesses same as letters in word;
let mediumPlay=()=>{
    document.getElementById("levelWrap").style.height="0px";
    document.getElementById("levelWrap").style.visibility="hidden";
    gameDisplay.style.display="flex";
    start.style.display="none";
    instructions.style.display="none";
    document.getElementById("timerWrap").style.visibility="hidden";
    let gb=document.getElementById('guessBox');
    gb.focus();
    let outer=document.getElementById('OUTER');
    let pauvre=document.getElementById('saveWrap');
    let smoke=document.getElementById("smoke");
    cloud.classList.add("justify-content-xl-end");
    outer.classList.add("align-items-xl-end");
    pauvre.classList.add("align-items-xl-start");
    smoke.classList.add("ml-xl-5");
    const mediumList=["road","loose","serve","meat","flush","mill","sacred","flood","aspect","murder","news","bleed","nuance","slow","share","wild","oven","duty","tiptoe","deadly","visual","wing","belong","legend","tablet","feel","thank","opera","poison","assume","beef","full","shelf","social","damage","loop","panel","carrot","diet","king","star","irony","ignore","method","fresh","worker","brake","volume","green","seek","late","diet","nest","cafe","jester","reward","crack","plain","disk","speed","scowl","geode","cute","doge","buyer","upset","free","march","gravel","card","dine","tape","soar","beat","coup","front","woman","arena","employ","smash","load","moil","mood","oral","view","knot","agenda","hard","policy","home","guilt","accept","basin","tribe","value","dragon","graze","quiet","brave","twist","float","lawyer","able","fast","ghost","resort","plug","firm","decide","gift","order","taxes","wake","post","fray","depend","gutter","mark","result","inject","giant","habit","palm","Venus","voyage","rotten","boat","gases","bench","cheque","repeat","miss","west","drop","crude","warm","calm","self","velvet","ready","wound","useful","stop","model","fork","punish","work","petty","pole","back","shorts","heavy","engine","stick","filter","water","middle","clean","brick","dilute","better","branch","bushy","form","hiccup","deep","refund","canvas","pipe","give","school","favour","punch","father","meal","draw","lily","weak","pepper","broken","option","ample","wood","breeze","sound","insert","wire","hole","gain","sweet","virus","facade","wonder","lion","risk","refuse","peanut","bottle","date","palace","oppose","trial","trance","cancel","world","wrong","injury","debut","bane","suntan","thanks","lift","writer","flyer","fire","shine","prayer","gold","unit","bring","read","sense","slump","bolt","mole","trip","ritual","coffin","monk","ratio","aged","wrist","final","queue","fraud","chop","drift","piece","mixer"];
    let getWord=mediumList[Math.floor(Math.random()*mediumList.length)];
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
    cloud.style.visibility="hidden";
    let wrongLetters=[];
    let wc=0;
    let mp=swL;
    if(mp==4){
        cloud.classList.add("offset-1");
        pauvre.classList.remove("offset-4");
        pauvre.classList.add("offset-3");
    };
    let gc=0;
    let ga=[];
    let win=false;
    let gameOver=false;
    let baro=document.getElementById('barometer');
    let smallScreen=window.matchMedia("(min-width:576px) and (max-width:767.98px) and (min-height:512px),(min-width:768px) and (min-height:512px) and (max-height:614.98px)");
    let mediumScreen=window.matchMedia("(min-width:768px) and (max-width:991.98px) and (min-height:585px),(min-width:992px) and (min-height:615px) and (max-height:728.98px)");
    let largeScreen=window.matchMedia("(min-width:992px) and (min-height:729px)");
    let guess=()=>{
        const ggs=new Audio('./assets/goodGuessSound.mp3');
        let gl=gb.value;
        let alpha=/[a-z]/i;
        if(alpha.test(gl)){
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
                if((swL-ga.length>1)&&(win==false)){
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
                cloud.style.visibility="visible";
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
                } else if(((mp-wc)==1)&&((mp==5)||(mp==4))){
                    const bgs3=new Audio('./assets/lastmoveSound.mp3');
                    bgs3.play();
                    cloud.classList.remove("offset-3");
                    cloud.classList.add("offset-4");
                    pauvre.classList.remove("offset-1");
                    pauvre.classList.add("offset-0");
                } else if(mp!==4){
                    const bgs1=new Audio('./assets/badGuessSound.mp3');
                    bgs1.play();
                    if(cloud.classList.contains(`offset-${wc-1}`)){
                        cloud.classList.remove(`offset-${wc-1}`);
                        cloud.classList.add(`offset-${wc}`);
                        pauvre.classList.remove(`offset-${4-wc+1}`);
                        pauvre.classList.add(`offset-${4-wc}`);
                    } else {
                        cloud.classList.add(`offset-${wc}`);
                        pauvre.classList.remove(`offset-4`);
                        pauvre.classList.add(`offset-${4-wc}`);
                    }
                } else {
                    const bgs1=new Audio('./assets/badGuessSound.mp3');
                    bgs1.play();
                    if(pauvre.classList.contains(`offset-3`)){
                        pauvre.classList.remove(`offset-3`);
                        pauvre.classList.add(`offset-${Math.abs(wc-3)}`);
                        cloud.classList.remove(`offset-1`);
                        cloud.classList.add(`offset-${wc+1}`);
                    } else{
                        cloud.classList.remove(`offset-${wc}`);
                        cloud.classList.add(`offset-${wc+1}`);
                        pauvre.classList.remove(`offset-${wc}`);
                        pauvre.classList.add(`offset-${wc-1}`);
                    };
                };
            };
            document.getElementById('guessBox').value="";
            gb.focus;
            if(gameOver==true){
                if(document.getElementById('muzakOff').style.display==='block'){
                    noMusic();
                };
                document.getElementById('gameOver').style.display="block";
                document.getElementById('guessButton').style.display="none";
                if(win===false){
                    document.getElementById("cage").style.backgroundImage=`url(${saveable})`;
                    document.getElementById("gameFin").style.display="block";
                    document.getElementById('showWord').textContent=getWord;
                    pauvre.style.visibility="hidden";
                    let ls=new Audio('./assets/loseSound.mp3');
                    ls.play();
                } else if(win===true){
                    ggs.pause();
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
