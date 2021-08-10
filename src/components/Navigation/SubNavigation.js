import { Link } from "react-router-dom";
import { useState } from "react";

function SubNavigation({ content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = (event) => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <button onClick={openMenu} aria-haspopup='true' aria-expanded={menuOpen}>{content.name}</button>
      <ul className={`navigation__item__sublist ${menuOpen ? 'active' : ''}`}>
        {content.subitems.map((subitem, index) => {
          return (
            <li className={'navigation__item__subitem'} key={index}>
              {subitem.link && <Link to={subitem.link}>{subitem.name}</Link>}
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default SubNavigation;