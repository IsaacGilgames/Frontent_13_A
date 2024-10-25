var nums = document.querySelectorAll('.num')
var vegleges = document.getElementById('vegleges')
var muvelet = document.getElementById('muv')
var operators = document.querySelectorAll('.operator')
const szamok = '0123456789'
const ops = '+/*-'
vegleges.innerHTML = ''


for(let i=0; i<nums.length; i++){
    nums[i].addEventListener('click', () => {
        if(!(vegleges.innerHTML.endsWith('PI') || muvelet.innerHTML.endsWith('PI'))){
            if (vegleges.innerHTML === '0') {
                vegleges.innerHTML = ''; 
            }
                vegleges.innerHTML += nums[i].innerHTML
            
            
        }
        
    })
}

for(let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', () => {
        let sor = muvelet.innerHTML
        if(vegleges.innerHTML!='' && !vegleges.innerHTML.endsWith('.')){
            muvelet.innerHTML += vegleges.innerHTML + operators[i].innerHTML
            vegleges.innerHTML = ''
        }
    })
}


function equal(){
    muvelet.innerHTML += vegleges.innerHTML
    vegleges.innerHTML = ''
    muvelet.innerHTML = muvelet.innerHTML.replace('PI',Math.PI)
    muvelet.innerHTML = muvelet.innerHTML.replace('MOD','%')
    vegleges.innerHTML = eval(muvelet.innerHTML)    
    muvelet.innerHTML = ''
}

function c(){
    muvelet.innerHTML = ''
    vegleges. innerHTML = ''
}
function pi(){
    let v = vegleges.innerHTML
    let m = muvelet.innerHTML
    if(!(v.endsWith('PI') || m.endsWith('PI') || szamok.includes(v[v.length-1]) || szamok.includes(m[m.length-1])) && !v.endsWith('.')){
        vegleges.innerHTML += 'PI'
    }
}

function fakt(){
    let n = parseInt(vegleges.innerHTML)
    let v = n

    if(n<0){
        vegleges.innerHTML = -1
        return
    } else if(n === 0 || n === 1){
        vegleges.innerHTML = 1
        return
    }

    while(n > 1){
        n--
        v = v * n
    }
    vegleges.innerHTML = v
}

function pow(){
    let n = parseInt(vegleges.innerHTML)
    vegleges.innerHTML = n*n
}
function sqrt(){
    let n = parseInt(vegleges.innerHTML)
    vegleges.innerHTML = Math.sqrt(n)
}
function abs(){
    let n = parseInt(vegleges.innerHTML)
    vegleges.innerHTML = Math.abs(n)
}

function pm(){
    if(vegleges.innerHTML != ''){
        let n = parseInt(vegleges.innerHTML)
        vegleges.innerHTML = n*-1
    }

}

function vesszo() {
 
    if (!vegleges.innerHTML.includes('.')) {
        if (vegleges.innerHTML == '') {
            vegleges.innerHTML = '0.';
        } else {
            vegleges.innerHTML += '.';
        }
    }
}

function nulla() {
    
    if (vegleges.innerHTML !== '0') {
        vegleges.innerHTML += '0';
    }
}