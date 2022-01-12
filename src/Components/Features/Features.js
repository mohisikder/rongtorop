import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div className='py-5'>
            <div className='mt-5'>
                <h1>Features</h1>
                <div style={{width:'120px', height:'8px', margin:'0 auto'}}> <hr/></div>
                <p className='my-4'>Why we are ready</p>
            </div>
            <Container>
                <Row style={{margin:'a auto', textAlign:'center'}}>
                    <Col xs='1' md='4'>
                        <div style={{border:'2px solid white', padding:'50px 0', textAlign:'center'}}>
                            <span className='fs-4'><i class="far fa-thumbs-up"></i></span>
                            <h3 className='mt-3'>Certified Expert</h3>
                        </div>
                    </Col>
                    <Col xs='1' md='4'>
                        <div style={{border:'2px solid white', padding:'50px 0', textAlign:'center'}}>
                            <span className='fs-4'><i class="fas fa-shield-alt"></i></span>
                            <h3 className='mt-3'>Short Time Processing</h3>
                        </div>
                    </Col>
                    <Col xs='1' md='4'>
                        <div style={{border:'2px solid white', padding:'50px 0', textAlign:'center'}}>
                            <span className='fs-4'><i class="fas fa-headphones-alt"></i></span>
                            <h3 className='mt-3'>Certified Expert</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Features;