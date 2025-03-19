import { Col, Row, Container, Tab, TabContent, TabPane } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projectImage1 from '../assets/img/project-img1.png'
import projectImage2 from '../assets/img/project-img2.png'
import work from '../assets/img/work.png'

export const Projects = () => {
    const projects = [
        {
            title: "Receitas Web",
            description:"Desafio tecnico, feito a partir do site: themealdb, executa em vite react e utilizando TailWind.CSS para estilizar",
            imgUrl: projectImage1,
            link: "https://github.com/MarcosBastosSilva/ReceitasWeb"
        },
        {
            title: "API Cervejas",
            description:"Utilizando Node e Javascript com auxilio do Insonmia e feito uma consulta ao banco de dados sobre determinada cerveja, desde sua marca, teor alcoolico etc.",
            imgUrl: projectImage2,
            link: "https://github.com/MarcosBastosSilva/Api-Cervejas"
        },
        {
            title: "EM ANDAMENTO!",
            description:"",
            imgUrl: work,
        }, 
        
    ];
    return (
        <section className="project" id="project">
         <Container>
            <Row>
                <Col>
                <h2>Projetos</h2>
                <p>Aqui você pode conferir um pouco dos meus projetos no qual trabalhei.</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Pagina 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Pagina 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Pagina 3 </Nav.Link>
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
                    <Tab.Pane eventKey="second">Projetos serão acrescentados em breve a está pagina</Tab.Pane>
                    <Tab.Pane eventKey="third">Projetos serão acrescentados em breve a está pagina</Tab.Pane>
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