import Pizza from '../images/pizza.png'
import { Carousel } from 'react-bootstrap'


import FruitSalad from '../images/fruit-salad.jpg'
import HotDogs from '../images/hot-dogs.png'
function Specials(){
   
    
  
    return(
        <div className="bg-lime-300 justify-center ">
        <h1 className="text-center text-3xl font-bold font-sans  p-5">Our Specials</h1>
     
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {/* Adjust the width here */}
      <div style={{ width: '100%' ,marginBottom: '0'}}> {/* Change width to 50% or any fixed value */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
              style={{ maxHeight: '700px' }}  
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Sample text for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
              style={{ maxHeight: '700px' }}  
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Sample text for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
              style={{ maxHeight: '700px' }}  
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Sample text for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>





        </div>

        
    )
}
export default Specials