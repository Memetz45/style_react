import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://res.cloudinary.com/dzm5hygct/image/upload/v1676361358/cld-sample-5.jpg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;