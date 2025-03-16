import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([
        { Name: "akshay", Email: "akshaypatil6308@gmail.com", Age: 23 }
    ]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className="mb-3">
                    <Link to="/create" className="btn btn-success">Add +</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
