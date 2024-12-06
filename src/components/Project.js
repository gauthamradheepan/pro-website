/* eslint-disable jsx-a11y/alt-text */

import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
export const Project = () =>{
    const projects =[
        {
            title: "Cyber Security Project",
            description: "Raspberri pi hack router",
            imgUrl: projImg1,
        },
        {
            title: "Softeng Project",
            description: "Softeng project",
            imgUrl: projImg2,
        },
        {
            title: "Cyber Security Project",
            description: "Raspberri pi hack router",
            imgUrl: projImg3,
        },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Row sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                        ket={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                                </Tab.Content>
                                </Row>
                            </Row>
                        </Tab.Container>                   
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )

}