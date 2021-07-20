import React from 'react'
import cow from '../Navbar/images/cow.png'

class About extends React.Component{
    render(){
        return(
            <div className='position-relative about'>
               <div className ='position-absolute start-50 translate-middle scroll'>
                 
                   <div className='d-flex align-items-center justify-content-center about-cell'>
                       <img className='bg-light' src={cow} alt=''/>
                   <p className='text-white p-2'>Ut sit amet odio non justo tempus semper sed id felis. Vestibulum vitae erat diam. Vivamus fringilla lacinia nibh, at auctor dui iaculis placerat. Donec eros nisl, faucibus 
                       quis odio et, pharetra tempor purus. Nunc nulla nisl, tempus eget ultrices id, eleifend vel nulla. Orci varius natoque penatibus et magnis dis 
                       parturient montes, nascetur ridiculus mus. Aenean mattis quam in sapien finibus maximus. Proin eu aliquam dui. Integer efficitur, ligula ut aliquam fringilla, 
                       ex mi mollis ipsum, id mattis elit nisl et nibh. Donec congue luctus mauris. Maecenas at velit eu augue blandit euismod. Proin non tincidunt urna. Donec 
                       consectetur tristique nulla tincidunt commodo. Duis tincidunt, dolor vel placerat semper, enim ligula varius sapien, sit amet ullamcorper ligula arcu vitae elit.
                       </p>
                   </div>

                   <div className='d-flex align-items-center justify-content-end about-cell flex-end'>                      
                   <p className='text-white p-2'>Ut sit amet odio non justo tempus semper sed id felis. Vestibulum vitae erat diam. Vivamus fringilla lacinia nibh, at auctor dui iaculis placerat. Donec eros nisl, faucibus 
                       quis odio et, pharetra tempor purus. Nunc nulla nisl, tempus eget ultrices id, eleifend vel nulla. Orci varius natoque penatibus et magnis dis 
                       parturient montes, nascetur ridiculus mus. Aenean mattis quam in sapien finibus maximus. Proin eu aliquam dui. Integer efficitur, ligula ut aliquam fringilla, 
                       ex mi mollis ipsum, id mattis elit nisl et nibh. Donec congue luctus mauris. Maecenas at velit eu augue blandit euismod. Proin non tincidunt urna. Donec 
                       consectetur tristique nulla tincidunt commodo. Duis tincidunt, dolor vel placerat semper, enim ligula varius sapien, sit amet ullamcorper ligula arcu vitae elit.
                       </p>
                       <img className='bg-light' src={cow} alt=''/>
                   </div>

                   <div className='d-flex align-items-center justify-content-center about-cell'>
                       <img className='bg-light' src={cow} alt=''/>
                   <p className='text-white p-2'>Ut sit amet odio non justo tempus semper sed id felis. Vestibulum vitae erat diam. Vivamus fringilla lacinia nibh, at auctor dui iaculis placerat. Donec eros nisl, faucibus 
                       quis odio et, pharetra tempor purus. Nunc nulla nisl, tempus eget ultrices id, eleifend vel nulla. Orci varius natoque penatibus et magnis dis 
                       parturient montes, nascetur ridiculus mus. Aenean mattis quam in sapien finibus maximus. Proin eu aliquam dui. Integer efficitur, ligula ut aliquam fringilla, 
                       ex mi mollis ipsum, id mattis elit nisl et nibh. Donec congue luctus mauris. Maecenas at velit eu augue blandit euismod. Proin non tincidunt urna. Donec 
                       consectetur tristique nulla tincidunt commodo. Duis tincidunt, dolor vel placerat semper, enim ligula varius sapien, sit amet ullamcorper ligula arcu vitae elit.
                       </p>
                   </div>         
                   
               </div>
            </div>
        )
    }
}

export default About;