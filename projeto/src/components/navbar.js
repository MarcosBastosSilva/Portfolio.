import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
export const navbar = () => {
  const [activeLink, setActivateLink] = useState('home');
  const [scrolled, seScrolled] = useState(False);

  useEffect (()=>{
    const onScroll = () => {
      if (widow.scrollY > 50 ) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    
    widow.addEventListener("scroll", onScroll);

    return () => widow.removeEventListener ("scroll", onScroll);
  }, [])
    return (
        function Navbar() {
            return (
              <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                  <Navbar.Brand href="#home">
                    <img src={''} alt="logo"></img>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className='navbar-toggler-icon'></span> 
                  </Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="skills">skills</Nav.Link>
                      <Nav.Link href="Projetos">Projetos</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                      <div className='social-icon'>
                        <a href='#'><img src="imagem.jpg" alt="descrição da img"/></a>
                        <a href='#'><img src="imagem.jpg" alt="descrição da img"/></a>
                        <a href='#'><img src="imagem.jpg" alt="descrição da img"/></a>
                      </div>
                      <butoon className="botão" onClick={() => console.log ("connect")}><span>
                        Vamos conectar</span></butoon>
                    </span>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            );
          }
    )
}

export default BasicExample;