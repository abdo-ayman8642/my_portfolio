import cv from "../images/Abdelrahman Ayman latest.pdf";
export const ABOUT = () => {
  return (
    <section id="about">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>

          <div class="intro-info">
            <p class="lead">
              My name is Abdelrahman Ayman, I have studied computer and
              information science in ain shams university, I have 1 year
              experience in full-stack web development, I am very passionate
              about my career and hope that i can get the best of myself with
              hardworking, consistensy and willing.
            </p>
          </div>
        </div>
      </div>

      <div class="row button-section">
        <div class="col-twelve">
          <a href="#contact" title="Hire Me" class="button stroke smoothscroll">
            Hire Me
          </a>
          <a
            href={cv}
            title="Download CV"
            class="button button-primary"
            download={"Abdelrahman_ayman"}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
