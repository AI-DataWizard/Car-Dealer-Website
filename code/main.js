$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".navbar").toggleClass("active");
  });

  $(".login-btn").click(function () {
    $(".login-form-con").addClass("active");
  });

  $(".close-login-form").click(function () {
    $(".login-form-con").removeClass("active");
  });

  $(window).on("scroll load", function () {
    if (scrollY > 0) {
      $(".header").addClass("active");
    } else if (scrollY >= 0) {
      $(".header").removeClass("active");
    }
  });

  /*  $(".home").on("mousemove", function (e) {
    $(".home-parallax").each(function () {
      let speed = $(this).attr("data-speed");
      let x = ($(window).innerWidth() - e.pageX * speed) / 90;
      let y = ($(window).innerHeight() - e.pageY * speed) / 90;

      $(this).css("transform", `translateX(${y}px) translateY(${x}px)`);
    });
  });

  $(".navbar, .navbar a").click(function () {
    $(".navbar").hide();
  });*/

  var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
});
