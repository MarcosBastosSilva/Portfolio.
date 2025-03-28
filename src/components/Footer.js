import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from './MailChimpForm'





export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col size={12} sm={6}>
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