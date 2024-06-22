/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Layout = (  {children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [pageTitle, setPageTitle] = useState('Book Management')
    const logout = ()=>{
        localStorage.removeItem('token');
        navigate('/')
    }
    useEffect(() => {
        // Update the page title whenever the location changes
        const pathname = location.pathname;
        const newTitle = getPageTitle(pathname);
        setPageTitle(newTitle);
    }, [location]);
    function getPageTitle(pathname) {
        switch (pathname) {
            case '/':
                return <h3 className='text-center'>LIST OF BOOKS</h3>
                case '/addnewbooks':
                    return <h3 className='text-center'>ADD NEW BOOK</h3>
            default:
                return;
        }
    }
    return (
        <div className="layout">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Books App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Books</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {pageTitle}
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <form className="d-flex">
                            <button className="btn btn-sm btn-danger" type="button" onClick={logout}>LogOut</button>
                        </form>
                    </span>
                </div>
            </div>
        </nav>
        {children}
    </div>
    )
}

export default Layout