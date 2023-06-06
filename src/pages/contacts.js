import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export const Contacts = () => {
  return (
    <section id="contact">
      <div class="contact-overlay"></div>
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
        </div>
      </div>

      <div class="row contact-info">
        <div class="col-four tab-full">
          <div class="icon">
            <i class="icon-pin">
              <FaLocationArrow />
            </i>
          </div>

          <h5>Where to find me</h5>

          <p>
            Nasr City
            <br />
            Cairo, Egypt
          </p>
        </div>

        <div class="col-four tab-full">
          <div class="icon">
            <i class="icon-phone">
              <FaMobileAlt />
            </i>
          </div>

          <h5>Call Me At</h5>

          <p>Mobile: (+20) 10 65806732</p>
        </div>
        <div class="col-four tab-full ">
          <div class="icon">
            <i class="icon-mail">
              <FaRegEnvelope />
            </i>
          </div>

          <h5>Email Me At</h5>

          <p>abdelrahman.ayman8642@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
