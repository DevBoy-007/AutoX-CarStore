import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Initial check
        checkAuthentication();

        // Check every X minutes (e.g., every 15 minutes)
        const interval = setInterval(checkAuthentication, 1 * 60 * 1000); // 1 minute

        // Clean up interval
        return () => clearInterval(interval);
    }, []);

    const checkAuthentication = () => {
        const token = Cookies.get('Token');
        console.log(token)
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    const login = (token) => {
        Cookies.set('Token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('Token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
