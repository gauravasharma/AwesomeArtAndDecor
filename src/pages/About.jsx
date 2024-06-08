import Figure from 'react-bootstrap/Figure';
import AboutImg from '../Images/AboutImg.jpg';

export default function About() {
    return (
        <Figure>
          <Figure.Image
            width={800}
            height={300}
            src={AboutImg}
          />
          <Figure.Caption>
          I'm Advika, and welcome to Awesome Art and Decor.
          Within these virtual walls, you'll find a curated collection of handmade arts and crafts, each a labor of love crafted by my own hands.
          Artistry has always been my sanctuary, a place where time slows and creativity flows unhindered.
          I owe much of my journey to my parents, kindred spirits in the realm of art, whose unwavering support has been my greatest treasure.
          As my venture flourishes, so too does my ambition. Every penny earned is a brushstroke towards new artistic horizons and the expansion of my creative enterprise.
          I trust you'll find delight in exploring my offerings here. Thank you for joining me on this artistic odyssey.
  
          </Figure.Caption>
        </Figure>
      );
  }