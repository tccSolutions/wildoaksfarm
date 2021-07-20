import React from 'react'
import tree from '../Navbar/images/tree.png'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (

            <footer class="footer navbar navbar-expand-lg navbar-dark  bg-dark nav navbar-nav-scroll">
                <div class="container-fluid d-flex justify-content-center ">                
                           
                            <div class="text-white  ">
                            <img src={tree} width='75px' alt=''/>
                            <Link class="navbar-brand ms-2 fs-4 text-white" to="/">The Wild Oaks Farm</Link>                                                 
                            <p className='px-0'>Thank you for visiting our page. Please use the contact link for any questions.</p>
                            <p className='px-0'>© 2021 Copyright: The Wild Oaks Farm   </p>    
                            </div>         

                        </div>
            </footer>
        )
    }
}

export default Footer;