import Bread from '../images/bread.jpg'
function Chicago(){
    return(
        <div className=' justify-center bg-red-400 mb-0' id='about-us'>
        <h1 className='p-5 flex justify-center'>Welcome to Little Lemon Chicago</h1>
        <div className='flex justify-center pb-5 '>
        <img src={Bread} alt='Bread' height={600} width={300} className='rounded-lg'/></div>
        <p className='pb-5 px-5  mb-0 flex justify-center'> In the heart of Chicago, Little Lemon was born from Sofia and Marco’s love for Mediterranean flavors. They dreamed of bringing a taste of their homeland to the city, with a special twist—every dish had a touch of lemon, inspired by the lemon trees of their village.

At first, the restaurant was quiet, but Sofia and Marco worked hard, perfecting their menu and welcoming each customer like family. Their big break came when a local food blogger tried the Lemon Chicken Piccata and wrote a rave review. The next day, people lined up outside, eager to experience the fresh, zesty dishes.

As the restaurant's popularity grew, Little Lemon became a Chicago favorite, known for its unique flavors and cozy atmosphere. Marco and Sofia’s simple dream blossomed into a beloved neighborhood spot, where every dish celebrated the brightness of lemon and the warmth of family tradition.</p>
        </div>
        
    )
}
export default Chicago