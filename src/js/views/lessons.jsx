import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";
import { Theme } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";

export class Lessons extends React.Component {
	render() {
		return (
			<div>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-4  container-fluid"
					headerClass="display-4 font-weight-bold  text-left"
					headerText="Lessons Published"
					pClass="lead  text-left"
					pContent="the following lessons explain different programing
							concepts and have been published by breathe code
							members, search for a partiulars lesson using the
							filters bellow"
				/>
				<div className="row">
					<div className="col border-top border-bottom d-flex justify-content-start ">
						<div className="px-1 py-2">
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
						<div className="px-1 pl-1 py-2">
							<Filter
								label="Gender"
								onChange={d => console.log(d)}
								placeholder="Select an author"
								multiselect={false}
								options={[
									{ label: "@alesanchezr", value: "male" },
									{ label: "@camilocruz", value: "female" }
								]}
							/>
						</div>

						<div className="px-1 py-2">
							<Filter
								label="Tags"
								placeholder="Search My Name"
								onChange={d => console.log(d)}
								options={[
									{ label: "html", value: "html" },
									{ label: "react.js", value: "react.js" },
									{ label: "javascript", value: "javascript" }
								]}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.lessons.map((lesson, index) => {
								return (
									<div key={index}>
										<div className="col-12 px-5 py-5">
											<a
												className="h2 text-dark btn-default"
												href={actions.lessonUrl(
													lesson.slug
												)}>
												{lesson.title}
											</a>
											<p className="lead">
												{lesson.subtitle}
											</p>
										</div>
										<hr className="my-4" />
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
