import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
          <h3 className="auth__title">Register</h3>
            <form>
                <input autoComplete="off" className="auth__input" type="text" placeholder="Name" name="name"></input>  
                <input autoComplete="off" className="auth__input" type="text" placeholder="Email" name="email"></input>  
                <input className="auth__input" type="password" placeholder="Password" name="password"></input>
                <input className="auth__input" type="password" placeholder="Confirm Password" name="password"></input>

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block mb-5"
                >Login
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
