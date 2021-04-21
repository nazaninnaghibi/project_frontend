import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../img/img_avatar2.png'
import './Login.css'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const { email, password } = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let formValid = true;
    let emailPattern = /^[a-zA-Z0-9]*$/;

    if(email == ''){
      formValid = false;
      setEmailError('please enter valid email');
    }else if(!email.match(emailPattern)){
      formValid = false;
      setEmailError('enter a valid email format');
    }else{
      formValid = true;
      setEmailError('');
    }

    if(formValid){
    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
    } catch (e) {
      console.log('error ', e);
    }
  }
};
  return (
    <div>
    <div className="mt-3">

        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={Logo} id="icon" alt="User Icon"/>
                </div>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <form onSubmit={(e) => onSubmit2(e)}>
        <div>
          <input
            class="ema"
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange2(e)}
          />
          {emailError && <p style={{color:'red'}}>{emailError}</p>}
        </div>
        <div>
          <input
            class="ema"
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
      <p>
        <Link to='/register'>Register</Link>
      </p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Login;

