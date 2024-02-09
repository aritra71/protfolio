/*typing animation*/
var typed = new Typed(".typing",{
    strings:["","Software Developer","Tech Enthusiast"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()=>
{
    asideSelectionTogglerBtn();
})
function asideSelectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}