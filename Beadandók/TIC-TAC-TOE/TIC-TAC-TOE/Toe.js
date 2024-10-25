resetGame();

//Ki mennyit nyert
var _x=0; 
var o=0;

var ai = document.getElementById("AI");
let kek=false




ai.onclick=function(){
    let pont=document.getElementById("switch").classList.toggle("AION")
    if(!kek) 
    {
        
        ai.style.background="#2196F3"
        kek=true
        document.querySelector(".link")
        setTimeout(function(){
            window.location.href="tictactoeai.html"  
        },500)
        
        
    }
    else{
        ai.style.background="lightgray"
        kek=false
        document.querySelector(".link")
        setTimeout(function(){
            window.location.href="tictactoe.html"  
        },500)

    }
    
}

function Start() {

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
    }
    var places = document.getElementsByClassName("place");
    for (let i = 0; i < places.length; i++) {
        places[i].addEventListener("click", function (event) {
            if (event.target.innerHTML === '') {
                event.target.innerHTML = kor;

                // Szín beállítása
                if (kor === "O") {
                    event.target.style.color = "blue";
                } else {
                    event.target.style.color = "red";
                }

                table[event.target.id - 1] = kor; 
                jatszott++;
                toCheck(); 
                
                if(kor==="O") kor="X";
                else kor="O";

            }
        });
    }
}



function toCheck() {
    // Sorok
    for (let i = 0; i < 9; i += 3) {
        if (table[i] === kor && table[i + 1] === kor && table[i + 2] === kor) {
            play.style.display="grid";
            addScore();
            return;
        }
    }


    // Oszlopok
    for (let i = 0; i < 3; i++) {
        if (table[i] === kor && table[i + 3] === kor && table[i + 6] === kor) {
            play.style.display="grid";
            addScore();
            return;
        }
    }



    // Átlók
    if (table[0] === kor && table[4] === kor && table[8] === kor) {
        play.style.display="grid";
        addScore();
        return;
    }
    if (table[2] === kor && table[4] === kor && table[6] === kor) {
        play.style.display="grid";
        addScore();
        return;
    }




    // Vége, döntetlenneé
    if (jatszott === 9) {
        play.style.display="grid";
        document.getElementById("result").innerText="Döntetlen"
    }
}

function resetGame() {
    table = ['', '', '', '', '', '', '', '', ''];
    jatszott = 0;
    kor = "O";
    var places = document.getElementsByClassName("place");
    for (let i = 0; i < places.length; i++) {
        places[i].innerHTML = ''; 
        places[i].style.color = ''; // Szín alaphelyzetbe állítása
    }

    document.getElementById("result").innerHTML="";
    
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
