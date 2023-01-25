import { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShow] = useState(false);
  const [navbarClass, setNavbarClass] = useState('navbar');
  const [activePage, setActivePage] = useState('home');
  const toggleMenu = () => {
    setShow(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setNavbarClass('navbarAr sticky');
      } else {
        setNavbarClass('navbarAr');
      }
    });
  }, []);

  const shadow = `${showMenu ? 'navbar-collapse collapse' : 'navbar-collapse'}`;
  const classes = `navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg px-3 px-lg-0 ${navbarClass}`;
  return (
    <nav className={classes}>
      <a href="#home" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 text-uppercase text-white">
          <i className="fa fa-birthday-cake fs-1 text-primary me-3" />
          Keki
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={shadow}
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
        role="presentation"
      >
        <div className="navbar-nav ms-auto mx-lg-auto py-0">
          <a href="#homePage" onClick={() => setActivePage('home')} className={activePage === 'home' ? 'active' : ''}>
            Home
          </a>
          <a href="#aboutPage" onClick={() => setActivePage('about')} className={activePage === 'about' ? 'active' : ''}>
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
