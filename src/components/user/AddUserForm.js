import React, { useState } from 'react';

const AddUserForm = props => {

    const initialFormState = { username: '', email: '', password: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {username, value} = event.target;

        setUser({ ...user, [username]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!user.username || !user.email || !user.password) return;

        props.addUser(user);
        setUser(initialFormState);
    };

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleInputChange}
                            required />
                        <label htmlFor="username">Username</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input
                            type="text"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                            required />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;
