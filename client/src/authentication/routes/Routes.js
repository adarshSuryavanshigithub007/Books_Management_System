import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../pages/Home';
import Login from '../Login';
import Register from '../Register';
import PublicRoute from './PublicRoute';
import CreateNewBooks from '../../pages/Books/CreateNewBooks';
import ProtectedRoute from './ProtectedRoute';
import EditBook from '../../pages/Books/EditBook';
import BookDetails from '../../pages/Books/BookDetails';

const RoutesComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/addnewbooks" element={<ProtectedRoute><CreateNewBooks /></ProtectedRoute>} />
                <Route path="/edituser/:id" element={<ProtectedRoute><EditBook /></ProtectedRoute>} />
                <Route path="/bookdetails/:id" element={<ProtectedRoute><BookDetails /></ProtectedRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents