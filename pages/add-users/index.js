import React, { useEffect, useRef } from 'react';

const AddUsers = () => {
    const fullNameRef=useRef()
    const userNameRef=useRef()
    const userEmailRef=useRef()

    const userDataForm=(event)=>{
        event.preventDefault()
        const fullName=fullNameRef.current.value
        const userName=userNameRef.current.value
        const userEmail=userEmailRef.current.value
        const AddUserData={
            fullName:fullName,
            userName:userName,
            email:userEmail
        }
        
            fetch('https://nextjs-user-practice-default-rtdb.firebaseio.com/users.json',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(AddUserData),
            })
    }

    return (
        <div className='flex my-20 justify-center'>
            <form onSubmit={userDataForm} action="" className='px-10 py-16 shadow-xl rounded-3xl w-2/5'>
                <h1 className='flex justify-center text-2xl font-bold'>Add a New User</h1>
                <div className='grid grid-cols-1 mb-4 gap-2 rounded-lg'>
                    <label htmlFor="">Name</label>
                    <input type="text" id='name' ref={fullNameRef} placeholder='Type Full Name' className='border-2 border-black rounded shadow-inner px-5 py-2' />
                </div>
                <div className='grid grid-cols-1 mb-4 gap-2 rounded-lg'>
                    <label htmlFor="">UserName</label>
                    <input type="text" ref={userNameRef} id='username' placeholder='Type User Name' className='border-2 border-black rounded shadow-inner px-5 py-2' />
                </div>
                <div className='grid grid-cols-1 mb-4 gap-2 rounded-lg'>
                    <label htmlFor="">Email</label>
                    <input type="email" ref={userEmailRef} id='email' placeholder='Type User Email' className='border-2 border-black rounded shadow-inner px-5 py-2' />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-primary px-4 py-2 rounded-lg shadow-xl'>Add Now</button>
                </div>
            </form>
        </div>
    )
}

export default AddUsers;