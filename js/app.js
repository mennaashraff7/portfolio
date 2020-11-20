/*********************elements*******************************/
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
const menuElements = document.querySelectorAll(`.menu ul a`);
const contact = document.querySelector(`.footer`);

/***********looping over navbar links*************/
for (const link of menuElements) {
  link.addEventListener("click", clickHandler);
}
/*********** event for scroll to section on click *************/
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
/*********** function to handle smooth content sliding **********/
function onScroll(){
   var aboutUsPosition = aboutUs.getBoundingClientRect().top;
   var skillsPosition = skills.getBoundingClientRect().top;
   var screen = window.innerHeight/2;
   var portfolioPosition = portfolio.getBoundingClientRect().top;
   var contactPosition = contact.getBoundingClientRect().top;
    if(aboutUsPosition < screen){
        appear();
        for(menuElement of menuElements){
            if(menuElement.textContent == "about"){
           menuElement.classList.add("active_state");
        }else{
                  menuElement.classList.remove("active_state");
              }
        }
        aboutUs.classList.add("active");
        skills.classList.remove("active");
        portfolio.classList.remove("active");
        contact.classList.remove("active");
       }
    if(skillsPosition < screen){
        skillsAppear();
        for(menuElement of menuElements){
            if(menuElement.textContent == "skills"){
           menuElement.classList.add("active_state");
        }else{
                  menuElement.classList.remove("active_state");
              }
        }
        skills.classList.add("active");
        aboutUs.classList.remove("active");
        portfolio.classList.remove("active");
        contact.classList.remove("active");
       }
    if(portfolioPosition < screen){
        portfolioAppear();
        for(menuElement of menuElements){
            if(menuElement.textContent == "portfolio"){
           menuElement.classList.add("active_state");
        }else{
                  menuElement.classList.remove("active_state");
              }
        }
        portfolio.classList.add("active");
        aboutUs.classList.remove("active");
        skills.classList.remove("active");
        contact.classList.remove("active");
    }
    if(contactPosition < screen*2){
        for(menuElement of menuElements){
            if(menuElement.textContent == "contact"){
           menuElement.classList.add("active_state");
        }else{
                  menuElement.classList.remove("active_state");
              }
        }
        contact.classList.add("active");
        skills.classList.remove("active");
        portfolio.classList.remove("active");
        aboutUs.classList.remove("active");
    }
}
/*********** function to make about us section appear  **********/
function appear(){
     leftImg.classList.add('slide-right');
    rightEdu.classList.add('slide-left');
}
function skillsAppear(){
    bars.classList.add('slideUp');
}
/*********** function to make skills section appear  **********/
function portfolioAppear(){
    portfolio.classList.add('appear-img');
}
/*********** function to make portfolio section appear  **********/
function showMenu(){
    menu.classList.toggle('display');
    
}
/*********** function to handle mobile navbar  **********/
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
         for(menuElement of menuElements){
            if(menuElement.textContent == "home"){
           menuElement.classList.add("active_state");
        }else{
                  menuElement.classList.remove("active_state");
              }
        }
}
}
/***** function to change colors of navbar on scrolling  *******/

/***** event listener  *******/
menuBtn.addEventListener('click',showMenu);
window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', changeNavColor);
/*********************************************/

