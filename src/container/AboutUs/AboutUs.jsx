import { useContext } from 'react';

import { images,data } from '../../constants';
import './AboutUs.css';
import Context from '../../context/context';


const AboutUs = () => {
  const context = useContext(Context)
  const {aboutText} = data

  return (
  <div className="app__aboutus flex__center section__padding app__bg"  id="about">
   

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">{context.isEnglish ? aboutText.aboutTitle.EN : aboutText.aboutTitle.CH}</h1>

        <p className="p__opensans">{context.isEnglish ? aboutText.aboutText.EN : aboutText.aboutText.CH}</p>
        <button type="button" className="custom__button">{context.isEnglish ? aboutText.button.EN : aboutText.button.CH}</button>
      </div>

      <div className="about-middle-line" />

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">{context.isEnglish ? aboutText.historyTitle.EN : aboutText.historyTitle.CH}</h1>

        <p className="p__opensans">{context.isEnglish ? aboutText.historyText.EN : aboutText.historyText.CH}</p>
        <button type="button" className="custom__button">{context.isEnglish ? aboutText.button.EN : aboutText.button.CH}</button>
      </div>
    </div>
  </div>
);
  }

export default AboutUs;