import { useState} from "react"
import Card from 'react-bootstrap/Card';
function BookingForm({dispatch, state, date, setDate}){
    const handleChange = (event) => {
        setTime(event.target.value); // Update the state with the selected option
      };
      const handleChangen = (event) => {
        setGuests(event.target.value); // Update the state with the selected option
      };
      const handleChanged = (event) => {
        setDate(event.target.value); // Update the state with the selected option
      };
      const handleChangeO = (event) => {
        setO(event.target.value); // Update the state with the selected option
      };
    var [guests,setGuests] = useState(undefined)
    var [name,setName] = useState("")
    var [time,setTime] = useState(undefined)
    var [o,setO] = useState("")
   var options = state.times.map((time, index) => <option  onChange={handleChange} key={index}>{time}</option>)

    
    return(
        
        <div className="flex justify-center py-3 bg-slate-400">
            
        <form className="grid max-w-52 gap-3 font-bold" onSubmit={(e)=> e.preventDefault()}>
        <label for="res-text">Booking Name</label>
        <input type="text" placeholder="Your First Name" onChange={(e)=> setName(e.target.value)} />
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date" onChange={handleChanged}  onClick={() => dispatch({type:date})}/>
   <label for="res-time">Choose time</label>
   <select id="res-time " onChange={handleChange}>
   <option value="">Select your option</option>
    {options}
   </select>
   <label for="guests" >Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" value={guests} id="guests" onChange={handleChangen}/>
   <label for="occasion">Occasion</label>
   <select id="occasion" onChange={handleChangeO}>
   <option value="">Select your option</option>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
  
   <Card style={{ width: '18rem' }}>
      <Card.Body>

        <Card.Title>{name}'s Booking</Card.Title>
       
        <Card.Text>
          <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guests}</p>
            <p>Occasion: {o}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <button className="bg-sky-400 rounded-full hover:ring-4 hover:ring-blue-600 p-1 mt-2"><input type="submit" value="Make Your reservation"/></button>
</form>
     
        </div>
    )
}
export default BookingForm 