import React from 'react'
import tree from './images/tree.png';


class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark  bg-dark nav navbar-nav-scroll">
                <div class="container-fluid">                   
                    <img src={tree} alt="" height="100vh"/>
                    <a class="navbar-brand ms-2 fs-1" href="#">Wild Oaks Farm</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse fs-5 ms-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">Contact Us</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;