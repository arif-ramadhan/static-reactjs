import React from 'react';import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="d-flex justify-content-end align-items-end intro">
          <Container className="text-white d-flex justify-content-center align-items-center text-center">
              <Row>
                <Col>
                  <h1 className="title">NONTON GRATISAN</h1>
                  <h1 className="title">GAK PAKE BAYAR</h1>
                  <Button className="mt-4" variant="dark" href='#trending'>Lihat Semua List</Button>
                </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Intro;