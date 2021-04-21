import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    };

    const submitForm = event => {
        console.log("============" + user.id)
        event.preventDefault();

        props.updateUser(user.id, user);
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    console.log("-----------------" + user);

    return (
        <div className="card-header">
            <h4 className="text-center">Edit User</h4>

            <form className="col s12"
                  onSubmit={submitForm}>

                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            required />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                               id={user.id}
                               name="username"
                               value={user.username}
                               onChange={handleInputChange}
                               required />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="pass"
                               name="password"
                               value={user.password}
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

export default EditUserForm;
