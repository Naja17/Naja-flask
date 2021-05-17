// $(function() {
//   $('.toggleNav').on('click',function() {
//     $('.flex-nav ul').toggleClass('open');
//   });
// });

var toglNav = document.querySelector(".flex-nav .toggleNav");
var flexNavUl = document.querySelector(".flex-nav ul");
toglNav.addEventListener("click", function(){
    flexNavUl.classList.toggle('open');
});

var signInLink = document.querySelector(".flex-nav .sj");
var signInSection = document.querySelector("section.signin");
var topHeader = document.querySelector(".top")
signInLink.addEventListener("click", function()
{
    signInSection.classList.toggle('active');
    if (signInSection.style.display === "flex") 
    {
        signInSection.style.display = "none";
        topHeader.style.display = "flex";
    } 
    else 
    {
        signInSection.style.display = "flex";
        topHeader.style.display = "none";
    }
});

