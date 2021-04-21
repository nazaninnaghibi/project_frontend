import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { username, value } = event.target

        setUser({ ...user, [username]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateUser(user.id, user);
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id={user.id} 
                            name="username"
                            value={user.username}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="username"></label>
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
                        <label htmlFor="email"></label>
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
                        <label htmlFor="password"></label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Update</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;
