(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var burgerMenu = function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);
      if ($("body").hasClass("menu-show")) {
        $("body").removeClass("menu-show");
        $("#colorlib-main-nav > .js-colorlib-nav-toggle").removeClass("show");
      } else {
        $("body").addClass("menu-show");
        setTimeout(function () {
          $("#colorlib-main-nav > .js-colorlib-nav-toggle").addClass("show");
        }, 900);
      }
    });
  };
  burgerMenu();
})(jQuery);

$(window).scroll(function () {
  var sticky = $("#header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

const sections		= document.querySelectorAll('section');
const windowHeight 	= window.innerHeight;
const navigation	= document.querySelector('.navigation');

function reset() {
	for (var i = 0; i < navigation.children.length; i++) {
		navigation.children[i].classList.remove('selected')
	}
}

window.addEventListener('scroll', function () {
	const scrollToTop = window.scrollY;
	sections.forEach(function (section, i) {  
		if (section.offsetTop < scrollToTop + windowHeight/2 && scrollToTop < section.offsetTop + windowHeight/2) {
			reset();
			navigation.children[i].classList.add('selected');
		}
	});
});

// smoothScroll.init();
