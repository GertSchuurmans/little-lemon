import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
})

test('Inits available times', () => {
  window.fetchAPI = () => ["17:00","18:00","19:00","20:00","21:00"];
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const timeInput = screen.getByLabelText("Choose time");
  expect(timeInput).toBeInTheDocument();
  console.log(timeInput.childNodes.entries.length);
  expect(timeInput.children.length).toBe(5);
})

test('Correct available times', () => {
  window.fetchAPI = () => ["17:00","18:00","19:00","20:00","21:00"];

  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const timeInput = screen.getByLabelText("Choose time");
  expect(timeInput).toBeInTheDocument();
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeInTheDocument();
  window.fetchAPI = () => ["17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
  fireEvent.change(dateInput, { target: { value: "2024-07-07"}})
  expect(timeInput.children.length).toBe(7);
})

test('Form submit', () => {
  window.submitAPI = jest.fn();
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);
  expect(window.submitAPI).toHaveBeenCalledTimes(1);
})
