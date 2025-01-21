/* eslint-disable jsx-a11y/alt-text */

import { useRef } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
    const skillsRef = useRef(null);
    
    return (
        <section className ="skill" id="skill" ref={skillsRef}>
            <Container>
                <Row>
                    <Col>
                    
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I possess a diverse skill set in cybersecurity, web development, and Governance, Risk, and Compliance (GRC). In cybersecurity, I have experience in penetration testing, vulnerability assessments, and network security, with practical knowledge of tools such as Kali Linux and Raspberry Pi for ethical hacking. I also have proficiency in front-end web development, utilizing React, Tailwind CSS, and Mapbox to build interactive, user-friendly websites. My GRC background equips me with a solid understanding of risk management, compliance, and security frameworks. I am adept at leveraging modern technologies to develop secure, efficient, and user-focused solutions in both technical and regulatory environments.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider"> 
                                <div className="item">
                                    <img src={meter1} />
                                    <h6>Web Development</h6>
                                </div> 
                                <div className="item">
                                    <img src={meter2}  />
                                    <h6>Software Engineering</h6>
                                </div> 
                                <div className="item">
                                    
                                    <img src={meter3}  />
                                    <h6>Cyber Security</h6>
                                </div> 
                                <div className="item">
                                    <img src={meter1} />
                                    <h6>IT</h6>
                                </div> 
                            </Carousel>
                               
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>

        </section>
      )
}