import React, { Component } from "react";
import {users} from "../../services/api";
import {deleteUser} from "../../services/api";

class BoardAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id:'',
            selectedOption: '',
            clearable: true,
            users: [],
        }
    }

    componentDidMount() {
        users()
            .then(res => {
                this.setState({
                    users: res.data,
                })
            })
    }

    componentDeleted(id){
        deleteUser(id)
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h1> List Users </h1>
                    <table className="table table-dark table-dark">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        {this.state.users.map((user) => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={ () => this.componentDeleted(user._id) } >Remove</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </header>
            </div>
        );
    }
}

export default BoardAdmin;
