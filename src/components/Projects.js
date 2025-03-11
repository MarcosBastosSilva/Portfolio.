import { Col, Row, Container, Tab, TabContent, TabPane } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projectImage1 from '../assets/img/project-img1.png'
import projectImage2 from '../assets/img/project-img2.png'
import projectImage3 from '../assets/img/project-img3.png'

export const Projects = () => {
    const projects = [
        {
            title: "bussiness startup",
            description:"design development",
            imgUrl: projectImage1,
        },
        {
            title: "bussiness startup",
            description:"design development",
            imgUrl: projectImage2,
        },
        {
            title: "bussiness startup",
            description:"design development",
            imgUrl: projectImage3,
        },
        
    ];
    return (
        <section Classname="project" id="project">
         <Container>
            <Row>
                <Col>
                <h2>Projetos</h2>
                <p>AAAAAAAAAAAAAAAAAA MAO DEMONIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" disabled>Tab three </Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">AAAAAAAAAAAAAAAAAAAAAAAAA PINGUIN IMPERIAL</Tab.Pane>
                    <Tab.Pane eventKey="third">MAOOOOOOOOOO FANTASMAAAAAAAAAAAAAA</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
         </Container>    
         <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}

export default Projects