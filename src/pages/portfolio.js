import CarouselSlider from "./carousel-slider";

import omnifood from "../images/omnifood.jpg";
import bankist from "../images/bankist.png";
import nexter from "../images/nexter.png";
import natours from "../images/natours.jpg";
import forkify from "../images/forkify.png";
import todo from "../images/screenshot_of_website.png";
import kurist from '../images/kurist.png'
import Islamic from '../images/islamic.png'
import Ajyal from '../images/ajyal.png'
import ace from '../images/ace.png'
import nike from '../images/nike.png'


const projects = [
 
  {
    title: "Natours",
    image: natours,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
    href:'https://natours.netlify.app/'
  },


  {
    title: "Nike",
    image: nike,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
    href:'https://652cb599e6cb0273a5914303--zesty-nougat-9fcb90.netlify.app/'
  },
  {
    title: "Omnifood",
    image: omnifood,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href:'https://652cffe1965ca71d72db32b2--cerulean-horse-a15873.netlify.app/'
  },
  {
    title: "Kurist",
    image: kurist,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
    href:'https://www.kurist.com/'
  },
  {
    title: "Islamic",
    image: Islamic,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
    href:'https://rouhalkalam.com/'
  },
  
  {
    title: "ACE",
    image: ace,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
    href:'https://staging.ace-group.us/index.html'
  },

  {
    title: "Ajyal Saleema",
    image: Ajyal,
    description: "Nulla posuere mauris et quam varius ullamcorper.",
    href:'https://github.com/abdo-ayman8642/Ajyal-saleema/blob/main/public/Screenshots/Screenshot%202023-10-16%20041642.png'
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
