import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';

class Navigation extends Component {
   constructor(props){
      super(props);
      this.state ={
         isOpen: false
      };

      this.toggle = this.toggle.bind(this);
   }

   toggle(){
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   render(){
      return(
         <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Kylie Sanderson</NavbarBrand>
            {/*Toggler and Collapse help when scaling down to mobile*/}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
               {/*ml-auto class name aligns navigation to right*/}
               <Nav className="ml-auto" navbar>
                  <NavItem>
                     <NavLink href="/development">Development</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink href="/design">Design</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink href="/about">About</NavLink>
                  </NavItem>
               </Nav>
            </Collapse>
         </Navbar>
      );
   }
}

export default Navigation;
