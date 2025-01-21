import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";

export const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Cyber Security Project",
      description: "Raspberry Pi hack router",
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: "Softeng Project",
      description: "Softeng project",
      imgUrl: projImg2,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
             I have worked on a project demonstrating the vulnerabilities of WPA2 encryption by conducting a dictionary attack on a WPA2-secured Wi-Fi network, emphasizing the importance of using strong, complex passwords to enhance wireless network security. Additionally, I developed an F1 website that allows users to explore detailed information about drivers, race history, and tracks, providing an interactive and user-friendly platform for F1 enthusiasts.
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col>
                <Row className="justify-content-center">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Row>
              </Col>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
