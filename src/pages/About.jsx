import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AboutImg from '../Images/AboutImg.jpg';
import './About.css';

export default function About() {
    return (
        <Container className="about-container">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <div className="about-content">
                        <Image
                            src={AboutImg}
                            className="about-image"
                            fluid
                        />
                        <div className="about-text">
                            <p>
                                I'm Advika, and welcome to Awesome Art and Decor.
                                Within these virtual walls, you'll find a curated collection of handmade arts and crafts, each a labor of love crafted by my own hands.
                            </p>
                            <p>
                                Artistry has always been my sanctuary, a place where time slows and creativity flows unhindered.
                                I owe much of my journey to my parents, kindred spirits in the realm of art, whose unwavering support has been my greatest treasure.
                            </p>
                            <p>
                                As my venture flourishes, so too does my ambition. Every penny earned is a brushstroke towards new artistic horizons and the expansion of my creative enterprise.
                                I trust you'll find delight in exploring my offerings here. Thank you for joining me on this artistic odyssey.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}