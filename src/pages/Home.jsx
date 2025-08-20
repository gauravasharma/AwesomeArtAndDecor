
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homepage from '../Images/homepage.png'
import Card from 'react-bootstrap/Card';
import mission from '../Images/mission.jpg'
import values from '../Images/values.jpg'
import culture from '../Images/culture.jpg'
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import React from 'react'
import ReactPlayer from 'react-player'
import PhotoAlbum from "react-photo-album";
import BirdArt from '../Images/BirdArt.jpg';
import Acquarium from '../Images/Acquarium.jpg';
import './Home.css';

export default function Home() {
    const photos = [
        { src: Acquarium, width: 400, height: 500 },
        { src: BirdArt, width: 400, height: 500 },
    ];
     return (
         <Container fluid className="home-container">
            <Row className="main-row">
                <Col xs={12} lg={8} className="left-column">
                    <Row className="hero-section">
                        <Col><Image src={homepage} className="hero-image" fluid/></Col>
                    </Row>
                    <Row className="cards-section">
                        <Col>
                            <Row className="cards-row">
                                <Col xs={12} md={4} className="card-col">
                                    <Card className="info-card">
                                        <Card.Img variant="top" src={mission} className="card-image" />
                                        <Card.Body>
                                            <Card.Title>Mission</Card.Title>
                                            <Card.Text className="card-text">
                                                "To offer wide range of handcrafted products."
                                            </Card.Text>
                                            <Card.Link href="#" className="card-link">Read more</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className="card-col">
                                    <Card className="info-card">
                                        <Card.Img variant="top" src={values} className="card-image" />
                                        <Card.Body>
                                            <Card.Title>Values</Card.Title>
                                            <Card.Text className="card-text">
                                                Be passionate and determined, and Pursue growth and learning.
                                            </Card.Text>
                                            <Card.Link href="#" className="card-link">Read more</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className="card-col">
                                    <Card className="info-card">
                                        <Card.Img variant="top" src={culture} className="card-image" />
                                        <Card.Body>
                                            <Card.Title>Culture</Card.Title>
                                            <Card.Text className="card-text">
                                                Customer-centric approach, integrity, innovation and celebrating success.
                                            </Card.Text>
                                            <Card.Link href="#" className="card-link">Read more</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={4} className="right-column">
                    <Stack className="sidebar-stack">
                        <div className="journey-section">
                            <Card className="section-card">
                                <Card.Body>
                                    <Card.Title>My Journey</Card.Title>
                                </Card.Body>
                            </Card>
                            <div className="video-container">
                                <ReactPlayer url='https://www.youtube.com/shorts/XcRveXEUvEo' width='100%' height='100%' className="react-player" />
                            </div>
                        </div>
                        <div className="bestsellers-section">
                            <Card className="section-card">
                                <Card.Body>
                                    <Card.Title>Best Sellers</Card.Title>
                                </Card.Body>
                            </Card>
                            <div className="photo-album-container">
                                <PhotoAlbum layout="rows" photos={photos} />
                            </div>
                        </div>
                    </Stack>
                </Col>
            </Row>
         </Container>
     );
}