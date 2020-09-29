import React from 'react'
import {Container, Row,Col, Image,ListGroup,Card, Button, } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

export default function AdminComponent() {
    return (
        <>
            <Container>
                <Row>   
                    <Card style={{ width: '18rem' }} className="m-4">
                        <Card.Body className="text-center">
                            <Card.Title><FaIcons.FaMizuni size={50}/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Manage projections</Card.Subtitle>

                            <Button>Manage</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}  className="m-4">
                        <Card.Body className="text-center">
                            <Card.Title><FaIcons.FaBlog size={50}/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Write to blog</Card.Subtitle>

                            <Button>Blog</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}  className="m-4">
                        <Card.Body className="text-center">
                            <Card.Title><FaIcons.FaLock size={50}/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Manage profiles</Card.Subtitle>

                            <Button>Profiles</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
