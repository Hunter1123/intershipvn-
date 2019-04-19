import React, { Component } from 'react';
import { Nav, Navbar, Container,Row,Col } from 'react-bootstrap';
import './Slider.css';
import logoweb from '../../img/logoweb.png';

class Slider extends Component {
	render() {
		return (
				<Container>
					<Row debug>
						<Col md={6} debug className="slider-web w-100">
							<img src="https://www.google.com/logos/doodles/2019/duygu-asenas-73rd-birthday-5411282202132480.2-2x.png" height="232" className="d-inline-block align-top w-100" alt="z" />
						</Col>

						<Col md={6} debug className="slider-web w-100">
							<div id="box" className="slider-content">
								<p className="slider-sharp">Here is some content.</p>
							</div>
						</Col>
					</Row>
				</Container>
			);
	}
}

export default Slider;
