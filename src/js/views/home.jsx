import React from "react";
import { Jumbotron } from "../component/jumbotron.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
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
					firstLinkColOneText="More About The Non-profit"
					firstColumnLinkClass="text-success text-right d-flex justify-content-end"
					hrLineClass="my-2"
					secondLinkColOneText="Our Open Source Projects"
					thirdLinkColOneText="Start Collaborating now"
					smallDescriptionFirstCol="Thanks to the open source contributions we have been able to publish 20 projects that have helped more than 2,000 learners , you can read about the reach and impact of our publications here"
					smallDescriptionFirstColClass="mt-3 text-secondary"
					buttonColOneClass="btn btn-outline-success btn-lg greenButton text-dark px-5 py-4"
					buttonColOneText="Start Contributing"
					buttonAlignCenterClass="text-right"
					pTextClassColTwo="lead text-left d-flex justify-content-start"
					pTextSecondCol="We strongly recomend to follow our learning process in this order"
					linksClassSecondCol="blueLinks  text-left d-flex justify-content-start"
					firstLinkColTwoText="Read a 10 min lesson"
					secondLinkColTwoText="Do interactive tutorials"
					thirdLinkColTwoText="Code a real life project"
					smallDescriptionsecondTextCol="All of our contents, videos and interactive tutorials are published and open sourced to the web, but by being a sponsor you will be able to track your progress and receive guided learning and much more"
					buttonColTwoClass="btn btn-outline-primary btn-lg  text-dark px-5 blueButton"
					buttonColTwoText="login for guided learning"
					buttonSmallText="$40/mo contribution"
					buttonAlignCenterClassTwo="text-left"
					jumboRowClass="row"
				/>
				<div className="jumbotron jumbotron-fluid blueButton py-4">
					<div className="container">
						<p className="h6 d-flex justify-content-center">
							<strong>Get notified about</strong> our events,
							projects and contributions
						</p>
						<form className="form-inline d-flex justify-content-center">
							<div className="form-group mb-2 ">
								<label
									htmlFor="staticEmail2"
									className="sr-only">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="staticEmail2"
									placeholder="Your First Name"
								/>
							</div>
							<div className="form-group mx-sm-3 mb-2">
								<label
									htmlFor="inputPassword2"
									className="sr-only">
									Password
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPassword2"
									placeholder="Email Adress"
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary mb-2">
								Join The Organization
							</button>
						</form>
					</div>
				</div>
				<div className="pl-5 container-fluid">
					<div className="row mb-4">
						<div className="col-12">
							<p className="h2">Upcoming Events</p>
						</div>
					</div>
					<div className="row w-75">
						<div className="col-3">
							<i className=" pl-3 ml-5 fas fa-calendar-alt position-absolute" />
							<p className="pl-3 h6 text-right font-weight-bold">
								May 1st
								<br />
								<small className="text-secondary">
									downtown miami
									<br />
									11:00 am
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
