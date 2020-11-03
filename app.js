const leftImg = document.querySelector(`.left`);
const rightEdu = document.querySelector(`.right`);
const aboutUs = document.querySelector(`.about-us`);
const skills = document.querySelector(`.skills-section`);
const bars = document.querySelector(`.bars`);
const portfolio = document.querySelector(`.images`);

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

window.addEventListener('scroll', onScroll);
