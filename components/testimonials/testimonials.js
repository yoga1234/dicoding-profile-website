const TESTIMONIALS_PAGE = () => {
  window.location.hash = "testimonials";
  return `
    <div class="container">
      <h5 class="center-align">Testimonials</h5>
      <div class="row">
        <div class="col s8 offset-s2">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s4">
                <img src="../../images/testi-1-min.jpg" alt="" class="responsive-img valign"> <!-- notice the "circle" class -->
              </div>
              <div class="col s8">
                <h6>"<i>Great job, I will definitely be ordering again! Website was worth a fortune to my company.</i>"</h6>
                <blockquote>Jonathan Grand</blockquote>
              </div>
            </div>
          </div>
        </div>
        <div class="col s8 offset-s2">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
            <div class="col s8">
              <h6>"<i>I will recommend you to my colleagues. It fits our needs perfectly.</i>"</h6>
              <blockquote>Jack F.</blockquote>
            </div>
              <div class="col s4">
                <img src="../../images/testi-2-min.jpg" alt="" class="responsive-img valign"> <!-- notice the "circle" class -->
              </div>
            </div>
          </div>
        </div>
        <div class="col s8 offset-s2">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s4">
                <img src="../../images/testi-3-min.jpg" alt="" class="responsive-img valign"> <!-- notice the "circle" class -->
              </div>
              <div class="col s8">
                <h6>"<i>I just can't get enough of website. I want to get a T-Shirt with website on it so I can show it off to everyone.</i>"</h6>
                <blockquote>Anita X.</blockquote>
              </div>
            </div>
          </div>
        </div>
        <div class="col s8 offset-s2">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
            <div class="col s8">
              <h6>"<i>Great job, Yogasmara is the best developer I've ever know.</i>"</h6>
              <blockquote>Alianora L.</blockquote>
            </div>
              <div class="col s4">
                <img src="../../images/testi-4-min.jpg" alt="" class="responsive-img valign"> <!-- notice the "circle" class -->
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  `;
}

export default TESTIMONIALS_PAGE;