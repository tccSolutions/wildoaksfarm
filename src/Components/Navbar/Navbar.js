import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
}from 'react-router-dom'
import tree from './images/tree.png';


class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark  bg-dark nav navbar-nav-scroll">
                <div class="container-fluid">                   
                    <img src={tree} alt="" height="100vh"/>                    
                    <Link class="navbar-brand ms-2 fs-1" to ="/">Wild Oaks Farm</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse fs-5 ms-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                               <Link class="nav-link active" to ="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to ="/about">About</Link>                               
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to ="/contact">Contact Us</Link>                                
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;