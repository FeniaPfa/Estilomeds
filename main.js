const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-list");


hamburger.addEventListener("click",() =>{
    navUl.classList.toggle("open");
    hamburger.classList.toggle("open");
} )

navUl.addEventListener("click",() =>{
    navUl.classList.remove("open");
    hamburger.classList.remove("open");
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}