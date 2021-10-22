import { getAuth } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        getAuth().onAuthStateChanged( (user)=>{

            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            
            setChecking(false);

        });
        
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking){
        return (
            <h1>Espere...</h1>
        )
    }


    return (
        <Router>
            <Switch>
                <PrivateRoute 
                    isAuthenticated={isLoggedIn}
                    path="/" 
                    exact 
                    component={ JournalScreen } 
                />
                <PublicRoute 
                    path="/auth"   
                    component={AuthRouter} 
                    isAuthenticated={isLoggedIn}
                /> 
            </Switch>
        </Router>
    )
}