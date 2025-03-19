import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from './MailChimpForm'
import logo from "../assets/img/doge.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="Doge" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/marcosvbs11" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              
     
            </div>
            <p>Feito por Marcos Vinicius - 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer