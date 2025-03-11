import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-itens-center">
                    <Col xs={12} md={6} >xl={7}
                        <span className="tagline">Bem-vindo ao meu portfolio</span>
                        <h1>{'Olá sou um desenvolvedor!'}<span className="wrap">Web Developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla odio nibh, porttitor ultricies felis suscipit et. Aenean lacus massa,</p>
                        <button onClick={() => console.log('connect')}>Vamos nos conectar!</button>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )

}