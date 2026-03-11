let body=document.getElementsByTagName("body")[0];
let night=document.getElementById("nightbtn")
let login=document.getElementById("loginbtn")
let signup=document.getElementById("registerbtn")
let ar=document.getElementById("arbtn")
let title=document.getElementById("title")
let main=document.getElementById("main")

night.addEventListener("click",function(){
    main.style.backgroundColor="#f8f8f8"
    body.style.backgroundColor="#0f172a"
    title.style.color="#00000"
})

login.addEventListener("click",function(){
    window.location.href="/signin/signin.html"
})

signup.addEventListener("click",function(){
    window.location.href="/signup/signup.html"
})