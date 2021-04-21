import React, { Component } from "react";
import {contactUs} from "../../services/api";

class contactUsAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id:'',
            selectedOption: '',
            clearable: true,
            contacts: [],
        }
    }

    componentDidMount() {
        contactUs()
            .then(res => {
                this.setState({
                    contacts: res.data,
                })
            })
    }

    render() {

        console.log("::::::::::" + this.state.contacts);

        return (
            <div className="container">
                <header className="jumbotron">
                    <h1> List contacts us </h1>
                    <table className="table table-dark table-dark">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        {this.state.contacts.map((contact) => (
                            <tr>
                                <td>{contact.firstname}</td>
                                <td>{contact.lastname}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phonenumber}</td>
                                <td>{contact.message}</td>
                            </tr>
                        ))}
                    </table>
                </header>
            </div>
        );
    }
}

export default contactUsAdmin;
