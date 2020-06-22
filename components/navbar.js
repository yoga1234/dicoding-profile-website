const MAIN_CONTENT = document.getElementById("main-content");

const NAVBAR = `
  <nav>
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">Yogasmara</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><h5>☰</h5></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#home">Home</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="home">Home</a></li>
    <li><a href="skill">About</a></li>
    <li><a href="testimonials">Testimonials</a></li>
    <li><a href="about">About</a></li>
  </ul>
`;

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

MAIN_CONTENT.innerHTML = NAVBAR;
