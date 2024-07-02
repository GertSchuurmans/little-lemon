import { useState } from "react";

const availableTimes = [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function BookingForm() {
    const [formValues, setFormValues] = useState({date: "", time: "17:00", guests: 1, occasion: "Birthday"});

    const onChangeHandler = (newValues) => {
        console.log(newValues);
        setFormValues(newValues);
    }

    const availableTimesOptions = availableTimes.map(time => {
        return (<option>{time}</option>);
    })

    return (
        <form className="compact" style={{display: "grid", "maxWidth": "400px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={formValues.date} onChange={(e) => onChangeHandler({ ...formValues, date: e.currentTarget.value })}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={formValues.time} onChange={(e) => onChangeHandler({ ...formValues, time: e.currentTarget.value })}>
                {availableTimesOptions}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formValues.guests} onChange={(e) => onChangeHandler({ ...formValues, guests: e.currentTarget.value })}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formValues.occasion} onChange={(e) => onChangeHandler({ ...formValues, occasion: e.currentTarget.value })}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}

export default BookingForm;