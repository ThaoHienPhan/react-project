import React from "react";
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Add = () => {
    return (
       <Navbar>
           <Container>
               <NavbarBrand href="./"></NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link className = "btn btn-primary ml-auto mt-auto" to ="./add">Add New Product</Link>
                   </NavItem>
               </Nav>
           </Container>
       </Navbar>
    )
}