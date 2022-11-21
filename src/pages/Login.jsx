import React, { useState } from 'react'
import * as yup from "yup";
import { Formik } from 'formik';




const Login = () => {

    return (
        <div>

            <img src="" alt="" />
            <form >
                <label htmlFor="">User Name</label><br />
                <input
                    type="email"
                /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" /><br />
                <button type='submit'>Login</button>
            </form>
            < button className='login-with-google-btn' onClick={() => { }}> Sign in with google</button>


        </div >
    )

}

export default Login