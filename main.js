window.onscroll=function(){
    changeColor()
}
function changeColor(){
    if(document.documentElement.scrollTop>5){
        document.getElementById("head").style.backgroundColor="purple";
    }
    else{document.getElementById("head").style.backgroundColor="transparent"}
}
let menu=document.getElementById("nav-icon")
menu.addEventListener("click",kiki)
function kiki(){
    let x=document.getElementById("minimenu")
    x.style.display="block"
    if (display="block") {
        (display="none")
    }
    if (display="none") {
        (display="block")
    }
}