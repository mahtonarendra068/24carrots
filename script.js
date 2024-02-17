const menu_ = document.querySelector('.menu-');
const menuIcon = document.getElementById('menu-icon');

const cut= document.getElementById('cut');

menuIcon.addEventListener('click' ,() =>{
    menu_.classList.add('showslide');
    cut.classList.add('show');
    menuIcon.classList.add('hide');
})
cut.addEventListener('click' , () =>{
    menu_.classList.add('close');
    menuIcon.classList.add('showw');
    cut.classList.add('delete')
})



const About = document.getElementById('about');
const E_vent= document.getElementById('event');
const service = document.getElementById('service');
const aboutPage= document.querySelector('.about');
const eventPage= document.querySelector('.event');
const servicePage= document.querySelector('.service');

About.addEventListener("mouseover", function() {
    aboutPage.classList.add('showabout');
})
E_vent.addEventListener("mouseover", () =>{
    eventPage.classList.add('start');
} )
service.addEventListener("mouseover", () =>{
    servicePage.classList.add('show');
} )
