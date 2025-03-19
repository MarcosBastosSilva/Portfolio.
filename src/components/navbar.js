import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import doge from '../assets/img/doge.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';


export const MyNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value, event) => {
    event.preventDefault(); 
    setActiveLink(value);

    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={doge} alt="logo" className='Doge' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={(e) => onUpdateActiveLink('home', e)}
            >
              Inicio
            </Nav.Link>
            <Nav.Link href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={(e) => onUpdateActiveLink('skills', e)}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link href="#project" 
              className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={(e) => onUpdateActiveLink('project', e)}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/marcosvbs11' target='_blank'><img src={navIcon1} alt="social" /></a>
              <a href='https://github.com/MarcosBastosSilva' target='_blank'><img src={navIcon2} alt="social" /></a>
            </div>
            <button className="botão" onClick={() => window.open ('https://www.linkedin.com/in/marcosvbs11')}>
              <span>Vamos conectar!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
