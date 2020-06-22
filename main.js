import NAVBAR from './components/navbar.js';
import FOOTER from './components/footer.js';
import PAGE_LOADER from './components/content-loader.js';

const MAIN_CONTENT = document.getElementById("main-content");

document.addEventListener('DOMContentLoaded', function() {
  document.body.insertAdjacentHTML("afterbegin", NAVBAR);
  document.body.insertAdjacentHTML("beforeend", FOOTER);

  MAIN_CONTENT.innerHTML = PAGE_LOADER("Home");
  
  // getting click event
  const CLICK_BEHAVIOUR = document.querySelectorAll('.nav-page').forEach(function(navItem) {
    navItem.addEventListener("click", function(e) {
      e.preventDefault();
      MAIN_CONTENT.innerHTML = PAGE_LOADER(e.target.innerHTML);
    });
  });

  // initialization for slider
  var sliderElems = document.querySelectorAll('.slider');
  var sliderInstances = M.Slider.init(sliderElems, { indicators: true, });

});

