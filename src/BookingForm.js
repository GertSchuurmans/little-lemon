import { useContext } from "react";
import { FormContext } from "./FormContext";

function BookingForm() {
    const {formValues, setFormValues, availableTimes, dispatch} = useContext(FormContext);

    const onChangeHandler = (newValues) => {
        setFormValues(newValues);
    }

    const availableTimesOptions = availableTimes.map(time => {
        return (<option key={time}>{time}</option>);
    })

    return (
        <>
            <h1 className="compact">Book a table</h1>
            <form className="book-form compact">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={formValues.date}
                    onChange={(e) => {
                        onChangeHandler({ ...formValues, date: e.currentTarget.value });
                        dispatch(e.currentTarget.value);
                    }}
                />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={formValues.time} onChange={(e) => onChangeHandler({ ...formValues, time: e.currentTarget.value })}>
                    {availableTimesOptions}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={formValues.guests} onChange={(e) => onChangeHandler({ ...formValues, guests: e.currentTarget.value })}/>

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={formValues.occasion} onChange={(e) => onChangeHandler({ ...formValues, occasion: e.currentTarget.value })}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your Reservation"/>
            </form>
        </>
    );
}

export default BookingForm;