import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [users])
    return (
        <div className='grid lg:grid-cols-3 mx-auto my-20'>
            {
                users.map(user =>
                    <div className='mx-auto mb-10' key={user.id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <div>
                                    <h1>User Name: {user.username}</h1>
                                    <h1>User Email: {user.email}</h1>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link href={`all-users/${user.id}`}><button className="btn btn-primary">See Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllUsers;