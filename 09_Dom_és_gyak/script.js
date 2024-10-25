let oszlop = document.createElement("div")
oszlop.setAttribute("id", "oszlop")


for(let i = 1; i <= 10; i++){
    let gomb = document.createElement("button")
    gomb.setAttribute("class", "btn")
    let text = "btn_"
    if(i < 10){
        text+="0";
    }
    text+=i.toString();
    gomb.setAttribute("id", text)
    gomb.innerHTML=text
    oszlop.appendChild(gomb)
    

}

document.body.appendChild(oszlop)

let gombok = document.querySelectorAll(".btn")
//gombok.forEach(gomb => console.dir(gomb))
console.log(gombok)

gombok.forEach(gomb => {
    gomb.onclick = function(){
        console.log(gomb.id);
    }
})

