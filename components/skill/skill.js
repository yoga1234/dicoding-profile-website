const SKILL_PAGE = () => {
  window.location.hash = "skill";
  return `
    <div class="container">
      <div class="row">
        <div class="col s6">
          <div class="card-panel">
            <h5>Javascript</h5>
            <div class="progress">
              <div class="indeterminate" style="width: 60%"></div>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card-panel">
            <h5>Javascript</h5>
            <div class="progress">
              <div class="determinate" style="width: 60%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default SKILL_PAGE;