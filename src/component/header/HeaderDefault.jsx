import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBed, faHeart, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/Logo.png'
import ButtonDefault from "../buttons/ButtonDefault"
import ButtonWithLeftIcon from "../buttons/ButtonWithLeftIcon"

export default function HeaderDefault({style}) {
  const [isLogin, setIsLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed z-50 top-0 inset-x-0 w-full py-2 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-screen-lg mx-auto px-4">
        <nav>
          <ul className="flex">
          <NavLink 
            // to="/messages"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className={`${scrolled ? 'flex justify-center items-center gap-2 text-black-green' : 'flex justify-center items-center gap-2 text-white'} mr-4`}>
              <FontAwesomeIcon icon={faPlane} /> <span className="hidden md:block">Find Flight</span>
            </li>
          </NavLink>
          <NavLink 
            // to="/messages"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li className={`${scrolled ? 'flex justify-center items-center gap-2 text-black-green' : 'flex justify-center items-center gap-2 text-white'}`}>
              <FontAwesomeIcon icon={faBed} /> <span className="hidden md:block">Find Stays</span>
            </li>
          </NavLink>
          </ul>
        </nav>
        <div className="">
          <img className="w-24" src={logo} alt="" />
        </div>
        <div className="flex">
          {
            isLogin ? (
              <React.Fragment>
                <ButtonWithLeftIcon className={`${scrolled ? 'ghost-black': 'ghost-white'}`} text="Login" size="w-24 h-12" icon={<FontAwesomeIcon icon={faHeart} />}/>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="md:hidden">
                  <FontAwesomeIcon className={`${scrolled ? 'text-black-green' : 'text-white'} mr-4`} icon={faUser} />
                  <FontAwesomeIcon className={`${scrolled ? 'text-black-green' : 'text-white'} mr-4`} icon={faRightToBracket} />
                </div>
                <div className="hidden md:flex">
                  <ButtonDefault className={`${scrolled ? 'ghost-black': 'ghost-white'}`} text="Login" size="w-24 h-12"/>
                  <ButtonDefault className={`${scrolled ? 'default-black': 'default-white'}`} text="Sign up" size="w-24 h-12"/>
                </div>
              </React.Fragment>
            )
          }
        </div>
      </div>
    </header>
  ) 
}

HeaderDefault.propTypes = {
  style: PropTypes.string,
};
