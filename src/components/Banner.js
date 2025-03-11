import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage  from '../assets/img/header-img.svg'

export const Banner = () => {
    const [Loopnum, setLoopnum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Development", "Front-end", "Back-end"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 50);
    const period = 200;

    useEffect  (() => {
        let ticker = setInterval(()=> {
          tick();
        },delta )
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = Loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopnum((prevLoopNum) => prevLoopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-itens-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindo ao meu portfolio</span>
                        <h1>{'Olá sou um desenvolvedor!       '}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla odio nibh, porttitor ultricies felis suscipit et. Aenean lacus massa,</p>
                        <button onClick={() => console.log('connect')}>Vamos nos conectar! < ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImage} alt="headder imagem "/>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Banner;