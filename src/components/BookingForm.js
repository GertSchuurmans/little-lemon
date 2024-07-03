import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function BookingForm() {
    const {formValues, setFormValues, availableTimes, submitForm} = useContext(FormContext);

    const onChangeHandler = (newValues) => {
        setFormValues(newValues);
    }

    const availableTimesOptions = availableTimes.map(time => {
        return (<option key={time}>{time}</option>);
    })

    const formComplete = () => {
        return formValues.date && formValues.time && formValues.name && formValues.email;
    }

    return (
        <>
            <h1 className="compact">Book a table</h1>
            <form className="book-form compact" onSubmit={submitForm}>
                <label htmlFor="res-date">Choose date</label>
                <input required type="date" id="res-date" value={formValues.date}
                    onChange={(e) => {
                        onChangeHandler({ ...formValues, date: e.currentTarget.value });
                    }}
                />

                <label htmlFor="res-time">Choose time</label>
                <select disabled={!formValues.date} required id="res-time" value={formValues.time} onChange={(e) => onChangeHandler({ ...formValues, time: e.currentTarget.value })}>
                    {availableTimesOptions}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input required type="number" placeholder="1" min="1" max="10" id="guests" value={formValues.guests} onChange={(e) => onChangeHandler({ ...formValues, guests: e.currentTarget.value })}/>

                <label htmlFor="occasion">Occasion</label>
                <select required id="occasion" value={formValues.occasion} onChange={(e) => onChangeHandler({ ...formValues, occasion: e.currentTarget.value })}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <label htmlFor="name">Name</label>
                <input required minLength="2" maxLength="50" type="text" id="name" value={formValues.name} onChange={(e) => onChangeHandler({ ...formValues, name: e.currentTarget.value })}/>

                <label htmlFor="email">Email address</label>
                <input required type="email" id="email" value={formValues.email} onChange={(e) => onChangeHandler({ ...formValues, email: e.currentTarget.value })}/>

                <input title={formComplete() ? "Submit reservation" : "Not all fields have been filled in"} aria-label="Submit reservation" disabled={!formComplete()} type="submit" value="Make Your Reservation"/>
            </form>
        </>
    );
}

export default BookingForm;