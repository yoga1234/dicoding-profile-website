const ABOUT_PAGE = () => {
  window.location.hash = "about";
  return `
    <div class="container mg-top-50">
      <div class="row">
        <div class="col s12 m12 l8">
          <h5>Name</h5>
          <blockquote>
            <h6>Septiana Yogasmara</h6>
          </blockquote>
          <hr>
          <h5>Bithday</h5>
          <blockquote>
            <h6>30 September, 1995</h6>
          </blockquote>
          <hr>
          <h5>Specialist On</h5>
          <blockquote>
            <h6>Frontend Development</h6>
          </blockquote>
          <hr>
          <h5>Location</h5>
          <blockquote>
            <h6>Bandung, Indonesia</h6>
          </blockquote>
          <hr>
          <h5>Motto</h5>
          <blockquote>
            <h6><i>Don't Stop</i></h6>
          </blockquote>
        </div>
        <div class="col s12 m12 l4">
        <div class="card blue">
          <div class="card-content white-text">
          <p>"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."</p>
          <span class="card-title"><i>Albert Einstein</i></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default ABOUT_PAGE;