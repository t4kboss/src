function initMobile() {
  console.log("is-mobile");
}
function initDesktop() {
  console.log("is-desktop");
}
ssm.addState({
  id: "tablet",
  query: "(max-width: 768px)",
  onEnter: function () {
    initMobile();
  },
});
ssm.addState({
  id: "desktop",
  query: "(min-width: 768px)",
  onEnter: function () {
    initDesktop();
  },
});

$(window).on("scroll", function () {
  $(window).scrollTop() >= 50
    ? $(".header").addClass("header_white")
    : $(".header").removeClass("header_white");
});

$(document).on("click", ".header__burger", handleToggle);
function handleToggle(e) {
  e.preventDefault();
  $(".header__menu").toggleClass("header__menu_visible");
  $(".header__burger").toggleClass("header__burger_visible");
}

$(".header__list a, .top__scroll-down a").on("click", function (e) {
  var a = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(a.attr("href")).offset().top - 0,
      },
      1500,
      "easeInOutExpo"
    ),
    e.preventDefault();
});

/////////////////////TYPED/////////////////////

$(".top__element").each(function () {
  var e = $(this);
  e.typed({
    strings: e.attr("data-elements").split(","),
    typeSpeed: 100,
    backDelay: 3e3,
  });
});

////////////////////SCROLL UP/////////////////////////

$(window).on("scroll", function () {
  $(this).scrollTop() > 100 ? $(".back").fadeIn() : $(".back").fadeOut();
}),
  $(".back").click(function () {
    return (
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1e3
      ),
      !1
    );
  });

////////////////////////SCROLL SPY///////////////////////

function scrollSpy() {
  let sections = [
    "home",
    "about",
    "services",
    "client",
    "work",
    "blog",
    "contact",
  ];

  let current;

  for (let i = 0; i < sections.length; i++) {
    if ($("#" + sections[i]).offset().top <= $(window).scrollTop() + 2) {
      current = sections[i];
    }
  }
  $("nav a[href='#" + current + "']")
    .parent("li")
    .addClass("header__nav-item_active");
  $("nav a")
    .not("a[href='#" + current + "']")
    .parent("li")
    .removeClass("header__nav-item_active");
}

$(window).scroll(function () {
  scrollSpy();
});

///////////////////SLIDER///////////////////

$("#owl-demo").owlCarousel({
  autoPlay: 7e3,
  stopOnHover: !0,
  navigation: !1,
  paginationSpeed: 1e3,
  goToFirstSpeed: 2e3,
  singleItem: !0,
  autoHeight: !0,
});

////////////////ISOTOPE/////////////////

$(window).on("load", function () {
  var e = $(".work__filter"),
    a = $("#menu-filter");
  e.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  }),
    a.find("a").on("click", function () {
      var o = $(this).attr("data-filter");
      return (
        a.find("a").removeClass("work__btns-link_active"),
        $(this).addClass("work__btns-link_active"),
        e.isotope({
          filter: o,
          animationOptions: {
            animationDuration: 750,
            easing: "linear",
            queue: !1,
          },
        }),
        !1
      );
    });
});

//////////////////////ZOOM///////////////////////

$(".img-zoom").magnificPopup({
  type: "image",
  closeOnContentClick: !0,
  mainClass: "mfp-fade",
  gallery: {
    enabled: !0,
    navigateByImgClick: !0,
    preload: [0, 1],
  },
});
