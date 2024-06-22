import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../pages/Home';
import Login from '../Login';
import Register from '../Register';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

const RoutesComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents