import React, { Component } from 'react'
import ApiService from "../../services/UserApiService";
import {users} from "../../services/api";
import {deleteUserById} from "../../services/api";
import UserApiService from "../../services/UserApiService";

class UserManagement extends Component{

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        users()
            .then(res => {
                this.setState({
                    users: res.data,
                })
            })
    }

    deleteUser(id){
        UserApiService.deleteUser(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    // deleteUser(userId) {
    //     deleteUserById(userId)
    //         .then(res => {
    //             // console.log("|||||||||||||||||||||" + res);
    //             // this.setState({message : 'User deleted successfully.'});
    //             // const users = res.data;
    //             // this.setState({ users });
    //             // this.setState({users: this.state.users.filter(user => user.id !== userId)});
    //         })
    //
    // }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        console.log("@@@@0" + window.localStorage.getItem("userId"));
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {

        console.log("::::::::::::" + this.state.users);

        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addUser()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="hidden">Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.deleteUser(user._id)}> Delete</button>
                                        <button className="btn btn-success" onClick={() => this.editUser(user._id)} style={{marginLeft: '20px'}}> Edit</button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default UserManagement;