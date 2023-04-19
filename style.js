$('#hamberger').on("click" ,function(){
$('.child').css("display",'block')

})
$('#cross').on("click", function(){

    $('.child').css("display",'none')
})
$('.child').on("click", function(){

    $('.child').css("display",'none')
})
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    document.body.style.backgroundPositionY = offset * 0.4 + 'px';
});
 // Typed Initiate
 $(document).ready(function(){
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
  });
  AOS.init({
    duration: 1200,
  })


let titel = document.getElementById("titel")
let home =  document.getElementById("home_btn")
let project_btn =  document.getElementById("project_btn")
let eduaction_btn =  document.getElementById("eduaction_btn")
let about_btn =  document.getElementById("about_btn")
let contact_btn =  document.getElementById("contact_btn")

let titel1 = document.getElementById("titel1")
let home1 =  document.getElementById("home_btn1")
let project_btn1 =  document.getElementById("project_btn1")
let eduaction_btn1 =  document.getElementById("eduaction_btn1")
let about_btn1 =  document.getElementById("about_btn1")
let contact_btn1 =  document.getElementById("contact_btn1")

home.addEventListener("click", function(){
    titel.textContent =("Portfolio | home");
})
project_btn.addEventListener("click", function(){
    titel.textContent =("Portfolio | Project");
})
eduaction_btn.addEventListener("click", function(){
    titel.textContent =("Portfolio | Education");
})
about_btn.addEventListener("click", function(){
    titel.textContent =("Portfolio | About");
})
contact_btn.addEventListener("click", function(){
    titel.textContent =("Portfolio | Contact");
    contact_btn.classList.add("active")
})

home1.addEventListener("click", function(){
    titel.textContent =("Portfolio | home");
})
project_btn1.addEventListener("click", function(){
    titel.textContent =("Portfolio | Project");
})
eduaction_btn1.addEventListener("click", function(){
    titel.textContent =("Portfolio | Education");
})
about_btn1.addEventListener("click", function(){
    titel.textContent =("Portfolio | About");
})
contact_btn1.addEventListener("click", function(){
    titel.textContent =("Portfolio | Contact");
    contact_btn.classList.add("active")
})



// if (element.id === "home_btn") {
//     titel.textContent =("home");
//   } else if (element.id === "project_btn") {
//     titel.textContent =("project");
//   } else if (element.id === "eduaction_btn") {
//     titel.textContent =("education");
//   } else if (element.id === "about_btn") {
//     titel.textContent =("about");
//   } else if (element.id === "contact_btn") {
//     titel.textContent =("contact");
//   }

