import Logo from '../images/logo.jpg'
function Nav(){
 return(
    <>
    <div className='flex  justify-between'>
    <div className='flex justify-start pl-10'>
    <img src={Logo} alt='logo' width="250" height="150"/>
    </div>
   
    <ul className="list-none text-black flex flex-row justify-center space-x-20 p-5 bg-white ">
        <li className=' '>
            Home
        </li>
        <li>Specials</li> 
        <li>
            Chicago
        </li>
        <li>
            Ratings
        </li>
        <li>Bookings</li>
    </ul>
    <div className=' justify-end pt-3 pr-10 '><button className='bg-sky-500 p-2 rounded-full text-white hover:bg-green-600'>Book Now!  </button></div>
    </div>
    </>
 )
}
export default Nav