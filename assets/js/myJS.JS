$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".menu_item_link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});
/*button_menu_moblie*/
var menu_con = document.querySelector('.menu_reponsive');
var menu_cha = document.querySelector('.menu_to');

function OP_menu_MB() {
    menu_con.classList.toggle("active_menu");
}
window.addEventListener('click', function(e) {
    if (!menu_cha.contains(e.target) && menu_con.classList.contains("active_menu")) {
        // menu.classList.remove("active_menu");
        menu_con.classList.remove("active_menu")
    }
})

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}