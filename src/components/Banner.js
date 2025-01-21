/* eslint-disable react-hooks/exhaustive-deps */
import{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/face-modified.png";

export const Banner = ()=> {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Designer", "Web Developer" , "Cyber Security", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500);
    const period = 1000;
    
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1) ;

        setText(updatedText);
        console.log(updatedText);

        if (isDeleting){
            setDelta (prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {12} md = {6} xl ={7}>
                    <span className="taglane">
                        Welcome to my Portfolio

                    </span>
                    <h1>{`Hi I'm Gautham`}<span className="wrap" > {text}</span></h1>
                    <p>I am a passionate and driven individual with a background in Governance, Risk, and Compliance (GRC), cybersecurity, and web development. With a foundation in computer science and hands-on experience in network security, I have worked on projects demonstrating the vulnerabilities of WPA2 encryption using Kali Linux and a Raspberry Pi Zero. Additionally, I have developed a dynamic F1 website using React, Tailwind CSS, and Mapbox, where users can explore information about current F1 drivers, race history, and tracks. My expertise spans security protocols, risk management, and delivering user-focused solutions, with a strong focus on compliance and governance within the cybersecurity landscape.</p>
                    {/* <button onClick={() => console.log('connect')}> Lets Connect <ArrowRightCircle size={25}/></button> */}
                    </Col>
                    <Col xs = {12} md = {6} xl ={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>


        </section>
    )
}