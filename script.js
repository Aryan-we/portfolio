
function fun(){
    var a=document.getElementById("hide");
    if(a.style.right=="20px"){
        a.style.right="-60%";
        a.style.transition="2s";
    }else{
    a.style.right="20px";
    a.style.transition="2s";
    }
    
}
function hid(){
    var a=document.getElementById("hide");
    a.style.right="-60%";
    a.style.transition="2s";
}
