/*const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function( )
{
  let offset = window.pageYOffset; //value of how much the user has scrolled from the top
  console.log("Offset: " + offset);
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  console.log("Offset: " + offset);
})*/




const navSlide = () => {
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');



  menuBtn.addEventListener('click', () => {
    // Burger Animation
    if(!menuOpen) {
      menuBtn.classList.add('open');
      nav.classList.add('nav-active');
      menuOpen = true;
    }
    else {
      menuBtn.classList.remove('open');
      nav.classList.remove('nav-active');
      menuOpen= false;
    }

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
}

navSlide();
