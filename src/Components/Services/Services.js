import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Features from '../Features/Features';

const Services = () => {
    return (
        <div className='py-5' style={{background:'#FFC300'}}>
            <div className='mt-5'>
                <h1>List of laundries</h1>
                <div style={{width:'120px', height:'8px', margin:'0 auto'}}> <hr/></div>
                <p className='my-4'>Your favorite laundry list</p>
            </div>
            <Container>
                <Row xs={1} md={6} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                        <Card>
                            <a href='#'>
                                <Card.Img variant="top" src="http://portal.rongtorop.com/uploads/laundry/1024.png" />
                                <Card.Body>
                                <Card.Title>Rongtorop</Card.Title>
                                </Card.Body>
                            </a>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Features/>
        </div>
    );
};

export default Services;