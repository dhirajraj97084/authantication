import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseConfig';

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signup=async()=>{
    if(!email || !password){
      alert("please fill all the field");
    }
    try {
      const user=await createUserWithEmailAndPassword(auth,email,password);
      alert("Signup successfully");
      setEmail(" ");
      setPassword(" ");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="main h-screen flex justify-center items-center ">
        <div className="child  bg-gray-950 text-white p-4 rounded-2xl ">
          <h1 className='flex justify-center pb-4 text-2xl font-bold'>Signup</h1>
          {/* inputs */}
          <div className="div flex flex-col gap-4 pb-4">
            <input className='py-2 px-4 text-black rounded-xl outline-none placeholder-gray-950 ' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="e" placeholder='Email' />
            <input className='py-2 px-4 rounded-xl text-black outline-none placeholder-gray-950 ' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="p" placeholder='Password' />
          </div>
          {/* button */}
          <button onClick={signup} className='py-2 bg-cyan-800  w-full text-lg font-semibold rounded-xl'>Signup</button>
          <h1 className='pt-2'>Don't have an account <Link className='text-blue-600 px-2 font-semibold text-lg' to={'/login'}>Login</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default Signup
