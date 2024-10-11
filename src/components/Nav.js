import Logo from '../images/logo.jpg'
function Nav(){
 return(
    <>
    
    
  
    
    <nav className='flex items-center justify-between p-4'>
    <div className='flex items-center'><img src={Logo} alt='logo' className='h-10 w-30 mr-2'/></div>
    <ul className="flex space-x-8 pr-18">
        <li className=''>
            Home
        </li>
        <li>Specials</li> 
        <li>
            About Us
        </li>
        <li>
            Ratings
        </li>
    
    </ul>
    <div className=''><button className='bg-blue-500 text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-green-500 transition-colors duration-300'><a href='/booking' className='text-white no-underline'>Book Now!</a></button></div></nav>
    </>
 )
}
export default Nav