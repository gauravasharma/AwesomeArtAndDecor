import Container from 'react-bootstrap/Container';
import PhotoAlbum from "react-photo-album";
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
  return (
    <Container className="gallery-container">
      <div className="gallery-content">
        <PhotoAlbum layout="masonry" photos={photos} />
      </div>
    </Container>
  );
}