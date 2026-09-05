/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

  "use strict";

  /* Preloader
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 1500);

  /* Tooltip
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


  /* Mouseover
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass('overlay');
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass('overlay');
    });
  });

  /* Toggle sidebar
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });
  });

  /* Product slider 
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $('#blogCarousel').carousel({
    interval: 5000
  });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


/* Animate js*/

(function ($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
    .find(".carousel-item:first")
    .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* collapse js*/

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});

/* select flag js */

function onChangeCallback(ctr) {
  console.log("The country was changed: " + ctr);
  //$("#selectionSpan").text(ctr);
}

$(document).ready(function () {
  $(".niceCountryInputSelector").each(function (i, e) {
    new NiceCountryInput(e).init();
  });
});


// owl-carousel
var staffCarousel = $('.staff-grid.owl-carousel');

var openingOffer = document.getElementById('opening-offer');
var openingOfferImage = document.getElementById('opening-offer-image');
var openingOfferTitle = document.getElementById('opening-offer-title');
var openingOfferDescription = document.getElementById('opening-offer-description');
var openingOfferTimer = document.getElementById('opening-offer-timer');
var openingOfferIndex = 0;
var openingOfferSeconds = 2 * 60 * 60;
var openingOfferSlides = [
  { image: 'images/popup_offer-1_moroccan_bath_deira_dubai.png', title: 'Refresh your routine', description: 'Unwind with a traditional Moroccan bath and attentive spa care.' },
  { image: 'images/popup_offer-2_jacuzzi_bath_deira_dubai.png', title: 'Settle into comfort', description: 'Relax with a soothing Jacuzzi bath experience at our Deira spa.' },
  { image: 'images/popup_offer-3_full_body_massage_dubai.png', title: 'Relax from head to toe', description: 'Enjoy a restorative full body massage at Health Land Spa in Dubai.' }
];

function updateOpeningOfferSlide(index) {
  openingOfferIndex = (index + openingOfferSlides.length) % openingOfferSlides.length;
  var slide = openingOfferSlides[openingOfferIndex];
  openingOfferImage.src = slide.image;
  openingOfferImage.alt = slide.title + ' at Health Land Spa';
  openingOfferTitle.textContent = slide.title;
  openingOfferDescription.textContent = slide.description;
}

function updateOpeningOfferTimer() {
  var hours = Math.floor(openingOfferSeconds / 3600);
  var minutes = Math.floor((openingOfferSeconds % 3600) / 60);
  var seconds = openingOfferSeconds % 60;
  openingOfferTimer.textContent = [hours, minutes, seconds].map(function (value) {
    return String(value).padStart(2, '0');
  }).join(':');
  if (openingOfferSeconds > 0) openingOfferSeconds -= 1;
}

function closeOpeningOffer() {
  openingOffer.classList.remove('is-open');
  openingOffer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('opening-offer-open');
}

if (openingOffer) {
  document.querySelectorAll('[data-offer-close]').forEach(function (element) {
    element.addEventListener('click', closeOpeningOffer);
  });
  document.querySelector('.opening-offer-prev').addEventListener('click', function () {
    updateOpeningOfferSlide(openingOfferIndex - 1);
  });
  document.querySelector('.opening-offer-next').addEventListener('click', function () {
    updateOpeningOfferSlide(openingOfferIndex + 1);
  });
  updateOpeningOfferTimer();
  window.setInterval(updateOpeningOfferTimer, 1000);
  window.setInterval(function () {
    if (openingOffer.classList.contains('is-open')) {
      updateOpeningOfferSlide(openingOfferIndex + 1);
    }
  }, 4500);
  window.setTimeout(function () {
    openingOffer.classList.add('is-open');
    openingOffer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('opening-offer-open');
  }, 700);
}

staffCarousel.owlCarousel({
  loop: true,
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: false,
  autoplayTimeout: 4200,
  autoplaySpeed: 2400,
  smartSpeed: 2400,
  fluidSpeed: true,
  nav: true,
  dots: false,
  rtl: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
})

var staffLightbox = $('#staff-lightbox');
var staffLightboxImage = $('#staff-lightbox-image');
var staffProfiles = [];
var staffLightboxIndex = 0;

staffCarousel.find('.staff-card').each(function () {
  var card = $(this);
  var image = card.find('img')[0];
  var imageSource = image.getAttribute('src');
  if (!staffProfiles.some(function (profile) { return profile.imageSource === imageSource; })) {
    staffProfiles.push({
      imageSource: imageSource,
      imageAlt: image.getAttribute('alt'),
      role: card.find('.staff-role').text(),
      name: card.find('h3').text(),
      nationality: card.find('.staff-nationality').text(),
      rating: card.find('.staff-rating').html(),
      ratingLabel: card.find('.staff-rating').attr('aria-label')
    });
  }
});

function showStaffProfile(index) {
  staffLightboxIndex = (index + staffProfiles.length) % staffProfiles.length;
  var profile = staffProfiles[staffLightboxIndex];
  staffLightboxImage.attr('src', profile.imageSource).attr('alt', profile.imageAlt);
  $('#staff-lightbox-role').text(profile.role);
  $('#staff-lightbox-name').text(profile.name);
  $('#staff-lightbox-nationality').text(profile.nationality);
  $('#staff-lightbox-rating').html(profile.rating).attr('aria-label', profile.ratingLabel);
}

function closeStaffLightbox() {
  staffLightbox.removeClass('is-open').attr('aria-hidden', 'true');
  $('body').removeClass('staff-lightbox-open');
  staffCarousel.trigger('play.owl.autoplay');
}

staffCarousel.on('click', '.staff-card', function (event) {
  if ($(event.target).closest('a, button').length) return;
  var imageSource = $(this).find('img').attr('src');
  var profileIndex = staffProfiles.findIndex(function (profile) { return profile.imageSource === imageSource; });
  if (profileIndex < 0) return;
  showStaffProfile(profileIndex);
  staffCarousel.trigger('stop.owl.autoplay');
  staffLightbox.addClass('is-open').attr('aria-hidden', 'false');
  $('body').addClass('staff-lightbox-open');
});

$('.staff-lightbox-prev').on('click', function () { showStaffProfile(staffLightboxIndex - 1); });
$('.staff-lightbox-next').on('click', function () { showStaffProfile(staffLightboxIndex + 1); });
$('[data-staff-close]').on('click', closeStaffLightbox);
$(document).on('keydown', function (event) {
  if (!staffLightbox.hasClass('is-open')) return;
  if (event.key === 'Escape') closeStaffLightbox();
  if (event.key === 'ArrowLeft') showStaffProfile(staffLightboxIndex - 1);
  if (event.key === 'ArrowRight') showStaffProfile(staffLightboxIndex + 1);
});


// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}




/* date_picker js */

$(function () {
  $("#my_date_picker").datepicker({
    defaultDate: "09/22/2019"
  });
});