import {Card, Col, Container, Row} from 'react-bootstrap'
import antmanImage from '../assets/images/superhero/antman.jpeg'
import avengerImage from '../assets/images/superhero/avenger.jpeg'
import batmanImage from '../assets/images/superhero/batman.jpeg'
import robinhoodImage from '../assets/images/superhero/robinhood.jpeg'
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpeg'
import supermanImage from '../assets/images/superhero/superman.jpeg'

const Superhero = () => {
    return (
        <div className="pb-4" id="superhero">
            <Container>
                <h2 className="text-white py-4">SUPERHERO FILM</h2>
                <Row className="row">
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={antmanImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={avengerImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={batmanImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={robinhoodImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={spidermanImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={supermanImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Superhero;