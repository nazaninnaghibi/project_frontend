import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './FAQ.css'
import Footer from "../footer/Footer";
import 'bootstrap/dist/js/bootstrap.min'
import {faqs} from "../../services/api";
import axios from "axios";
import {Alert} from "react-bootstrap";

class Adminfaq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            id: '',
            faqs: [],
            message: '',
        }
    };

    componentDidMount() {
       this.callFaqsService();
    }

    callFaqsService = () => {
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

    onIdChange = e => {
        this.setState({
            id: e.target.value
        });
    };

    onAnswerChange = e => {
        this.setState({
            answer: e.target.value
        });
    };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     const data = {
    //         question: this.state.question,
    //         answer: this.state.answer
    //     };
    //     axios
    //         .post("http://localhost:8080/api/faq", data)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    //
    //     this.setState({
    //         question:  ''
    //     });
    // };

    handleSubmit = e => {
        console.log("::::::::1");
        e.preventDefault();
        const data = {
            question: this.state.question,
            answer: this.state.answer
        };
        const id = this.state.id;

        console.log(":::::::::::: ||||||" + this.state.id);
        console.log(":::::::::::: ||||||" + id);
        axios
            .put(`http://localhost:8080/api/faq/${id}`, data)
            // .then(res => this.setState({ result: ""}))
            .then((response) => {
                console.log(response);
                this.callFaqsService();
                this.setState({ message: "" })
                this.setState({ answer: "" })
            })
            .catch(error => this.setState({ message: error.response.data.message }));

    };

    render() {
        // console.log("::::::::::" + this.state.faqs);

        return (
            <div>
                <div className="card">
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

                                <hr className="my-3" />
                                {this.state.message && (
                                    <Alert color="danger" className="text-center">
                                        {this.state.message}
                                    </Alert>
                                )}
                                   <form  className="post" id="create-course-form" onSubmit={this.handleSubmit}>
                                       <div className="form-group">
                                           <label>Example label</label>
                                           <textarea className="form-control"
                                                     placeholder="answer"
                                                     value={this.state.answer}
                                                     onChange={this.onAnswerChange}
                                           />
                                           <a  value={this.state.id = faq._id}/>
                                           <a  value={this.state.question = faq.question}/>
                                           {/*    <a className="btn btn-info">send</a>*/}
                                           <input type="submit" value="send" className="input-submit button1"/>
                                       </div>
                                   </form>

                            </div>
                       </tr>
                    ))}

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Adminfaq;