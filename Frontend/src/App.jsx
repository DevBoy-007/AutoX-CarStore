import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Signup from './customer-side/pages/signup';
import Login from './customer-side/pages/login';
import Customer_Layout from './customer-side/pages/customer_Layout';
import Adlogin from '../src/admin-side/pages/adlogin';
import Adsiginup from '../src/admin-side/pages/adsiginup';
import Adheader from '../src/admin-side/pages/header';
import Header from './customer-side/pages/header';
import Footer from '../src/admin-side/pages/footer';
import Honda from '../src/admin-side/pages/honda';
import Hundai from '../src/admin-side/pages/hundai';
import Kia from '../src/admin-side/pages/kia';
import Toyota from '../src/admin-side/pages/toyota';
import Suzuki from '../src/admin-side/pages/suzuki';
import MG from '../src/admin-side/pages/mg';
import BMW from '../src/admin-side/pages/bmw';
import Changan from '../src/admin-side/pages/changan';
import Profile from '../src/admin-side/pages/profile';
import Cart from "./customer-side/pages/cart"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './admin-side/pages/not-found';
import PrivateRoute from './protectedroute';
import AdminPrivateRoute from './adminprotectedroute';

function App() {
    const location = useLocation();
    const isCustomerRoute = location.pathname.includes('/AutoX-Carstore');
    const isAdminRoute = location.pathname.includes('/AutoX-AdminPortal');

    return (
        <>
            <ToastContainer />
            {isCustomerRoute && <Header />}
            {isAdminRoute && <Adheader />}

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="AutoX-SignUpForm" element={<Signup />} />
                <Route path="AutoX-Carstore" element={<PrivateRoute><Customer_Layout /></PrivateRoute>} />
                <Route path="AutoX-Carstore/car-cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                <Route path="AutoX-Admin" element={<Adlogin />} />
                <Route path="AutoX-Admin/Signup-Form" element={<Adsiginup />} />

                <Route path="/AutoX-AdminPortal">
                    <Route index element={<AdminPrivateRoute>< Honda /></AdminPrivateRoute>} />
                    <Route path="HundaiCars" element={<AdminPrivateRoute>< Hundai /></AdminPrivateRoute>} />
                    <Route path="SuzukiCars" element={<AdminPrivateRoute><Suzuki /></AdminPrivateRoute>} />
                    <Route path="ToyotaCars" element={<AdminPrivateRoute><Toyota /></AdminPrivateRoute>} />
                    <Route path="KiaCars" element={<AdminPrivateRoute><Kia /></AdminPrivateRoute>} />
                    <Route path="MgCars" element={<AdminPrivateRoute><MG /></AdminPrivateRoute>} />
                    <Route path="BMWCars" element={<AdminPrivateRoute><BMW /></AdminPrivateRoute>} />
                    <Route path="ChanganCars" element={<AdminPrivateRoute><Changan /></AdminPrivateRoute>} />
                    <Route path="Profile" element={<AdminPrivateRoute><Profile /></AdminPrivateRoute>} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

            {isAdminRoute && <Footer />}
            {isCustomerRoute && <Footer />}
        </>
    );
}

export default App;
