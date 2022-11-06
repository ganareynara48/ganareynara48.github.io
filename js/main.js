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

$('#txt_branding').click(function (e) { 
  e.preventDefault();
  $('#branding').trigger('click');
});

$('#txt_socmed').click(function (e) { 
  e.preventDefault();
  $('#social_media').trigger('click');
});

$('#txt_digmar').click(function (e) { 
  e.preventDefault();
  $('#digital_marketing').trigger('click');
});

$('#txt_other').click(function (e) { 
  e.preventDefault();
  $('#others').trigger('click');
});

$("#submit_email").click(function (e) { 
  e.preventDefault();
  
  var name    = $("#name").val();
  var email   = $("#email").val();
  var phone   = $("#phone").val();
  var help    = $("#help").val();

  var branding          = "";
  var social_media      = "";
  var digital_marketing = "";
  var others            = "";

  if ($('#branding').is(':checked')) {
    branding = $("#branding").val();
  } else if ($('#social_media').is(':checked')) {
    social_media = $("#social_media").val();
  } else if ($('#digital_marketing').is(':checked')) {
    digital_marketing = $("#digital_marketing").val();
  } else if ($('#others').is(':checked')) {
    others = $("#others").val();
  }

  var postData = {
    name:name,
    email:email,
    phone:phone,
    help:help,

    branding:branding,
    social_media:social_media,
    digital_marketing:digital_marketing,
    others:others,
  }

  $.ajax({
    
    type: "post",
    url: "/sendMail.php",
    data: postData,
    dataType: "json",
    success: function (response) {
      if (response.statusCode==200) {
        alert("OKE !");
      } else {
        alert("Error occured !");
      }
    }

  });

});