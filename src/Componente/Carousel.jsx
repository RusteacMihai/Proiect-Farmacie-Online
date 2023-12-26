import Carousel from 'react-bootstrap/Carousel';
import  MediumShotPharmacistWorking from "../Media/Imagini/medium-shot-pharmacist-working.jpg"
import CarrrouselImage2 from "../Media/Imagini/8935971.jpg"
import CarrouselImage3 from "../Media/Imagini/8559887.jpg"
import "../Componente/Carrousel.style.css"

function DarkVariantExample() {
  return (
<div className='ContainerPrincipalCarrousel'>
 
    <div className='CarrouselContainer' >
    <Carousel data-bs-theme="dark" >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={ MediumShotPharmacistWorking}
          alt="First slide"
     
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarrrouselImage2}
          alt="Second slide"
          
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarrouselImage3}
          alt="Third slide"
         
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default DarkVariantExample;