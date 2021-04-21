import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './FAQ.css'
import Footer from "../footer/Footer";
import 'bootstrap/dist/js/bootstrap.min'
import picture from "../../img/FAQ.jpeg";
import axios from "axios";
import {faqs} from "../../services/api";
import {Alert} from "react-bootstrap";

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            message: "",
            faqs: []
        }
    };

    componentDidMount() {
        this.callFaqsService();
    }

    callFaqsService = () =>{
        this.callServiceFaqs();
    }

    callServiceFaqs(){
        faqs()
            .then(res => {
                this.setState({
                    faqs: res.data,
                })
            })
    }

    onQuestionChange = e => {
        this.setState({
            question: e.target.value
        });
    };

    onAnswerChange = e => {
        this.setState({
            answer: e.target.value
        });
    };

    handleSubmit = e => {
        console.log("::::::::");
        e.preventDefault();
        const data = {
            question: this.state.question,
            answer: this.state.answer
        };
        axios
            .post("http://localhost:8080/api/faq", data)
            // .then(res => this.setState({ message: "" }))
            .then((response) => {
                console.log(response.data.data);
                this.callFaqsService();
                this.setState({ message: "" })
            })
            .catch(error => this.setState({ message: "Question is not Empty!" }));
            // .catch(error => console.log(error.message));

        this.setState({
            question:  ''
        });
    };

    render() {
        // console.log("::::::::::" + this.state.faqs);
        console.log(":::::::::: " + this.state.message);

        return (
            <div>

                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto text-center">

                            </div>
                        </div>
                    </div>

                    <hr className="my-3" />
                    {this.state.message && (
                        <Alert color="danger" className="text-center">
                            {this.state.message}
                        </Alert>
                    )}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form4Example3">Question</label>
                            <textarea className="form-control"
                                      placeholder="message"
                                      value={this.state.question}
                                      onChange={this.onQuestionChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>

                </header>
                <div className="card ">
                    <div className="card-header">
                        Question | Answer
                    </div>

                    {this.state.faqs.map((faq) => (
                        <tr>
                            <div className="card-body">
                                <h5 className="card-title">User Question</h5>
                                <p className="card-text"><td>{faq.question}</td></p>
                            </div>
                            <div className="card-body">
                                    <h4 className="card-title">Admin Answer</h4>
                                <p className="card-text"><td>{faq.answer}</td></p>
                            </div>
                        </tr>
                    ))}

                </div>
                <Footer/>
            </div>
        );
    }
}

export default FAQ;