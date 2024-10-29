const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// image hover effect 

let elementCon = document.querySelector(".element-container");
let fixed = document.querySelector(".fixed-image");

function imageHoverEffect(){
    elementCon.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    
    elementCon.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });
    
    let elems = document.querySelectorAll(".element");
    elems.forEach(function(element) {
        element.addEventListener("mouseenter", function () {
            let image = element.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}


// page4 effect 

let heading1 = document.querySelector(".border-left #heading1");
let heading2 = document.querySelector(".border-left #heading2");
let heading3 = document.querySelector(".border-left #heading3");
let image = document.querySelector(".right .hero-image");
let para = document.querySelector(".section1 .para");

heading1.classList.add("headingEffect");

function page4Effect(){
    heading2.addEventListener("click", function() {
        heading2.style.color = "white";
        heading2.classList.add("headingEffect");
    
        heading1.classList.remove("headingEffect");
        heading1.style.color = "#808080";
    
        heading3.classList.remove("headingEffect");
        heading3.style.color = "#808080";
    
        para.innerText = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    
        let imageUrl = "https://sundown-ivory.vercel.app/page4-2.webp";
        image.style.backgroundImage = `url(${imageUrl})`;
    });
    
    heading1.addEventListener("click", function() {
        heading1.style.color = "white";
        heading1.classList.add("headingEffect");
    
        heading2.classList.remove("headingEffect");
        heading2.style.color = "#808080";
    
        heading3.classList.remove("headingEffect");
        heading3.style.color = "#808080";
    
        let imageUrl = "https://sundown-ivory.vercel.app/page4-1.webp";
        image.style.backgroundImage = `url(${imageUrl})`;
    
        para.innerText = "Our team is work with our clients to refine an idea and concept into a executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end- to-end design solutions from concept, design, and architectural drawing to 3D renderings.";
        
    });
    
    heading3.addEventListener("click", function() {
        heading3.style.color = "white";
        heading3.classList.add("headingEffect");
    
        heading1.classList.remove("headingEffect");
        heading1.style.color = "#808080";
    
        heading2.classList.remove("headingEffect");
        heading2.style.color = "#808080";
    
        let imageUrl = "https://sundown-ivory.vercel.app/page4-3.webp";
        image.style.backgroundImage = `url(${imageUrl})`;
    
        para.innerText = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    });
}

// swiper

function swiperAnimation(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

// menu button

let menu = document.querySelector("nav .menu-container");
let fullScreen = document.querySelector(".full-screen");
let navImg = document.querySelector("nav img");
let flag = 0;
function menuEffect() {
    menu.addEventListener("click", function () {
        if(flag == 0){
            fullScreen.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1;
        } else{
            fullScreen.style.top = "-100vh";
            navImg.style.opacity = 1;
            flag = 0;
        }
    })
}

// loader

let loader = document.querySelector(".loader")
setTimeout(() => {
        loader.style.top = "-100%";
    }, 4200);

imageHoverEffect();
page4Effect();
swiperAnimation();
menuEffect();



