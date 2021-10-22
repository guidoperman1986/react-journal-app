import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email:'reberto@gmail.com',
        password: '123456'
    })

    const { loading } = useSelector(state => state.ui)

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
          <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input 
                    onChange={handleInputChange} 
                    value={email} 
                    autoComplete="off" 
                    className="auth__input" 
                    type="text" 
                    placeholder="Email" 
                    name="email">
                </input>  

                <input 
                    onChange={handleInputChange} 
                    value={password} 
                    className="auth__input" 
                    type="password" 
                    placeholder="Password" 
                    name="password">
                </input>  

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >Login
                </button>

                
                <div className="auth__social-networks">
                    <p className="login__title">Login with Social Networks</p>

                    <div 
                        onClick={ handleGoogleLogin }
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                    <Link 
                        className="link" 
                        to="/auth/register" >
                        Create new account
                    </Link>
                </div>
            </form>  
        </>
    )
}
