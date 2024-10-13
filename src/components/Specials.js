import Pizza from '../images/pizza.png'
import { Carousel } from 'react-bootstrap'


import FruitSalad from '../images/fruit-salad.jpg'
import HotDogs from '../images/hot-dogs.png'
function Specials(){
   
    
  
    return(
        <div className="bg-lime-300 justify-center " id='specials'>
        <h1 className="text-center text-3xl font-bold font-sans  p-5">Our Specials</h1>
     
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {/* Adjust the width here */}
      <div style={{ width: '100%' ,marginBottom: '0'}} className='text-black'> {/* Change width to 50% or any fixed value */}
        <Carousel className='text-black'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Pizza}
              alt="Pizza"
              height={400}
              width={800}
              style={{ maxHeight: '700px' }}  
            />
            <Carousel.Caption>
              <h3>Pizza</h3>
           
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HotDogs}
              alt="Second slide"
              style={{ maxHeight: '700px' }}  
              height={400}
              width={800}
            />
            <Carousel.Caption>
              <h3>Hot Dogs</h3>
           
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={FruitSalad}
              alt="Third slide"
              style={{ maxHeight: '700px' }}  
              height={400}
              width={800}
            />
            <Carousel.Caption>
              <h3>Fruit Salad</h3>
         
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>





        </div>

        
    )
}
export default Specials