import CarouselSlider from "./carousel-slider";
import omnifood from "../images/omnifood.jpg";
import bankist from "../images/bankist.png";
import nexter from "../images/nexter.png";
import natours from "../images/natours.jpg";
import forkify from "../images/forkify.png";
import todo from "../images/screenshot_of_website.png";
const projects = [
  {
    title: "Project 1",
    image: omnifood,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 2",
    image: bankist,
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Project 3",
    image: nexter,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
  },
  {
    title: "Project 4",
    image: natours,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
  },
  {
    title: "Project 5",
    image: "https://i.ibb.co/TR5LW9z/image.png",
    description: "Nulla posuere mauris et quam varius ullamcorper.",
  },
  {
    title: "Project 6",
    image: forkify,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
  },
  {
    title: "Project 7",
    image: todo,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
  },
];
export const PORTFOLIO = () => {
  return (
    <section id="portfolio">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works.</h1>
        </div>
      </div>

      <CarouselSlider projects={projects} />
    </section>
  );
};
