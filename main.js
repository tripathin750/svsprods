const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
})

const scrollRevealOption = {
    distance:"50px",
    origin: "bottom",
    duration: 1000,    
};

ScrollReveal().reveal(".about__container .section__header",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description",{
    ...scrollRevealOption,
    delay:500,
    interval:500,
});
ScrollReveal().reveal(".about__container img",{
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".service__container .service__header",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".service__container .service__description",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__card",{
    duration: 1000,
    delay:1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const instagram = document.querySelector(".instagram__flex")

Array.from(instagram.children).forEach(item => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("arai-hidden",true);
    instagram.appendChild(duplicateNode);
});


