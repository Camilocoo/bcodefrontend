import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { Jumbotron } from "./jumbotron.jsx";
export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light pr-0">
					<div className="row d-flex w-100 ">
						<div className="col-8 justify-content-start d-flex">
							<div className="d-flex flex-row w-100">
								<div className="pl-0 col-0.5">
									<img src="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/45x/" />
								</div>
								<div className="col-3 py-2">
									<a className="pt-5 px-0 mt-1">
										Learn To Code
									</a>
								</div>
								<div className="col-3 py-2">
									<a className="pt-5 px-0 mt-1">About Us</a>
								</div>
								<div className="col px-0 py-2">
									<a className="pt-5 mt-1">
										Open Source Projects
									</a>
								</div>
							</div>
						</div>
						<div className="col-4 justify-content-end d-flex">
							<Button
								classNameButton="ml-5 btn btn-outline-success mr-3"
								buttonText="Start Contributing"
							/>
							<Button
								classNameButton="btn btn-outline-primary px-5"
								buttonText="login"
							/>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
