const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () =>{
    document.body.classList.toggle("nav-open");
})



    for(let i = 0; i < navLinks.length; i++){
       navLinks[i].addEventListener("click", () =>{
           document.body.classList.remove("nav-open")
       })
    }
