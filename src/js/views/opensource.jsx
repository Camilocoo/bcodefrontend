import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { Filter, Icon } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import moment from "moment";

export class OpenSource extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedTechnologies: []
		};
	}

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
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<Filter
											label="Tags"
											withToggler={false}
											placeholder="Select one or more tags"
											onChange={d =>
												this.setState({
													selectedTechnologies: d
												})
											}
											options={actions
												.filterTags(
													actions.concatTechnologies(
														store.openSource
													)
												)
												.map(tech => {
													return {
														label: tech,
														value: tech
													};
												})}
										/>
									);
								}}
							</Context.Consumer>
						</div>
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
												<p className="lead mt-3">
													{project.description}
												</p>
												<div className="row mb-2 pl-2">
													{project.technologies.map(
														(
															technologie,
															index
														) => {
															return (
																<div
																	key={index}
																	className={
																		technologie.color
																	}>
																	{
																		technologie.tech
																	}
																</div>
															);
														}
													)}
												</div>
												<div>
													<a
														href={actions.issuesFeed(
															null,
															null,
															null,
															project.gitIssueUrl
														)}
														rel="noopener"
														className="btn btn-outline-success buttonHeight mr-2">
														Project
													</a>
													<a
														href={actions.issuesFeed(
															null,
															null,
															project.gitIssueUrl
														)}
														rel="noopener"
														className="btn btn-outline-primary buttonHeight  px-2 ">
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
					className="btn d-flex btnRED text-danger rounded btn-sm mr-0 mr-md-5 mb-4 mb-sm-0 my-1">
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
