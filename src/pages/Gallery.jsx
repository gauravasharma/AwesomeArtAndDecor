import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import PhotoAlbum from "react-photo-album";
import React, { useState } from 'react';
import BirdArt from '../Images/BirdArt.jpg';
import Acquarium from '../Images/Acquarium.jpg';
import IMG_4660 from '../Images/IMG_4660.jpg'
import IMG_4662 from '../Images/IMG_4662.jpg'
import IMG_4663 from '../Images/IMG_4663.jpg'
import IMG_4666 from '../Images/IMG_4666.jpg'
import IMG_4667 from '../Images/IMG_4667.jpg'
import IMG_4669 from '../Images/IMG_4669.jpg'
import IMG_4671 from '../Images/IMG_4671.jpg'
import IMG_4673 from '../Images/IMG_4673.jpg'
import IMG_4674 from '../Images/IMG_4674.jpg'
import IMG_4675 from '../Images/IMG_4675.jpg'
import './Gallery.css';


const photos = [
  { src: Acquarium , width: 400, height: 400 },
  { src: BirdArt , width: 150, height: 200 },
  { src: IMG_4660 , width: 400, height: 400 },
  { src: IMG_4662 , width: 150, height: 200 },
  { src: IMG_4663 , width: 400, height: 400 },
  { src: IMG_4675 , width: 150, height: 150 },
  { src: IMG_4667 , width: 400, height: 400 },
  { src: IMG_4669 , width: 150, height: 200 },
  { src: IMG_4671 , width: 400, height: 400 },
  { src: IMG_4673 , width: 150, height: 200 },
  { src: IMG_4674 , width: 400, height: 400 },

  { src: IMG_4666 , width: 150, height: 200 },
];

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = ({ photo }) => {
    setSelectedImage(photo.src);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <Container className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-header">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-subtitle">Discover our collection of handcrafted art and decor</p>
          <div className="gallery-divider"></div>
        </div>
        <PhotoAlbum 
          layout="masonry" 
          photos={photos} 
          onClick={handleImageClick}
        />
      </div>
      
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg" 
        centered
        className="image-modal"
        backdrop={true}
        keyboard={true}
      >
        <Modal.Body className="p-0" onClick={handleClose}>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery item" 
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}