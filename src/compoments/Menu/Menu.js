import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<Container fluid style={{ background: '#f8f9fa' }}>
					<Container>
						<Navbar className="bg-light justify-content-between">
							<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
							
							<Nav className="mr-auto"></Nav>
								<Nav>
									<Nav.Link href="#home" className="nav-items">Home</Nav.Link>
									<Nav.Link href="#employment" className="nav-items">Employment</Nav.Link>
									<Nav.Link href="#news" className="nav-items">News</Nav.Link>
									<Nav.Link href="#contact" className="nav-items">Contact</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Container>
			</Container>
			);
	}
}

export default Menu;
