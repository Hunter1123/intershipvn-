import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<Container fluid>
				<Row className="container-inLine">
					<Col className="line-black">
						<Container>
							<Row debug>
								<Col md={2} debug className="email-header">Email: stsbmt@gmail.com</Col>
								<Col md={2} debug className="email-header">Tel: +(84) 0123.456.12</Col>
    							<Col md={8} debug className="language-header">Tiếng việt | Tiếng nhật</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			);
	}
}

export default Header;
