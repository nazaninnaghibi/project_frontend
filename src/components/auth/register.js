import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Logo from '../../img/img_avatar2.png'
import './Login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password } = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/user',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
      let decodeduser = decode(response.data.token);
      console.log(decodeduser);
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <div>
        <div className="fadeIn first">
            <img class="pic" src={Logo} id="icon2" alt="User Icon"/>
        </div>
      <p>Create Your Account</p>
      <div className="container w-50  mt-3">
      <form onSubmit={(e) => onSubmit2(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type='text'
            placeholder='Name'
            name='name'
            required
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div>
          <input
            className="form-control"
            type='password'
            placeholder='Password'
            name='password'
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>&nbsp;
        <div>
          <input
            className="form-control"
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>&nbsp;&nbsp;
        <input type='submit' value='Register' />
        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Register;
