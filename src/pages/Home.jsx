
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homepage from '../Images/homepage.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mission from '../Images/mission.jpg'
import values from '../Images/values.jpg'
import culture from '../Images/culture.jpg'
import Stack from 'react-bootstrap/Stack';
import hyatt from '../Images/hyatt.png'
import sheraton from '../Images/sheraton.jpg'
import mariott from '../Images/mariott.jpg'
import Image from 'react-bootstrap/Image';

import React from 'react'
import ReactPlayer from 'react-player'
import PhotoAlbum from "react-photo-album";
import BirdArt from '../Images/BirdArt.jpg';
import Acquarium from '../Images/Acquarium.jpg';

export default function Home()
{
    const photos = [
        { src: Acquarium , width: 400, height: 500 },
        { src: BirdArt , width: 400, height: 500 },
      ];
     return (
         <>       
          <Container fluid>
            <Row style={{marginTop:'0.5rem'}}>
            <Col xs={16} md={12} lg={8} style={{marginRight: '-1rem'}}>
                <Row  className='h-40'>
                    <Col><Image src={homepage} width='100%' height='100%'/></Col>
                </Row>
                <Row  style={{paddingTop: '0.5rem'}}>
                    <Col>
                        <Stack direction="horizontal" gap={2}>
                           <div>
                                <Card style={{borderRadius: '0px',zIndex: '-2' }}>
                                <Card.Img variant="top" src={mission} height='170rem' style={{borderRadius: '0px'}} />
                                <Card.Body>
                                    <Card.Title>Misson</Card.Title>
                                    <Card.Text style= {{fontStyle:'italic', fontWeight:'300'}}>
                                    "To offer wide range of handcrafted products."
                                    </Card.Text>
                                    <Card.Link href="#" style={{color:'rgb(146 158 175)'}}>Read more</Card.Link>
                                </Card.Body>
                                </Card>
                           </div>
                           <div>
                                <Card style={{ borderRadius: '0px',zIndex: '-2' }}>
                                <Card.Img variant="top" src={values}  height='170rem' style={{borderRadius: '0px'}}/>
                                <Card.Body>
                                    <Card.Title>Values</Card.Title>
                                    <Card.Text style= {{fontStyle:'italic', fontWeight:'300',zIndex: '-1'}}>
                                    Be passionate and determined, and Pursue growth and learning.
                                    </Card.Text>
                                    <Card.Link href="#" style={{color:'rgb(146 158 175)'}}>Read more</Card.Link>
                                </Card.Body>
                                </Card>
                           </div>
                           <div>
                                <Card style={{borderRadius: '0px' ,zIndex: '-2'}}>
                                <Card.Img variant="top" src={culture} height='170rem' style={{borderRadius: '0px'}} />
                                <Card.Body>
                                    <Card.Title>Culture</Card.Title>
                                    <Card.Text style= {{fontStyle:'italic', fontWeight:'300'}}>
                                    Customer-centric approach, integrity, innovation and celebrating success.
                                    </Card.Text >
                                    <Card.Link href="#" style={{color:'rgb(146 158 175)'}}>Read more</Card.Link>
                                </Card.Body>
                                </Card>
                           </div>
                           
                        </Stack>

                   </Col>

                </Row>
            </Col>
            <Col>
                <Row style={{marginBottom: '0.5rem'}}>
                    <Col >
                    <Stack style={{paddingBottom:'0.5rem'}}>
                    <div>
                            <Card style={{  zIndex: '-1' ,borderRadius: '0px', backgroundColor:'#0f172a', color: 'white', fontFamily: 'Georgia, Times New Roman, Times, serif'}}>
                            <Card.Body>
                                <Card.Title >My Journey</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </div>
                    <div style={{paddingTop:'0.065rem'}}>
                      <ReactPlayer url='https://www.youtube.com/shorts/XcRveXEUvEo'  width='100%' playsinline='true' loop='true' controls='true'/>
                    </div>
                    </Stack>
                    <Stack>
                        <div>
                            <Card style={{  zIndex: '-1' ,borderRadius: '0px', backgroundColor:'#0f172a', color: 'white', fontFamily: 'Georgia, Times New Roman, Times, serif'}}>
                            <Card.Body>
                                <Card.Title >Best Sellers</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div style={{paddingTop:'0.5rem'}}>
                          <PhotoAlbum layout="rows" photos={photos}  />
                        </div>

                    </Stack>                       
                   </Col>
                </Row>

               
            </Col>
            </Row>         
            </Container>
         </>
     );
}