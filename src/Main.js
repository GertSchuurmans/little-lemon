import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
import { useState, useEffect } from "react";


function Main({children}) {
    const [formValues, setFormValues] = useState({date: "", time: "", guests: 1, occasion: "Birthday"});
    const [apiTimes, setApiTimes] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        if (window.fetchAPI !== undefined) {
            setApiTimes(window.fetchAPI(new Date(formValues.date)));
        }
    }, [formValues.date]);

    const submitForm = (e) => {
        e.preventDefault();
        const success = window.submitAPI(formValues);
        if (success) {
            Navigate("/confirmation");
        }
    }

    return (
        <main>
            <FormContext.Provider value={{formValues, setFormValues, availableTimes: apiTimes, submitForm}}>
                {children}
            </FormContext.Provider>
        </main>
    );
}

export default Main;