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