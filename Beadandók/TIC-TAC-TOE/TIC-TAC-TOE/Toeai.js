/* Mit kell figyelembe venni?
    1. ha nyerhet a lépésével azt érzékelje és nyerjen
    2. ha nem nyerhet de az ellenfele igen akkor érzékelje és akadályozza meg
    3. ha egyik sem történik meg akkor random helyet válasszon
*/

var _x=0; 
var o=0;
function Start() 
{
    resetGame();

    let fields=document.querySelectorAll(".place")
    for(let i=0 ; i<fields.length;i++){
        if(i<3) fields[i].style.borderTop="none"
        if(i==0 || i==3 || i==6) fields[i].style.borderLeft="none"
        if(i==2 || i==5 || i==8){
            fields[i].style.borderRight="none"
            fields[i].style.borderLeft="none"
        } 
        if(i>5){
            fields[i].style.borderBottom="none"
            fields[i].style.borderTop="none"
        } 
 
    }


    var play=document.getElementById("play");
    play.onclick=function(){
        resetGame();
        play.style.display="none";
        document.getElementById("result").innerHTML="";
    }


    var places = document.getElementsByClassName("place");
    console.log(places.length)
    for (let i = 0; i < places.length; i++) {
        places[i].addEventListener("click", function (event) {
            if (event.target.innerHTML === '' && kor === "O") {
                event.target.innerHTML = kor;
                event.target.style.color = "blue";
                table[event.target.id - 1] = kor;
                jatszott++;
                if (toCheck()) return; 
                kor = "X"; 
                console.log(kor)
                setTimeout(AIPlay, 500); // Nem akartam hogy olyan csúnya legyen szával váratom fél másodpercig így nem olyan gyors
            }
        });
    }


    var ai = document.getElementById("AI");
    let kek=true
    ai.onclick=function(){
    let pont=document.getElementById("switch").classList.toggle("AION")
    if(!kek) 
    {
        ai.style.background="#2196F3"
        kek=true
      
    }
    else{
        ai.style.background="lightgray"
        kek=false
        setTimeout(function(){
            window.location.href="tictactoe.html"  
        },500)
    }
    
}

}

// Átalakítottam azt amit a simában csináltunk és ezzel érzékelem hogy nyert-e valaki mert ha nem akkor jöhet az ai köre
function toCheck() {
    // Sorok
    for (let i = 0; i < 9; i += 3) {
        if (table[i] === kor && table[i + 1] === kor && table[i + 2] === kor) {
            play.style.display="grid";
            addScore();
            
            return true;
        }
    }

    // Oszlopok
    for (let i = 0; i < 3; i++) {
        if (table[i] === kor && table[i + 3] === kor && table[i + 6] === kor) {
            play.style.display="grid";
            addScore();
            

            return true;
        }
    }

    // Átlók
    if (table[0] === kor && table[4] === kor && table[8] === kor) {
        play.style.display="grid";
        addScore();
    
        return true;
    }
    if (table[2] === kor && table[4] === kor && table[6] === kor) {
        play.style.display="grid";
        addScore();

        return true;
    }
    // Döntetlen
    if (jatszott === 9) {
        play.style.display="grid";
        document.getElementById("result").innerHTML="Döntetlen";
        return true;
    }
    return false;
}




// AI lépése
function AIPlay() {
    let move = bestMove();
    let aiPlace = document.getElementById((move + 1).toString());
    aiPlace.innerHTML = kor;
    aiPlace.style.color = "red";
    table[move] = kor;
    jatszott++;
    if (toCheck()) return;
    kor = "O"; // Ha nem nyert akkor a játékosé a sor hogy lépjen
    
}

// Itt dönti el a fentiek alapján és sorrendjében hogy mit csináljon
function bestMove() {
    // 1. Ha tud akkor nyerjen
    for (let i = 0; i < 9; i++) {
        if (table[i] === '') {
            table[i] = kor;
            if (checkWin(kor)) {
                table[i] = '';
                return i;
            }
            table[i] = '';
        }
    }



    // 2. Akadályozza meg ha az ellenfele nyerne

    let ellenfel="O";
    if(kor==="O") ellenfel="X";
    else ellenfel="O";

    for (let i = 0; i < 9; i++) {
        if (table[i] === '') {
            table[i] = ellenfel;
            if (checkWin(ellenfel)) {
                table[i] = ''; 
                return i;
            }
            table[i] = ''; 
        }
    }


    // 3. Véletlenszerűen választ üres helyet
    let uresmeg = [];
    for (let i = 0; i < 9; i++) {
        if (table[i] === '') {
            uresmeg.push(i);
        }
    }
    return uresmeg[Math.floor(Math.random() * uresmeg.length)];
}

// Itt ellenőrizzük hogy nyert-e a lépéssel (amikor a megakadályozásnál csináljuk akkor ugye felveszi az ellenfél 'értékét' a függvény és azzal nézi hogy hol nyerhet a másik és ezzel megjegyzi azt az indexet és oda teszi a bábuját vagymilyét)
function checkWin(jatekos) {
    for (let i = 0; i < 9; i += 3) {
        if (table[i] === jatekos && table[i + 1] === jatekos && table[i + 2] === jatekos) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (table[i] === jatekos && table[i + 3] === jatekos && table[i + 6] === jatekos) {
            return true;
        }
    }
    if (table[0] === jatekos && table[4] === jatekos && table[8] === jatekos) {
        return true;
    }
    if (table[2] === jatekos && table[4] === jatekos && table[6] === jatekos) {
        return true;
    }
    return false;
}

function resetGame() {
    table = ['', '', '', '', '', '', '', '', ''];
    jatszott = 0;
    kor = "O"; 
    var places = document.getElementsByClassName("place");
    for (let i = 0; i < places.length; i++) {
        places[i].innerHTML = '';
        places[i].style.color = '';
    }
}



function addScore(){
    //Eredmény kihírdetése
    var res = document.getElementById("result")
    if(kor=="O"){
        o++;
        res.innerText="O nyert!";
        res.style.color="blue";
    } 
    else{
        _x++;
        res.innerText="X nyert!";
        res.style.color="#FB4264";
    } 
    let kk=document.getElementById("kor");
    let xx=document.getElementById("x");
    kk.innerText=o
    xx.innerText=_x
}