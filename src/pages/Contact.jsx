import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Contact.css';

export default function Contact() {
    return (
        <Container className="contact-container">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={10}>
                    <Card className="contact-card">
                        <Card.Body>
                            <Card.Title className="contact-title">Get In Touch</Card.Title>
                            <div className="contact-section">
                                <p className="contact-text">
                                    🎨 Ready to create something AWESOME? Let's make your room super cool with amazing art! 
                                    Send us a message at <strong>
                                        <a href="mailto:advikasharma2016@outlook.com?subject=I%20Want%20Awesome%20Art!" 
                                           target="_top" className="email-link">
                                            advikasharma2016@outlook.com
                                        </a>
                                    </strong> and tell us what fun decorations you'd like for your space! ✨
                                </p>
                            </div>
                            <div className="payment-section">
                                <h5 className="payment-title">Payment Options</h5>
                                <div className="payment-option">
                                    <i className="fab fa-paypal payment-icon"></i>
                                    <strong>PayPal:</strong> gaurava3@gmail.com
                                </div>
                                <div className="payment-option">
                                    <i className="fas fa-money-bill-wave payment-icon"></i>
                                    <strong>Venmo:</strong> Gaurava-Sharma
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}