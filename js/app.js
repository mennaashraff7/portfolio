const leftImg = document.querySelector(`.left`);
const rightEdu = document.querySelector(`.right`);
const aboutUs = document.querySelector(`.about-us`);
const skills = document.querySelector(`.skills-section`);
const bars = document.querySelector(`.bars`);
const portfolio = document.querySelector(`.images`);
const menu = document.querySelector(`.sideBar`);
const menuBtn = document.querySelector(`aside button`);
const nav = document.querySelector(`.nav`);
const logo = document.querySelector(`.logo`);
const content = document.querySelector(`.content`);
const menuElements = document.querySelectorAll(`.menu div a`);


function onScroll(){
   var aboutUsPosition = aboutUs.getBoundingClientRect().top;
   var skillsPosition = skills.getBoundingClientRect().top;
   var screen = window.innerHeight/2;
   var portfolioPosition = portfolio.getBoundingClientRect().top;
    if(aboutUsPosition < screen){
        appear();
       }
    if(skillsPosition < screen){
        skillsAppear();
       }
    if(portfolioPosition < screen){
        portfolioAppear();
    }
}

function appear(){
     leftImg.classList.add('slide-right');
    rightEdu.classList.add('slide-left');
}
function skillsAppear(){
    bars.classList.add('slideUp');
}
function portfolioAppear(){
    portfolio.classList.add('appear-img');
}
function showMenu(){
    menu.classList.toggle('display');
    
}
function changeNavColor(){
    nav.style.background = "white";
    nav.style.transition = "0.9s";
    nav.style.boxShadow=" 0px 0px 10px 0 grey";
    logo.style.color ="#001433";
    menuElements.forEach(element=>element.style.color="brown");
    
   var navPosition = nav.getBoundingClientRect().top;
   var contentPosition = content.getBoundingClientRect().top;
    
    if(navPosition===contentPosition){
        nav.style.background = "transparent";
        nav.style.transition = "0.9s";
        logo.style.color ="white";
        nav.style.boxShadow="none";
       menuElements.forEach(element=>element.style.color="white");
}
}

menuBtn.addEventListener('click',showMenu);
window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', changeNavColor);
