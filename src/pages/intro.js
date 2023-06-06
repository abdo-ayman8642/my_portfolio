import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaAngleDown,
  FaPhone,
} from "react-icons/fa";
export const INTRO = () => {
  return (
    <section id="intro">
      <ul class="intro-social">
        <li>
          <a href="#contact" className="contact-icon">
            <FaPhone />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100059043917669"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdelrahman-ayman-646817202/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abdo-ayman8642"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>

      <div class="intro-overlay"></div>

      <div class="intro-content">
        <div class="row">
          <div class="col-twelve">
            <h5>Hello, World.</h5>
            <h1>I'm Abdelrahman Ayman.</h1>

            <p class="intro-position">
              <span>Fullstack Software Developer</span>
            </p>

            <a class="button stroke smoothscroll" href="#about" title="">
              More About Me
              <div>
                <FaAngleDown />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
