import Footer from "../components/Footer"
import {  useReducer,useState } from "react"
import fetchAPI from "../api/fetchAPI"

import Nav from "../components/Nav"
import BookingForm from "../components/BookingForm"

function BookingPage(){
    
    
    const today = new Date();

    // Get the day, month, and year
   const day =today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based, so we add 1
    const year = today.getFullYear();
   const currentDate = `${year}-${month}-${day}`
    var [date, setDate] = useState('yyyy-mm-dd')
    var updateTimes = (state,action) => {
        if (action.type === date) return {times: fetchAPI(date) }
        return state
    }
    var initializeTimes = {times:fetchAPI(currentDate)}
    var [state, dispatch] = useReducer(updateTimes,initializeTimes)
    var [guests,setGuests] = useState(undefined)
    var [name,setName] = useState("")
    var [time,setTime] = useState(undefined)
    var [o,setO] = useState("")
  

   
    return(
        <>
        <Nav/> 
        <BookingForm dispatch={dispatch} state={state} date={date} setDate={setDate} guests={guests} setGuests={setGuests} name={name} setName={setName} time={time} setTime={setTime} o={o} setO={setO} />
        <Footer/>
        </>
    )
}
export default BookingPage