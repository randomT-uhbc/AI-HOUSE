let nightBtn = document.getElementById("nightbtn");
let login=document.getElementById("loginbtn")
let signup=document.getElementById("registerbtn")
let ar=document.getElementById("arbtn")
let body = document.body;


nightBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
});

login.addEventListener("click",function(){
    window.location.href="/signin/signin.html"
})

signup.addEventListener("click",function(){
    window.location.href="/signup/signup.html"
})