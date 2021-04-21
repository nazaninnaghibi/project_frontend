import React, { Component } from "react";

import UserService from "../../services/user.service";
import Footer from "../footer/Footer";
import './Home.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import Button from "react-bootstrap/lib/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default class  Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
        <div>
          {/*<div className="container">*/}
          {/*  <header className="jumbotron">*/}
              {/*<h3>{this.state.content}</h3>*/}

            {/*</header>*/}
          {/*</div>*/}
          <section id="showcase" className="py-5">
            <div className="align-content-center">
              <div className="text-center">
                <p className="lead">Green Technology</p>
                <h1> Travel website </h1>
              </div>
            </div>
            <br/>
            <div>
              <div className="text-center">
                <Link to={"/fly"}>  <Button  variant="secondary">Flight </Button>{' '}</Link>
                <a>| </a>
                <Link to={"/hotel"}> <Button variant="secondary">Hotel</Button>{' '}</Link>
              </div>
            </div>

          </section>
              <Footer/>

        </div>
    );
  }
}
