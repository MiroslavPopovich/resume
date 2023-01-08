// Background Animation
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 750
            }
          },
          "color": {
            "value": "#67a365"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#67a365",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );
});

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js-footer',
      {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 750
            }
          },
          "color": {
            "value": "#67a365"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#67a365",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );
});





$(document).ready(function(){

  // header functionality on screens smaller than 1199px
  function showHeader(window){
    if (window.matches)
    {
      $("#header").animate({left: '0px'});
      $("body").addClass("nav-active");
      
    }else{
      $("#header").animate({left: '-300px'});
      $("body").removeClass("nav-active");
      $("#nav-btn").removeClass();
      $("#nav-btn").addClass("fa-solid fa-bars");
    }
  }

  var minWindow = window.matchMedia('(min-width: 1199px)');
  showHeader(minWindow);
  minWindow.addListener(showHeader);

  
  $(window).bind('resize', function() {
    if ($(".form-control").is(":focus")) {
      //Do not keep the sections in place when resize the window and input is focused        
    } else {
      //Keeping the sections in place when resize the window
      window.onresize = function() {
        let currentHref = $(".nav-link.scrollto.active").attr('href');
        window.location.href = currentHref;
      };
    }
  });
  
  $("#nav-btn").click(function(){
      if($("body").hasClass("nav-active")){
          $("#header").animate({left: '-300px'});
          $("body").removeClass("nav-active");
         
      }else{
          $("#header").animate({left: '0px'});
          $("body").addClass("nav-active");  
      } 
      $(this).toggleClass("fa-xmark");
  });

  $("#navbar a").click(function(){
    if ( $('#nav-btn').css("visibility") == 'visible' ) {
      if($("body").hasClass("nav-active")){
          $("#header").animate({left: '-300px'});
          $("body").removeClass("nav-active");
       
      }else{
        $("#header").animate({left: '0px'});
        $("body").addClass("nav-active");  
      } 
      $("#nav-btn").toggleClass("fa-xmark");
    }
  });
 
});

// Selector Fnc
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

// Add Event Listenrt Fnc
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

// Add on scroll event listener 
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

//Navbar links active state on scroll
let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

// Scrolls to an section
const scrollto = (el) => {
  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  })
}

//Scroll with ofset on links with a class name .scrollto

on('click', '.scrollto', function(e) {
  if (select(this.hash)) {
    e.preventDefault()
    scrollto(this.hash)
  }
}, true)

window.addEventListener('load', () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash)
    }
  }
});


// Show/Hide Back to the top Btn
let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

//Horo typing effect

const typed = select('.auto-typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.auto-typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}