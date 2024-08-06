import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminPrivateRoute = ({ children }) => {
    const token = Cookies.get('AdminToken');
    return token ? children : <Navigate to="/AutoX-Admin" />;
};

export default AdminPrivateRoute;

