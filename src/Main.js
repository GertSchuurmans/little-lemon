import { FormContext } from "./FormContext";
import { useState, useEffect } from "react";


function Main({children}) {
    const [formValues, setFormValues] = useState({date: "", time: "17:00", guests: 1, occasion: "Birthday"});
    const [apiTimes, setApiTimes] = useState([]);

    useEffect(() => {
        if (window.fetchAPI !== undefined) {
            setApiTimes(window.fetchAPI(new Date(formValues.date)));
        }
    }, [formValues.date]);

    return (
        <main>
            <FormContext.Provider value={{formValues, setFormValues, availableTimes: apiTimes}}>
                {children}
            </FormContext.Provider>
        </main>
    );
}

export default Main;