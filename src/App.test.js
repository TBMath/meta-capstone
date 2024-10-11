import { render, screen } from '@testing-library/react';
import App from './App';

import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})
// tito you need to write a bunch of unit tests or your done for lil bro
// just put the fries in the bag