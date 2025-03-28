import { Container, Row ,Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorShap from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skills-bx'>
                            <h2>Habilidades</h2>
                            <p>Aqui estão algumas de minhas habilidades</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='imagem'/>
                                    <h5>Desenvolvimento Web</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='imagem'/>
                                    <h5>Front-End</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='imagem'/>
                                    <h5>Back-end</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorShap}/>
        </section>
      )
       
}



export default Skills;