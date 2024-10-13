import { useNavigate } from 'react-router-dom';
import submitAPI from "../api/submitAPI";
import Card from 'react-bootstrap/Card';

function BookingForm({ dispatch, state, date, setDate, guests, setGuests, name, setName, time, setTime, o, setO }) {
  async function submitForm(formData) {
    return await submitAPI(formData); // Assuming this returns a boolean
  }

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

  const formData = { date: date, guests: guests, name: name, time: time, occasion: o };
  const navigate = useNavigate();

  var options = state.times.map((time, index) => (
    <option key={index} value={time}>
      {time}
    </option>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const isSuccess = await submitForm(formData); // Wait for submitForm result
    if (isSuccess) {
      navigate("/booking-confirmation"); // Only navigate if submitForm returns true
    } else {
      console.log("Form submission failed");
      // Handle failure (e.g., show error message)
    }
  };

  return (
    <div className="flex justify-center py-3 bg-slate-400">
     
      <form className="grid max-w-52 gap-3 font-bold" onSubmit={handleSubmit}>
        <label htmlFor="res-text">Booking Name</label>
        <input type="text" placeholder="Your First Name" onChange={(e) => setName(e.target.value)} value={name} required/>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleChanged} value={date} onClick={() => dispatch({ type: date })} required/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={handleChange} required>
          <option value="">Select your option</option>
          {options}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" value={guests} id="guests" onChange={handleChangen} required/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleChangeO} value={o} required>
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
              <p>By the way, the form won't submit unless you fill out everything.</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <button type="submit" className="bg-sky-400 rounded-full hover:ring-4 hover:ring-blue-600 p-1 mt-2">
          Make Your Reservation
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
