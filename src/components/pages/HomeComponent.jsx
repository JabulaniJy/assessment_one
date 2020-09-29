import React from 'react'
import {Container, Row,Col, Carousel, Jumbotron } from 'react-bootstrap';

export default function HomeComponent() {
    return (
        <>
         <Container fluid>
            <Jumbotron>
            <Row className="">

                <Col md={6} className="">

                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                </Col>

                <Col md={4} >
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 fluid"
                        src="assets/images/slider/001.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 fluid"
                        src="assets/images/slider/002.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100 fluid"
                    src="assets/images/slider/003.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>

            </Jumbotron>
                

        </Container>  
        </>
    )
}
 