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
            {context.isEnglish ? 'Appointment' : '网上预约'}
            <SubHeading title={context.isEnglish ? 'We will comfirn with you soon' : '我们会尽快和您确认'} />
          </h1>
          <ContactForm isEnglish={context.isEnglish} />
        </div>

        <div className="contact-middle-line" />

        <div className="app__contact-content_info">
          <h1 className="headtext__cormorant">
          {context.isEnglish ? 'Contact Us' : '联系我们'}
            <SubHeading title={context.isEnglish ? 'We are here for you' : '竭诚为您服务'} />
          </h1>
          <div className="info-list">
            <p className="p__opensans">
              <strong> {context.isEnglish ? 'Hours' : '工作时间'}: </strong>
              9:00Am-5:00PM ({context.isEnglish ? 'Weekdays' : '工作日'})
            </p>
            <p className="p__opensans">
              <strong>{context.isEnglish ? 'Phone' : '电话'}: </strong>
              626-000-0000
            </p>
            <p className="p__opensans">
              <strong>{context.isEnglish ? 'Email' : '电子邮箱'}: </strong>
              someEmail@alodieandassociates.com
            </p>
            <p className="p__opensans">
              <strong>{context.isEnglish ? 'Address' : '地址'}: </strong>
              123 testing st, Los Angels, CA, 91749, USA
            </p>
          </div>
          <button type="button" className="custom__button">
            <a href="mailto:ericrealtor1997@gmail.com">
              {context.isEnglish ? "Email Us" : "邮件咨询"}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
