import { useState } from 'react';

export const useForm = ( initialValues = {}, validate = () => {}, sucessCB = () => {}, errorCB = () => {}) => {
    const [values, setValues] = useState({
        ...initialValues
    });
    const [ responseStatusCode, setResponseStatusCode ] = useState(undefined);
    const [response, setResponse] = useState({});
    const [errors, setErrors] = useState({
        error: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { type, name } = e.target;
    
        const getValue = () => {
            if (type === 'checkbox') {
                return e.target.checked;
            }
            else if (type === 'select-multiple') {
                return Array.from(e.target.selectedOptions)
                    .map(o => o.value);
            }

            return e.target.value;
        }
        const value = getValue();
        setErrors({
            ...errors,
            ...validate({param: name, value: value})
        });
        setValues({ ...values, [name]: value });
    };


    const handleSubmit = async (e, url, headerOptions = {}, method = "POST", cb) => {
            console.log(headerOptions)
            e.preventDefault();
            setIsLoading(true);
            let newValues = {
                name: values.name,
                occurence: values.occurence,
                endTime: values.endDate + " " + values.endTime,
                startTime: values.startDate + " " + values.startTime,
                pcId: values.pcId
            }
            const receivedResponse = await fetch(url,{
                                method: method,
                                headers: {
                                Accept: 'application/json',
                                "Content-Type": "application/json",
                                ...headerOptions
                                },
                                body: JSON.stringify(newValues),
                                
                            });
           
            cb();
           
            return;
    };

    return {
        values,
        setValues,
        handleChange,
        handleSubmit,
        responseStatusCode,
        response,
        errors,
        isLoading
    }
}
