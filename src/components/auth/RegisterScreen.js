import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from "validator";
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    //usando el state
    const {msgError} = useSelector(state => state.ui)
    
    const [formValues, handleInputChange] = useForm({
        name: 'Reberto',
        email: 'marcos@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }


    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Incorrect name'))
            return false;
        } else if (!validator.isEmail(email)){
            dispatch(setError('Incorrect email'))
            return false;
        }else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least of 5 characters and has to match'))
            return false;
        }
        dispatch(removeError())
        return true;
    }


    return (
        <>
          <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input 
                    onChange={handleInputChange}
                    autoComplete="off" 
                    value={name}
                    className="auth__input" 
                    type="text" placeholder="Name" 
                    name="name">
                </input>  
                <input 
                    onChange={handleInputChange}
                    autoComplete="off"
                    value={email} 
                    className="auth__input" 
                    type="text"
                    placeholder="Email" 
                    name="email">
                </input>  
                <input 
                    onChange={handleInputChange}
                    className="auth__input"
                    value={password} 
                    type="password" 
                    placeholder="Password" 
                    name="password">
                </input>
                <input 
                    onChange={handleInputChange}
                    className="auth__input"
                    value={password2} 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password">
                </input>

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block mb-5"
                >Register
                </button>

                
               <div>
                    <Link 
                        className="link" 
                        to="/auth/login" >
                        Already registered?
                    </Link>
                </div>
            </form>  
        </>
    )
}
