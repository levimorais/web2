import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stl-barraNav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function BarraNav() {

  const [text, setText] = useState("")

  useEffect(() => {
    setText(`Olá, ${userName.split(' ')[0]}, seja bem vindo!`)
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const noProfile = <a href="https://www.flaticon.com/br/icones-gratis/aluna" title="aluna ícones">Aluna ícones criados por itim2101 - Flaticon</a>

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="barraNav">
        
          <div className="barraNav-container container">
            <Link to="/profile" className="barraNav-logo" onClick={closeMobileMenu}>
            
            {userPhoto===null||userPhoto===""?<img src={noProfile} style={{opacity: 0.5}} alt="Meu perfil" title="Meu perfil" className="imageLabelNav"/>:
              <img src={"data:image/png;base64,"+userPhoto} alt="Meu perfil" title="Meu perfil" className="imageLabelNav"/>} 
              <p className="titleNav">{text}</p>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="barraNavItem">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    "barraNavLinks" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Perfil do Usuário
                </NavLink>
              </li>
              <li className="barraNavItem">
                <NavLink
                  to="/meusGrupos"
                  className={({ isActive }) =>
                    "barraNavLinks" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Grupos do Usuário
                </NavLink>
              </li>
              <li className="barraNavItem">
                <NavLink
                  to="/procurarGrupos"
                  className={({ isActive }) =>
                    "barraNavLinks" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Busca de Gurpos
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default barraNav;