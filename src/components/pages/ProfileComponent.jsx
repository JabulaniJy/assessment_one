import React from 'react';
import {Container, Row,Col, Image,ListGroup } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default function ProfileComponent() {
    return (
        <>
        <Container>
            <div className="profile-area">
                <Row className="justify-content-md-center p-4">

                    <Col md={3}>
                    <Image                         
                        className="d-block w-40 rounded-circle"
                        src="assets/images/profile.png" 
                        alt="profile image" fluid/>
                    </Col>
                    <Col md={6}>
                        <h1>Profile</h1>
                        <hr className="profile-hr h-10"/>
                        <h3>Name: Jabulani Sphiwe Kubeka</h3>
                        <p><strong>Role: Front-end Developer</strong></p>
                        <ListGroup className="d-inline">
                            <Link to="#"> <FaIcons.FaFacebookSquare/></Link>
                            <Link to="#"> <FaIcons.FaLinkedin/></Link>
                            <Link to="#"> <FaIcons.FaTwitter/></Link>
                        </ListGroup>

                    </Col>
                </Row>
                <Row className="justify-content-md-center p-4">
                    <Col md={12}>
                        <h1>Contacts</h1>
                        <hr className="profile-hr h-10"/>
                        <p><strong>Cell number: 087-435-7654</strong></p>
                        <p><strong>Email: jskubeka@lime.ca.za</strong></p>
                        <p><strong>Cell number: 087-435-7654</strong></p>

                    </Col>
                </Row>
            </div>
        </Container>   
        </>
    )
}

