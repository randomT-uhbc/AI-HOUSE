let body=document.getElementById("body")
let night=document.getElementById("nightbtn")
let login=document.getElementById("loginbtn")
let signup=document.getElementById("registerbtn")
let ar=document.getElementById("arbtn")
let just=document.getElementById("just")
let pro=document.getElementById("projects")

night.addEventListener("click",function(){
    body.style.backgroundColor="#0f172a";
    pro.style.backgroundColor="#f8f8f8";
    just.style.color="black"
})

login.addEventListener("click",function(){
    window.location.href="/signin/signin.html"
})

signup.addEventListener("click",function(){
    window.location.href="/signup/signup.html"
})