import { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import Context from "../../context/context";
import { data, images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const context = useContext(Context);
  const { navbarText } = data;

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">
            {context.isEnglish ? navbarText.home.EN : navbarText.home.CH}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#about">
            {context.isEnglish ? navbarText.about.EN : navbarText.about.CH}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu">
            {context.isEnglish ? navbarText.case.EN : navbarText.case.CH}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#awards">
            {context.isEnglish ? navbarText.team.EN : navbarText.team.CH}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#contact">
            {context.isEnglish ? navbarText.contact.EN : navbarText.contact.CH}
          </a>
        </li>
      </ul>

      <div className="app__navbar-language largescreen">
        <button onClick={context.toggleLanguage}>
          {context.isEnglish ? "简" : "EN"}
        </button>
      </div>

      <div className="app__navbar-smallscreen">

        <div className="app__navbar-language smallscreen">
          <button onClick={context.toggleLanguage}>
            {context.isEnglish ? "简" : "EN"}
          </button>
        </div>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">
                  {context.isEnglish ? navbarText.home.EN : navbarText.home.CH}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about">
                  {context.isEnglish
                    ? navbarText.about.EN
                    : navbarText.about.CH}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu">
                  {context.isEnglish ? navbarText.case.EN : navbarText.case.CH}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards">
                  {context.isEnglish ? navbarText.team.EN : navbarText.team.CH}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact">
                  {context.isEnglish
                    ? navbarText.contact.EN
                    : navbarText.contact.CH}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
