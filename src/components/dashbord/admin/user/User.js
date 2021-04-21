import React, { Component } from 'react';
import qs from 'querystring';

import axios from 'axios';

import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            currentUser: { id: null, email: '', username: '' , password: '' },
            editing: false,
            message: "",
            successful: false
        }
    }

    componentDidMount() {
        this.refreshUserTable();
    }

    refreshUserTable() {
        this.usersData = axios.get('http://localhost:8080/api/users')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    users: data.data,
                    setUsers: data.data
                });
            });
    }

    addUser = user => {
        axios.post('http://localhost:8080/api/auth/signup', qs.stringify(user))
            .then(
                response => {
                    this.refreshUserTable();
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
    };

    deleteUser = id => {
        axios.delete(`http://localhost:8080/api/users/${id}`)
            .then(res => {
                this.refreshUserTable();
            });
    };

    updateUser = (id, user) => {
        axios.put(`http://localhost:8080/api/users/${id}`, qs.stringify(user))
            .then(res => {

                this.refreshUserTable();
            });

        this.setState({
            currentUser: { id: null, email: '', username: '', password: '' }
        });

        this.setEditing(false);
    };

    editRow = user => {
        console.log("::::::::id");
        console.log(user._id);
        console.log(user);

        this.setState({
            currentUser: { id: user._id, email: user.email, username: user.username , password: user.password }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {

        console.log(":::::::" + this.state);

        const { users } = this.state;

        return (
            <div className="container">

                <div className="row">

                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                {/*<h4>Edit User</h4>*/}
                                <EditUserForm
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentUser={this.state.currentUser}
                                    updateUser={this.updateUser}
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                {/*<h4>Add user</h4>*/}
                                <AddUserForm addUser={this.addUser} />
                            </div>
                        )
                    }

                    <div className="col s12 l6">
                        <h5>Users</h5>
                        <UserTable users={users} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </div>
                </div>
            </div>
        );
    };
};

export default User;