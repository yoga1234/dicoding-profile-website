import HOME_PAGE from './home/home.js';
import SKILL_PAGE from './skill/skill.js';
import TESTIMONIALS_PAGE from './testimonials/testimonials.js';
import ABOUT_PAGE from './about/about.js';

const PAGE_LOADER = (pageRequest) => {
  switch(pageRequest) {
    case "Home":
      return HOME_PAGE();
    case "Skill":
        return SKILL_PAGE();
    case "Testimonials":
      return TESTIMONIALS_PAGE();
    case "About":
      return ABOUT_PAGE();
    default:
      console.log("page requested is not found");
  }
}

export default PAGE_LOADER;