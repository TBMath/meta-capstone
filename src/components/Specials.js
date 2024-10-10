import Pizza from '../images/pizza.png'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'

import FruitSalad from '../images/fruit-salad.jpg'
import HotDogs from '../images/hot-dogs.png'
function Specials(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return(
        <div className="bg-lime-300 justify-center ">
        <h1 className="text-center text-3xl font-bold font-sans  p-5">Our Specials</h1>
       






        </div>

        
    )
}
export default Specials