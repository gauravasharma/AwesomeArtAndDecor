import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Contact.css';

export default function Contact() {
    return (
        <Container className="contact-container">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="contact-card">
                        <Card.Body>
                            <Card.Title className="contact-title">Get In Touch</Card.Title>
                            <div className="contact-section">
                                <p className="contact-text">
                                    Please reach out at <strong>
                                        <a href="mailto:advikasharma2016@outlook.com?subject=AwesomeArtAndDecor" 
                                           target="_top" className="email-link">
                                            advikasharma2016@outlook.com
                                        </a>
                                    </strong> for placing your order.
                                </p>
                            </div>
                            <div className="payment-section">
                                <h5 className="payment-title">Payment Options</h5>
                                <div className="payment-option">
                                    <strong>PayPal:</strong> gaurava3@gmail.com
                                </div>
                                <div className="payment-option">
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