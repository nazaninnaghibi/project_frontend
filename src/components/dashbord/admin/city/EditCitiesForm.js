import React, { useState, useEffect } from 'react';

const EditCityForm = props => {
    const [city, setCity] = useState(props.currentCities);

    const handleInputChange = event => {
        const { name, value } = event.target

        setCity({ ...city, [name]: value })
    };

    const submitForm = event => {
        console.log("============" + city.id)
        event.preventDefault();

        props.updateCity(city.id, city);
    };

    useEffect(() => {
        setCity(props.currentCities);
    }, [props]);

    console.log("-----------------" + city);

    return (
        <div className="card-header">
            <h4 className="text-center">Edit City</h4>

            <form className="col s12"
                  onSubmit={submitForm}>

                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               id={city.id}
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
                            type="text"
                            name="code"
                            value={city.code}
                            onChange={handleInputChange}
                            required />
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn-outline-dark">Update</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button
                            className="waves-effect waves-light btn-outline-dark"
                            onClick={() => props.setEditing(false)}
                        >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditCityForm;
