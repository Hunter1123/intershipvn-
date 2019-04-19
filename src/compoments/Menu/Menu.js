import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Menu.css';
import logoweb from '../../img/logoweb.png';

class Menu extends Component {
	render() {
		return (
			<Container fluid style={{ background: '#f8f9fa' }}>
					<Container>
						<Navbar className="bg-light justify-content-between nav-bar-menu">
							<Navbar.Brand href="#home">
						      <img
						        src={logoweb} width="110" height="60" className="d-inline-block align-top"
						        alt="z"
						      />
						    </Navbar.Brand>
							
							<Nav className="mr-auto"></Nav>
								<Nav>
									<Nav.Link href="#home" className="nav-items">Home</Nav.Link>
									<Nav.Link href="#employment" className="nav-items">Employment information</Nav.Link>
									<Nav.Link href="#news" className="nav-items">News</Nav.Link>
									<Nav.Link href="#contact" className="nav-items">Contact</Nav.Link>
								</Nav>
							
						</Navbar>
					</Container>
			</Container>
			);
	}
}

export default Menu;
