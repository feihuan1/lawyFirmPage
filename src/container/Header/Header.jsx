import React from 'react';


import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key To fine Dining</h1>
    </div>

    <div className='app__wrapper_img highlight'>

    </div>
  </div>
);

export default Header;
