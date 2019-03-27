import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { Jumbotron } from "./jumbotron.jsx";
export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<div className="row d-flex w-100">
						<div className="col justify-content-start d-flex">
							<Button
								className="ml-4 btn btn-outline-success"
								buttonText="Start Contributing"
							/>
						</div>
						<div className="col justify-content-end d-flex">
							<Button
								className="btn btn-outline-primary px-5"
								buttonText="login"
							/>
						</div>
					</div>
				</nav>
				<Jumbotron
					jumbotronClass="jumbotron bg-white bold"
					jumbotronTitle="Welcome to BreatheCo de"
					jumbotronTitleClass="display-4 text-center mb-5"
					firstColumnClass="col-5"
					secondColumnClass="col-2"
					thirdColumnClass="col-5"
					pClassFirstCol="h4 text-right bold"
					pHeaderFirstCol="Are you here to help?"
					pClassSecondCol="h4 text-left bold"
					pHeaderSecondCol="Are your here to learn to code?"
					imgSrc="https://ucarecdn.com/dbe55247-376b-4b81-988e-7dd95f4233b5/-/resize/90x/"
					imgClass="mx-auto d-flex"
					pTexClassColOne="lead text-right d-flex justify-content-end"
					pTextFirstCol="you can write documentation, write code, fix buds or join current projects"
				/>
			</div>
		);
	}
}
