const SKILL_PAGE = () => {
  window.location.hash = "skill";
  return `
    <div class="container">
    <blockquote><h3>SKILLSET</h3></blockquote>
    <h5>I'm experienced with :</h5>
    <div class="row">
        <div class="col s6">
          <div class="card-panel">
            <h5>HTML</h5>
            <div class="progress">
              <div class="determinate" style="width: 75%"></div>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card-panel">
            <h5>CSS</h5>
            <div class="progress">
              <div class="determinate" style="width: 70%"></div>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card-panel">
            <h5>Javascript</h5>
            <div class="progress">
              <div class="determinate" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card-panel">
            <h5>ReactJS</h5>
            <div class="progress">
              <div class="determinate" style="width: 40%"></div>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card-panel">
            <h5>NodeJS</h5>
            <div class="progress">
              <div class="determinate" style="width: 30%"></div>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card-panel">
            <h5>UI/UX Design</h5>
            <div class="progress">
              <div class="determinate" style="width: 50%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default SKILL_PAGE;