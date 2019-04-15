import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class OpenSource extends React.Component {
	render() {
		return (
			<div>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-4  container-fluid"
					headerClass="display-4 font-weight-bold text-left"
					headerText="Open Source Projects"
					pClass="lead  text-left"
					pContent="The following projects is the list of the most important projects breatheco.de is working right now"
					spanClass="h3 text-secondary"
					spanContent=".md"
				/>
				<div className="row">
					<div className="col d-flex justify-content-start border-top border-bottom py-1">
						<div className="pl-1">
							<Filter
								label="Tags"
								placeholder="Select one or more tags"
								onChange={d => console.log(d)}
								options={[
									{ label: "CSS", value: "CSS" },
									{ label: "react.js", value: "react.js" },
									{
										label: "Object Oriented Programming",
										value: "Object Oriented Programming"
									},
									{ label: "HTML", value: "HTML" },
									{ label: "Events", value: "Events" },
									{ label: "Forms", value: "Forms" },
									{ label: "Webpack", value: "Webpack" },
									{ label: "Flux", value: "Flux" }
								]}
							/>
						</div>
						<Filter
							label="Tags"
							placeholder="Select one or more tags"
							onChange={d => console.log(d)}
							options={[
								{ label: "CSS", value: "CSS" },
								{ label: "react.js", value: "react.js" },
								{
									label: "Object Oriented Programming",
									value: "Object Oriented Programming"
								},
								{ label: "HTML", value: "HTML" },
								{ label: "Events", value: "Events" },
								{ label: "Forms", value: "Forms" },
								{ label: "Webpack", value: "Webpack" },
								{ label: "Flux", value: "Flux" }
							]}
						/>
					</div>
				</div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.openSource.map((project, index) => {
								return (
									<div key={index} className="col-12">
										<div className="row py-2">
											<div className="col text ml-5 pt-3">
												<div className="row">
													<div className="col-12 d-flex justify-content-end">
														<IssueFetch
															issuesFunction={
																actions.issuesFeed
															}
															gitIssueUrl={
																project.gitIssueUrl
															}
															issueLink={
																project.gitIssueUrl
															}
														/>
													</div>
												</div>
												<a className="h2 text-dark">
													{project.title}
												</a>
												<p className="lead">
													{project.description}
												</p>
												<div className="row ">
													<div className="col-12 d-flex justify-content-start">
														{project.technologies.map(
															(
																technologie,
																index
															) => {
																return (
																	<p
																		className="pr-3"
																		key={
																			index
																		}>
																		{
																			technologie.tech
																		}
																	</p>
																);
															}
														)}
													</div>
												</div>
												<div>
													<a
														href={actions.issuesFeed(
															null,
															null,
															null,
															project.gitIssueUrl
														)}
														type="button"
														className="btn btn-info btn-sm btnColor mr-1">
														Project
													</a>
													<a
														href={actions.issuesFeed(
															null,
															null,
															project.gitIssueUrl
														)}
														type="button"
														className="btn btn-info btn-sm btnColor mr-1">
														README.md
													</a>
												</div>
											</div>
										</div>
										<hr className="my-4 mx-5" />
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

class IssueFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch(this.props.issuesFunction(this.props.gitIssueUrl))
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json
				});
			});
	}
	render() {
		let { isLoaded, items } = this.state;

		if (!isLoaded) {
			return <div className="d-flex justify-content-end">Loading ..</div>;
		} else {
			return (
				<a
					href={this.props.issuesFunction(null, this.props.issueLink)}
					className="btn  d-flex btnRED text-light rounded btn-sm mr-5 my-1">
					<i className="fas fa-exclamation-triangle" />
					&nbsp;
					{items.length}
					&nbsp;Issues
				</a>
			);
		}
	}
}

IssueFetch.propTypes = {
	gitIssueUrl: PropTypes.string,
	issueLink: PropTypes.string,
	issuesFunction: PropTypes.function
};
