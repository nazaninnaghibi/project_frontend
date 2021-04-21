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

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const AddUserForm = props => {

    const initialFormState = { username: '', password:'', email:''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setUser({ ...user, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!user.username || !user.password || !user.email) return;

        props.addUser(user);
        setUser(initialFormState);
    };

    return (
          <div className="card-header">
              <h4 className="text-center">Add User</h4>

              <form className="col s12" onSubmit={submitForm}>
                  <div className="row">
                      <div className="input-field col s12">
                          <label htmlFor="email">Email</label>
                          <input
                              type="email"
                              name="email"
                              value={user.email}
                              onChange={handleInputChange}
                              validations={[required, email]}
                              required />
                      </div>
                  </div>

                  <div className="row">
                      <div className="input-field col s12">
                          <label htmlFor="username">Username</label>
                          <input
                              type="text"
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
                                 minLength="8"
                                 required/>
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

export default AddUserForm;