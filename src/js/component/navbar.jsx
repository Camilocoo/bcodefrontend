import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { Jumbotron } from "./jumbotron.jsx";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			change: false
		};
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<img
						className="navbar-brand mb-0"
						src="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/45x/"
					/>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => {
							this.setState({
								change: !this.state.change
							});
						}}>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className={`navbar-collapse collapse ${this.state
							.change && "show"}`}
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Learn To Code
								</a>
							</li>
							<li className="nav-item">
								<Link to="/aboutus" className="nav-link">
									<a className="nav-link" href="#">
										About Us
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/opensource" className="nav-link">
									<a
										className="nav-link"
										href="#"
										role="button"
										aria-haspopup="true"
										aria-expanded="false">
										Open Source Projects
									</a>
								</Link>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<Link to="/contributing" className="nav-link">
								<Button
									classNameButton="ml-5 btn btn-outline-success buttonHeight mr-3"
									buttonText="Start Contributing"
								/>
							</Link>
							<Button
								classNameButton="btn btn-outline-primary buttonHeight  px-5"
								buttonText="login"
							/>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}
