import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

export const LogOut = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))

    //autologout on expire
    useEffect(() => {
        const token = user?.token;
    
        if(token) {
          const decodedToken = decode(token)
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')))
      }, [location])

      const logout = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/')
        setUser(null)
      }

    return (
        <div>
            <h4>CURRENT USER: {user?.result?.email}</h4>
            <button onClick={logout}>logout</button>
        </div>
    )
}
