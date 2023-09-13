import React, { useContext } from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai"

import Context from '../../context/context';
import { SubHeading } from '../../components';
import { images,data } from '../../constants';
import './Header.css';

const Header = () => {
  const context = useContext(Context);
  const { headerText } = data;

  return (
    <div className="app__header" id="home" style={{ backgroundImage: `url(${images.welcome})` }}>
      <SubHeading title={context.isEnglish ? headerText.subHeader.EN : headerText.subHeader.CH} />
      <h1 className="app__header-h1">{context.isEnglish ? headerText.header.EN : headerText.header.CH}</h1>
      <ul>
        <li><a href="#"><AiOutlineFacebook color='white' fontSize={28}/></a></li>
        <li><a href="#"><AiOutlineInstagram color='white' fontSize={28}/></a></li>
        <li><a href="#"><AiOutlineLinkedin color='white' fontSize={28}/></a></li>
        <li><a href="#"><AiOutlineYoutube color='white' fontSize={28}/></a></li>
      </ul>
    </div>
  );
};

export default Header;