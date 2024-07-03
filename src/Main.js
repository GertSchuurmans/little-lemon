import { FormContext } from "./FormContext";
import { useReducer, useState } from "react";


function Main({children}) {
    const [formValues, setFormValues] = useState({date: "", time: "17:00", guests: 1, occasion: "Birthday"});

    function updateTimes(state, date) {
        if (date.includes("-07-") || date.includes("-08-")) {
            return [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
        }
        return [ "17:00", "18:00", "19:00", "20:00", "21:00"];
    }

    function initTimes() {
        return [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initTimes());

    return (
        <main>
            <FormContext.Provider value={{formValues, setFormValues, availableTimes, dispatch}}>
                {children}
            </FormContext.Provider>
        </main>
    );
}

export default Main;