import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './Login.css';

export default function Login() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const signInWithGoogle = async () => {
        setLoading(true);
        // Mock Google sign-in for demonstration
        setTimeout(() => {
            setUser({
                displayName: 'Demo User',
                email: 'demo@example.com',
                photoURL: 'https://via.placeholder.com/80x80/667eea/ffffff?text=DU'
            });
            setLoading(false);
        }, 1500);
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Card className="login-card">
                        <Card.Body>
                            <Card.Title className="login-title">
                                🎨 Welcome to Awesome Art & Decor
                            </Card.Title>
                            
                            {!user ? (
                                <div className="login-section">
                                    <p className="login-text">
                                        Sign in to access exclusive features and personalized content!
                                    </p>
                                    <Button 
                                        variant="primary" 
                                        className="google-signin-btn"
                                        onClick={signInWithGoogle}
                                        disabled={loading}
                                    >
                                        <i className="fab fa-google"></i>
                                        {loading ? ' Signing in...' : ' Sign in with Google'}
                                    </Button>
                                </div>
                            ) : (
                                <div className="user-section">
                                    <div className="user-info">
                                        <img 
                                            src={user.photoURL} 
                                            alt="Profile" 
                                            className="user-avatar"
                                        />
                                        <h5>Welcome, {user.displayName}!</h5>
                                        <p className="user-email">{user.email}</p>
                                    </div>
                                    <Button 
                                        variant="outline-secondary" 
                                        onClick={signOut}
                                        className="signout-btn"
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}