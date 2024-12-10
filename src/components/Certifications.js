import React, { useEffect } from "react";
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
export const Certifications = () => {
  useEffect(() => {
    // Dynamically load the Credly embed script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="certs" id="certs">
        <Container>
        <Row>
            <Col>
                <h2>Certifications</h2>
                <p>  Below is a list of certifications I have received.</p>
                <div className = ""
                    data-iframe-width="400"
                    data-iframe-height="500"
                    data-share-badge-id="8e419a94-42b6-4385-bcc5-b1305fbe12f8"
                    data-share-badge-host="https://www.credly.com">       
                </div>
            </Col>
        </Row>
    </Container>
    </section>
     
    
  );
};

export default Certifications;
