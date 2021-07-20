import React from 'react'

class ContactUs extends React.Component {
    render() {
        return (
            <div className='position-relative'>
                <div className = 'contact position-absolute start-50 translate-middle'>
                    <h1>Contact Us</h1>
                <form class="row g-3 mt-5">
                    <div class="col-12">
                       
                        <input type="text" class="form-control" id="name" placeholder="Name" />
                    </div>
                    <div class="col-12">                       
                        <input type="email" class="form-control" id="email" placeholder="Email" />
                    </div>
                    <div class="col-12">                        
                        <input type="text" class="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div class="col-12">                        
                        <textarea type="text" class="form-control text-area" id="textarea" placeholder="Please submit your question and we will respond back as soon as possible." ></textarea>
                    </div>                   
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>               
            </div>
        )
    }
}

export default ContactUs;