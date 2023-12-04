import React, { useContext, useRef, useState } from 'react'

import './login-styles.css'
import { Container, PrimaryInput } from '../../LoginSignup/FormInput'
import { PrimaryButton, SecondaryButton } from '../../LoginSignup/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { BsExclamationCircle } from 'react-icons/bs'
import WatsonAssistantChat from '../../Components/WatsonAssistantChat'
import axios from 'axios'
import HomePage from '../HomePage'
export default function Login() {

    const [loading, setLoading] = useState(false)
    
    
    
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
    
        if (emailValue && passwordValue) {
            // Both fields are filled, navigate to the homepage
            navigate('/');
            return; // Don't proceed with the API call
        }
    
        setLoading(true);
    
        axios.post(`/auth/login`, {
            email: emailValue,
            password: passwordValue,
        })
        .then((res) => {
            console.log(res);
            // Additional logic if needed
        }).catch((error) => {
            console.log('error: ', error);
            // Additional error handling if needed
        }).finally(() => {
            setLoading(false);
        });
    };
    

    return (
        <div className='Content'>
        <div className='login-crossbox'>
        <div className='login-container'>
            <div className='login-form-container'>

                <div className='form-title'>
                    <h2> Log in to BESESG Solve </h2>
                </div>
                <div className='login-form-crossbox'>
                <div className='form-container'>
                    <form onSubmit={handleOnSubmit}>
                        <Container labelName='Email Address'>
                            <PrimaryInput ref={emailRef} required type='email' name='email' />  
                        </Container>
                        <Container labelName='Password'>
                            <PrimaryInput ref={passwordRef} required type='password' name='password' />  
                        </Container>
                        <PrimaryButton onSubmit={handleOnSubmit} $text='Login' $loading={loading} />
                        <div className = 'remember-me-container'>
                            <input type="checkbox" className='check-box' />
                            <span className='remember-me'> Remember me </span>
                            <BsExclamationCircle size={17}/>
                        </div>
                      
                        
                    <div className='login-link-container'>
                    <span>Don't Have Account?</span>
                    <Link to='/auth/Signup'> Sign up </Link>
                </div>
                    </form>
                </div>
                </div>
               
            </div>
           
        </div>
        </div>
        <WatsonAssistantChat/>
        </div>
      
    )
}