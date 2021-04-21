import React from 'react';

const UserTable = props => (
  
    <table className="table table-hover">
        <thead>
            <tr>
                {/*<th>id</th>*/}
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
    <tbody>
        {
            props.users.length > 0 ? (
                props.users.map (user => (

                    <tr key={user.id}>
                        {/*<td>{user._id}</td>*/}
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(user)}>
                                edit
                            </button>

                            <button
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteUser(user._id)}>
                                delete
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.users[0]} No Users</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default UserTable;