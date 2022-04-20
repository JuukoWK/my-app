import React from 'react';
import 'bootstrap/dist//css/bootstrap.min.css';
import image from './jawslogo.png';

class Header extends React.Component{

    render(){
        return ( 
            
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <img src={image} height={200} width={200} />

            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link disabled" href="#">JAWS Construction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Start Building</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Support Services</a>
              </li>
              
            </ul>
           
          </nav>
        )
    }

}

export default Header;