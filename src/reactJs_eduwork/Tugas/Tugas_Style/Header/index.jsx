import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return(
        <Navbar bg="dark" fixed="top">
            <Container className="">
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://res.cloudinary.com/dzm5hygct/image/upload/v1676368134/favicon_vrwyis.png"
                    height="50"
                    /> 
                </Navbar.Brand>
                <Navbar.Brand href="#home">
                    <h1 className="text-light">@Slamet Nurhidayat</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;