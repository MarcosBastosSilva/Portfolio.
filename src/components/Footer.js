import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from './MailChimpForm'
import logo from "../assets/img/doge.webp";




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
            <p>Feito por Marcos Vinicius - 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer