import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './ContactUs.css'
import Footer from "../footer/Footer";
import axios from 'axios';
import Link from "@material-ui/core/Link";
import { NavLink } from 'react-router-dom'
import {Alert} from "react-bootstrap";

class ContactUs extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: '',
        result: "",

    };

    onFirstnameChange = e => {
        this.setState({
            firstname: e.target.value
        });
    };

    onLastnameChange = e => {
        this.setState({
            lastname: e.target.value
        });
    };

    onEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    onPhonenumberChange = e => {
        this.setState({
            phonenumber: e.target.value
        });
    };


    onMessageChange = e => {
        this.setState({
            message: e.target.value
        });
    };

    cancelCourse = () => {
        document.getElementById("create-course-form").reset();
    }

    handleSubmit = e => {
        console.log("::::::::");
        e.preventDefault();
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            message: this.state.message
          };
        axios
            .post("http://localhost:8080/contactus", data)
            .then(res => this.setState({ result: "" ,   firstname:  '' , lastname:  '' , email: '' , phonenumber: '' , message: ''}))
            .catch(error => this.setState({ result: error.response.data.message }));

            // .catch(function (error) {
                // if (error.response.status === 400) {
                // }
            // });

        // .catch(error => console.log(error.response));
        // .catch(error => console.log(error.response.data.message));


        // .catch(error => this.setState({ result: "Values is not Empty!" }));

        // e.preventDefault();
        // const firstname = this.state.firstname;
        // this.props.onFirstnameChange(firstname);

        // this.setState({[event.target.firstname]: event.target.firstname});
        // this.setState({
        //     firstname:  '' , lastname:  '' , email: '' , phonenumber: '' , message: ''
        // });
    };

    render() {
        return (
            <div className="ContactUs">
                <section id="contact" className="py-3">
                    <div className="container">

                        {/*<NavLink to="/contactUsAdmin"> Contact Us Admin </NavLink>*/}

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h4 className="m-2">Cantact Us</h4>
                                        <p>Have a specialist contact you to find automated solutions to help your business see spending clearly and manage it proactively.</p>
                                        <h4 className="m-2">Address</h4>
                                        <p >Toronto</p>
                                        <h4 className="m-2">Email</h4>
                                        <p>test@test.com</p>
                                        <h4 className="m-2">Phone</h4>
                                        <p>(555) 555-5555</p>
                                        <h4 className="m-2">working time</h4>
                                        <p> 7 days a week 8 to 7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h3 className="text-center">Please fill out this form to contact us</h3>

            <div className="post">
                <hr className="my-3" />
                {this.state.result && (
                    <Alert color="danger" className="text-center">
                        {this.state.result}
                    </Alert>
                )}

                <form className="post" id="create-course-form" onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                    <input
                        placeholder="firstname"
                        value={this.state.firstname}
                        onChange={this.onFirstnameChange}
                        // todo firstname not number
                    />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                    <input
                        placeholder="lastname" value={this.state.lastname}
                        onChange={this.onLastnameChange}
                        // todo firstname not number

                    />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                    <input
                        placeholder="email" value={this.state.email} type="text"
                        onChange={this.onEmailChange}
                    />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                    <input
                        placeholder="phonenumber"
                        type="phone"
                        // todo phone number
                        value={this.state.phonenumber}
                        onChange={this.onPhonenumberChange}
                    />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                    <textarea className="form-control"
                        placeholder="message" value={this.state.message}
                        onChange={this.onMessageChange}
                    />
                            </div>
                        </div>
                        <div className="col-md-12">
                    <button
                        // onClick={this.cancelCourse}
                        className="btn btn-outline-danger btn-block"
                        type="submit"
                    >Create Post</button>
                    </div>
                    </div>
                </form>
            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        );
    }
}

export default ContactUs;