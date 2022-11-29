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

// $(window).scroll(function () {
//   var sticky = $("#header"),
//     scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass("fixed");
//   else sticky.removeClass("fixed");
// });

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

  var favorite = [];
  $.each($("input[name='services']:checked"), function(){
      favorite.push($(this).val());
  });

  var services = favorite.join(", ");

  var postData = {
    name:name,
    email:email,
    phone:phone,
    help:help,
    services:services
  }

  $.ajax({
    
    type: "post",
    url: "/sendMail.php",
    data: postData,
    dataType: "json",
    success: function (response) {
      if (response.statusCode==200) {
        alert("Email was send~");
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#help").val("");

        $("#branding").prop("checked", false);
        $("#social_media").prop("checked", false);
        $("#digital_marketing").prop("checked", false);
        $("#others").prop("checked", false);

      } else {
        alert("Email wasn't send~");
      }
    }

  });

});

function slideDown() {
  $( "#animHalaman2" ).addClass( "slide-down" );
  $( "#landingpage" ).removeClass( "css-typing" );
}

function toHalaman1 () { 
  $( "#landingpage" ).addClass( "css-typing" );

  $( "#animHalaman2" ).removeClass( "slide-down" );
}

function toHalaman2 () { 
  $( "#animHalaman3a" ).removeClass( "slide-right" );

  $( "#animHalaman2" ).addClass( "slide-down" );
}

function toHalaman3 () { 
  $( "#animHalaman2" ).removeClass( "slide-down" );
  $( "#animHalaman4a" ).removeClass( "slide-up" );
  $( "#animHalaman4b" ).removeClass( "slide-down" );

  $( "#animHalaman3a" ).addClass( "slide-right" );
}

function toHalaman4 () { 
  $( "#animHalaman3a" ).removeClass( "slide-right" );

  $( "#animHalaman4a" ).addClass( "slide-up" );
  $( "#animHalaman4b" ).addClass( "slide-down" );
}