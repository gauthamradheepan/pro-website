/* eslint-disable jsx-a11y/alt-text */
import { Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
export const ProjectCard = ({title,description, imgUrl, id}) => {
    return(
         
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>

                </div>
            </Col>
        
         
    )
}