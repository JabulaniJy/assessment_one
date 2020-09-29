import React from 'react'
import {Container, Row,Col, Carousel, Jumbotron } from 'react-bootstrap';

export default function HomeComponent() {
    return (
        <>
         <Container fluid>
            <Jumbotron className="home-jumbotron">
                <Row className="">

                <Col md={6} className="">

                <h1>Welcome</h1>
                <p>
                    This platform is made for all your sales ananlysis needs. Hope you enjoy using this platform
                </p>
                <hr/>
                <p>
                Get all projections visualised in charts, making it easy the make sense of the data in the admin sectio. View your profile and a lot more just click the side menu and explore
                </p>
                </Col>

                <Col md={4} >
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block  home-img fluid"
                        src="assets/images/slider/001.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block home-img fluid"
                        src="assets/images/slider/002.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block  home-img fluid"
                    src="assets/images/slider/003.jpg"
                    alt="Third slide"
                    />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            </Jumbotron>
                

        </Container>  
        </>
    )
}
 