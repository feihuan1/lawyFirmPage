import { useContext } from "react";

import ContactForm from "./ContactForm";
import { SubHeading } from "../../components";

import "./Contact.css";
import Context from "../../context/context";

const Contact = () => {
  const context = useContext(Context);

  return (
    <div className="app__contact flex__center section__padding" id="contact">
      <div className="app__contact-content flex__center">
        <div className="app__contact-content_form">
          <h1 className="headtext__cormorant">
            Appointment
            <SubHeading title="We will get back to you" />
          </h1>
          <ContactForm />
        </div>

        <div className="contact-middle-line" />

        <div className="app__contact-content_info">
          <h1 className="headtext__cormorant">
            Contact us
            <SubHeading title="We are here for you" />
          </h1>
          <div className="info-list">
            <p className="p__opensans">
              <strong> Hours: </strong>
              9:00Am-5:00PM (Weekdays)
            </p>
            <p className="p__opensans">
              <strong>Phone: </strong>
              626-000-0000
            </p>
            <p className="p__opensans">
              <strong>Email: </strong>
              someEmail@alodieandassociates.com
            </p>
            <p className="p__opensans">
              <strong>Address: </strong>
              123 testing st, Los Angels, CA, 91749
            </p>
          </div>
          <button type="button" className="custom__button">
            <a href="mailto:ericrealtor1997@gmail.com">
              {context.isEnglish ? "Email Us" : "发邮件"}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
