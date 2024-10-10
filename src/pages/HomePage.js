import Nav from "../components/Nav"
import CallToAction from "../components/CallToAction"
import Specials from "../components/Specials"
import Chicago from "../components/Chicago"
import Footer from "../components/Footer"
import CustomersSay from "../components/CustomersSay"
function HomePage(){
    return(
        <>
        <Nav/>
        <CallToAction/>
        <Specials/>
        <Chicago/>
        <CustomersSay/> 
        <Footer/>
        </>
       
    )
}
export default HomePage