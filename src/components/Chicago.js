import Bread from '../images/bread.jpg'
function Chicago(){
    return(
        <div className=' justify-center bg-red-400 mb-0'>
        <h1 className='p-5 flex justify-center'>Welcome to Little Lemon Chicago</h1>
        <div className='flex justify-center pb-5 '>
        <img src={Bread} alt='Bread' height={600} width={300} className='rounded-lg'/></div>
        <p className='pb-5 mb-0 flex justify-center'> Welcome to Little Lemon</p>
        </div>
        
    )
}
export default Chicago