import {Card, Col, Container, Row} from 'react-bootstrap'
import morbiusImage from '../assets/images/trending/morbius.jpeg'
import duneImage from '../assets/images/trending/dune.jpeg'
import everythingImage from '../assets/images/trending/everything.jpeg'
import infiniteImage from '../assets/images/trending/infinite.jpeg'
import jokerImage from '../assets/images/trending/joker.jpeg'
import lightyearImage from '../assets/images/trending/lightyear.jpeg'

const Trending = () => {
    return (
        <div className="pb-4" id="trending">
            <Container className="gap-4">
                <h2 className="text-white py-4">TRENDING FILM</h2>
                <Row className="row">
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={morbiusImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={duneImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={everythingImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={infiniteImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={jokerImage} alt="Card image" className="movie-image" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-dark movie-card">
                            <Card.Img src={lightyearImage} alt="Card image" className="movie-image" />
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

export default Trending;