import React, { useState } from 'react';
import { isEmail } from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const vname = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vcode = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const AddCitiesForm = props => {

    const initialFormState = { name: '', code:''};
    const [city, setCity] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setCity({ ...city, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!city.name || !city.code) return;

        props.addCity(city);
        setCity(initialFormState);
    };

    console.log("????????" + city);

    return (
        <div className="card-header">
            <h4 className="text-center">Add City</h4>

            <form className="col s12" onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={city.name}
                            onChange={handleInputChange}
                            required />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="code">Code</label>
                        <input
                            type="code"
                            name="code"
                            value={city.code}
                            onChange={handleInputChange}
                            required />
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn-outline-dark">Add</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddCitiesForm;