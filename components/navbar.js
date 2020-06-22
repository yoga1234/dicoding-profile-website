import HOME_PAGE from './home/home.js'

const NAVBAR = `
  <nav>
    <div class="nav-wrapper container">
      <a href="#home" class="brand-logo">Yogasmara</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><h5>☰</h5></a>
      <ul class="right hide-on-med-and-down">
        <li class="nav-page"><a>Home</a></li>
        <li class="nav-page"><a>Skill</a></li>
        <li class="nav-page"><a>Testimonials</a></li>
        <li class="nav-page"><a>About</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li class="nav-page sidenav-close"><a href="home">Home</a></li>
    <li class="nav-page sidenav-close"><a href="skill">About</a></li>
    <li class="nav-page sidenav-close"><a href="testimonials">Testimonials</a></li>
    <li class="nav-page sidenav-close"><a href="about">About</a></li>
  </ul>
`;

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

export default NAVBAR;