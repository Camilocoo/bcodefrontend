import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";

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
											<div className="col-2 icon">
												icon
											</div>
											<div className="col text">
												<a className="h2 text-dark">
													{project.title}
												</a>
												<p className="lead">
													{project.description}
												</p>
											</div>
											<div className="col-1 tags">
												tags
											</div>
											<div className="col-1 issues">
												issues
											</div>
										</div>
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
