
  console.log("Working");
  
    window.addEventListener("scroll", function() {
      const header = document.querySelector(".header");
      const head = document.querySelector("header")
      const homeDiv = document.querySelector(".home");
  
      header.classList.toggle("header-fixed", window.scrollY > 50);
      homeDiv.classList.toggle("home-fixed", window.scrollY > 50);
      
      if (window.scrollY > 50) {
        header.classList.remove("container");
        head.classList.remove("mb-4")
      }else{
        header.classList.add("container");
        head.classList.add("mb-4")
      }
    });

    $('.prod-wrapper').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      infinite: true,
      prevArrow: '<i class="fa-solid fa-chevron-left fa-lg prev-button"></i>',
      nextArrow: '<i class="fa-solid fa-chevron-right fa-lg next-button"></i>',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }]
    });


    // Counters Section

  const countSpans = document.querySelectorAll('.count');
  const interval = 3000;

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounterAnimation(entry.target);
        observer.unobserve(entry.target); // Stop observing once the element is in view
      }
    });
  });

  // Observe each counter element
  countSpans.forEach((countSpan) => {
    observer.observe(countSpan);
  });

  function startCounterAnimation(countSpan) {
    let currentValue = 0;
    let targetValue = parseInt(countSpan.getAttribute("data-val"));
    let duration = Math.floor(interval / targetValue);
    let counter = setInterval(function () {
      currentValue += 1;
      countSpan.textContent = currentValue;
      if (currentValue == targetValue) {
        clearInterval(counter);
      }
    }, duration);
  }

  $('.review-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    prevArrow: '<i class="fa-solid fa-chevron-left fa-lg prev-button"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right fa-lg next-button "></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });