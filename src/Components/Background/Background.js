import React from 'react'

class Background extends React.Component{
    render(){
        return(
            <div className='background carousel slide carousel-fade' data-bs-ride="carousel">
                <div className = 'carousel-inner'>
                    <div className='carousel-item active'>
                        <img src='https://img.hobbyfarms.com/breeds_aberdeen.jpg' alt='' className='d-block w-100 photo' />
                    </div>
                    <div className='carousel-item'>
                        <img src="https://img1.wsimg.com/isteam/ip/97287d06-a43b-42e7-910d-8d2b509730ad/DSC_8307.JPG/:/rs=w:1280" alt='' className='d-block w-100 photo'/>
                    </div>                  
                </div>

            </div>
        );
    }
}

export default Background