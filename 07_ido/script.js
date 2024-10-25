var ido

function start(){
    ido = document.getElementById("ido")
    frissit()
    setInterval(frissit,1000)
}

function frissit(){
    const i = new Date();
    const mp = i.getSeconds()
    const ora = i.getHours()
    const perc = i.getMinutes()
    ido.innerHTML = `${ora}:${perc < 10 ? "0" : ""}${perc}:${mp < 10 ? "0" : ""}${mp}`
    //AltGr + 7 = `
    //?:
}