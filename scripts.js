AOS.init();

const burgerLines = $('#burgerMenu .line')

$("#burgerMenu").on("click", function () {
    $("#burgerMenu").toggleClass("active");
    $(".navigation").toggleClass("is-active");
    $("#navMenu").toggleClass("white");
    for (var i = 0; i < 3; i++) {
        burgerLines[i].style.backgroundColor = "#323031";
    }
})

$("#works").on("click", function(){
    $(this).toggleClass("is-active")
})

new Splide( '.splide', {
    type: 'loop',
    perPage: 3,
    breakpoints: {
		640: {
			perPage: 1,
		},
  }
} ).mount();
