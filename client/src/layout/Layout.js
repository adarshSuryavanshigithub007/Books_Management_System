/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Layout = () => {
    return (
        <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Books App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Books</a>
                        </li>   
                    </ul>
                    <span class="navbar-text">
                        <nav class="navbar bg-body-tertiary">
                            <form class="container-fluid justify-content-start">
                                <button class="btn btn-sm btn-danger" type="button">LogOut</button>
                            </form>
                        </nav>
                    </span>
                </div>
            </div>
        </nav></div>
    )
}

export default Layout