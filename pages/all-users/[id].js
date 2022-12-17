import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const UserId = () => {
    const [userData,setUserData]=useState([])
    const RouterData = useRouter()
    const data = RouterData.query.id
    

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/users/${data}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    return (
        <div className='justify-center flex my-32'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{userData.name}</h2>
                    <div>
                        <h1>User Name: {userData.username}</h1>
                        <h1>User Email: {userData.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserId;