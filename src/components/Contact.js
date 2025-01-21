import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
export const Contact =() => {
    const formInitialDetails={
        firstName: '',
        lastName: ' ',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState ('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending.....')
        let response = await fetch ("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify (formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code ===200){
            setStatus({success: true, message: 'Message send successfully'})
        }
        else{
            setStatus({success: false, message: 'Something went wrong, please try again later'})
        }
       
    };
    return(
        <section className="contact" id="contact">
            <Container>
                <Row classname="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <p>
                        You can reach me via email or LinkedIn:
                        </p>
                        <p>
                        <strong>Email:</strong>{" "}
                        <a >radheepangautham@gmail.com</a>
                        </p>
                        <p>
                        <strong>LinkedIn:</strong>{" "}
                        <a href="https://www.linkedin.com/in/gautham-radheepan/" target="_blank" rel="noopener noreferrer">
                        Gautham Radheepan
                        </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}