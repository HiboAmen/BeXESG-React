import React, { useContext, useRef, useState } from 'react'
import './Signup-styles.css'
import { Container, PrimaryInput } from '../../LoginSignup/FormInput'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import WatsonAssistantChat from '../../Components/WatsonAssistantChat'

export default function Signup() {

    const [loading, setLoading] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
   

    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            alert('Password and confirm password does not match')
            return
        }

        setLoading(true)

    axios.post(`/auth/signup`, {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }).then((res) => {
            console.log(res);
            setTimeout(() => {
                navigate('/auth/login')
            }, 1500)
        }).catch((error) => {
            console.log('error: ', error);
        }).finally(() => {
            setTimeout(() => setLoading(false), 1500)
        })

    }

    return (
        <div className='Signup-crossbox'>
        <div className='signup-container'>
            <div className='background-image-container'>
              
            </div>
            <h2> Sign up </h2>
            <div className='Signup-form-crossbox'>
            <div className='signup-form-container'>
                <form onSubmit={handleOnSubmit}>
                    <Container labelName='Name*'>
                        <input ref={nameRef} required name='name' type='text' />  
                    </Container>
                    <Container labelName='Email*'>
                        <input ref={emailRef} required name='email' type='email' />  
                    </Container>
                    <Container labelName='Password*'>
                        <input ref={passwordRef} required name='password' type='password' />  
                    </Container>
                    <Container labelName='Confirm password'>
                        <input ref={confirmPasswordRef} required name='password' type='password' />  
                    </Container>

                    <button disabled={loading} onSubmit={handleOnSubmit}> Signup </button>
                    <div className='login-link-container'>
                    <span>Already a member?</span>
                    <Link to='/auth/login'> Log In </Link>
                </div>
                </form>
               
                
            </div>
            </div>
        </div>
        <WatsonAssistantChat/>
        </div>
    )
}