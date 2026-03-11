let body=document.getElementsByTagName("body")[0];
let night=document.getElementById("nightbtn")
let login=document.getElementById("loginbtn")
let signup=document.getElementById("registerbtn")
let ar=document.getElementById("arbtn")
let  b=document.querySelectorAll("b");
let swi=document.getElementById("swi");
let par=document.getElementById("par")

night.addEventListener("click",function(){
    swi.style.color="white"
    par.style.color="white"
    body.style.backgroundColor="#0f172a"
    b.forEach(function (el) {
        el.style.color="white";
    })
   
})

login.addEventListener("click",function(){
    window.location.href="/signin/signin.html"
})

signup.addEventListener("click",function(){
    window.location.href="/signup/signup.html"
})