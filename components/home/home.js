const HOME_PAGE = () => {
  window.location.hash = "home";
  return `
  <div class="slider">
    <ul class="slides">
      <li>
        <img class="hero-image" src="../../images/frontend.jpg">
        <div class="caption left-align">
          <h3>Hello, Yogasmara here.</h3>
          <h5>I'm Frontend Developer.</h5>
        </div>
      </li>
      <li>
        <img class="hero-image" src="../../images/backend.jpg">
        <div class="caption right-align">
          <h3>Let Me Make App Interface For you</h3>
          <h5 class="light grey-text text-lighten-3">I'm frontend engineer with interesting making app interfaces and UI/UX.</h5>
        </div>
      </li>
    </ul>
  </div>
  `;
}

export default HOME_PAGE;