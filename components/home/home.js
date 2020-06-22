const HOME_PAGE = () => {
  window.location.hash = "home";
  return `
    <div class="slider">
      <ul class="slides">
        <li>
          <div class="caption left-align">
            <h3>left align caption</h3>
            <h5>this is just dummy subtitle</h5>
          </div>
        </li>
        <li>
          <div class="caption right-align">
            <h3>right align caption</h3>
            <h5>this is just dummy subtitle</h5>
          </div>
        </li>
      </ul>
    </div>
  `;
}

export default HOME_PAGE;