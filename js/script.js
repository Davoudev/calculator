var resText = document.getElementById("res-text")
var falsi = false
var stop = false

function data(val) {
    if (resText.innerHTML != 0) {
        resText.innerHTML += val
    } else {
        resText.innerHTML = val
    }

    if(resText.textContent.length >21 && stop == false){
        resText.innerHTML = resText.innerHTML + "<br >"
         stop = true
    }
}

function ac() {
    resText.innerHTML = "0"  
      falsi = false

}

function acc() {
    resText.innerHTML = resText.innerHTML.slice(0, -1)
    let lastDigit = resText.innerHTML.slice(resText.innerHTML.length -1)
    if(lastDigit == "."){
        falsi = false 
    }
}
function PM(){
     resText.innerHTML = resText.innerHTML  * -1 
}

function equal() {
    resText.innerHTML = eval(resText.innerHTML)
}

function simi() {
    if (falsi == false) {
        resText.innerHTML += "."
        falsi = true
    }
}

/* Listeners */
document.getElementById('equal').addEventListener('click', equal)
