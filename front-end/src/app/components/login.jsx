import React from 'react'

const Login = () => {
  return (
    <section className='flex justify-center my-44'>
        <div className='flex flex-col gap-4'>
        <h4>Welcome Back</h4>
        <p>Welcome back, Please enter your details</p>
        <input type="text" placeholder='Email' className='border rounded h-10'/>
        <input type="text" placeholder='Password' className='border rounded h-10'/>
        <button className='bg-blue-800 rounded text-white h-10'>Log in</button>
        <span>Don't have account?</span>
        <a href="Sign up"></a>
        </div>
    </section>
  )
}

export default Login;