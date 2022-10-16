const addEventOnElem = function(elem, type , callback){
    if(elem.lenght > 1) {
        for( let i = 0 ; i< elem.lenght ; i++){
            elem[1].addEventListener(type ,callback);
        }
    }else{
        elem.addEventListener(type ,callback)
    }
}

const navToggler = document.querySelector("[data-nav-toggler]");
const navBar = document.querySelector("[data-navbar]");
const navBarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavBar = function(){
    navBar.classList.toggle("active");
    navToggler.classList.toggle('active');
}

addEventOnElem(navToggler , "click" , toggleNavBar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
  
  addEventOnElem(navbarLinks, "click", closeNavbar);

  const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
