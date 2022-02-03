import { Component } from 'react';
import { Navbar, NavbarBrand, NavBarBrand } from 'reactstrap';
import logo from "../assests/logo.png"

class Footer extends Component {
   render(){
    return (
     <div >
        <Navbar className='mt-5' fixed="bottom" style={{backgroundColor: "#000",borderTop:"2px solid #f7f7f7", color: "#f7f7f7"}} >
        
              MUSICVERSE 2022
      
        </Navbar>
     </div>
    )
}
}
export default Footer