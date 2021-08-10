import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SubNavigation from "./SubNavigation";

import './Navigation.css';

function Navigation({ content }) {
  const navigation = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  })
  
  // close menu if click outside
  const handleClick = (event) => {
    if (!menuOpen || navigation.current.contains(event.target)) {
      return;
    }
    openMenu();
  }


  const openMenu = (event) => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={'navigation'} ref={navigation}>
      <button className={'navigation__button'} onClick={openMenu} aria-haspopup='true' aria-expanded={menuOpen}>
        <svg aria-labelledby="mainMenu">
          <title id="mainMenu">Main menu</title>
          <rect width="40" height="6"></rect>
          <rect y="14" width="40" height="6"></rect>
          <rect y="28" width="40" height="6"></rect>
        </svg>
      </button>
      <ul className={`navigation__list ${menuOpen ? 'active' : ''}`}>
        {content.map((item, index) => {
          return (
            <li className={'navigation__item'} key={index}>
              {item.link && <Link to={item.link}>{item.name}</Link>}
              {item.subitems && <SubNavigation content={item} />}
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navigation;