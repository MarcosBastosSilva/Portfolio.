import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';


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
    event.preventDefault(); // Evita o comportamento padrão do link
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
          <img src={logo} alt="logo" />
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
              Home
            </Nav.Link>
            <Nav.Link href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={(e) => onUpdateActiveLink('skills', e)}
            >
              Skills
            </Nav.Link>
            <Nav.Link href="#project" 
              className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={(e) => onUpdateActiveLink('project', e)}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/marcosvbs11' target='_blank'><img src={navIcon1} alt="social" /></a>
            </div>
            <button className="botão" onClick={() => console.log("connect")}>
              <span>Vamos conectar!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
