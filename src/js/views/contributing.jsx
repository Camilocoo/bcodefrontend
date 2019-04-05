import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { Filter } from "@breathecode/ui-components";

export class Contributing extends React.Component {
	render() {
		return (
			<div>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-4  container-fluid"
					headerClass="display-4 font-weight-bold  text-left"
					headerText="Contributing"
					pClass="lead  text-left"
					pContent="To start contributing click one ot the issues to learn more details, use the tags to narrown your search depending on your skils"
					spanClass="h3 text-secondary"
					spanContent=".md"
				/>
				<div className="row">
					<div className="col border-top border-bottom d-flex justify-content-start">
						<div className="px-1 pl-1 py-2">
							<Filter
								onChange={d => console.log(d)}
								placeholder="Good first Issue"
								options={[
									{ label: "@alesanchezr", value: "male" },
									{ label: "@camilocruz", value: "female" }
								]}
							/>
						</div>

						<div className="px-1 py-2">
							<Filter
								placeholder="help wanted"
								onChange={d => console.log(d)}
								options={[
									{ label: "html", value: "html" },
									{ label: "react.js", value: "react.js" },
									{ label: "javascript", value: "javascript" }
								]}
							/>
						</div>
						<div className="px-1 pl-1 py-2">
							<Filter
								label="Gender"
								onChange={d => console.log(d)}
								placeholder="bug"
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
								placeholder="4geeks_student"
								onChange={d => console.log(d)}
								options={[
									{ label: "html", value: "html" },
									{ label: "react.js", value: "react.js" },
									{ label: "javascript", value: "javascript" }
								]}
							/>
						</div>
						<div className="px-1 pl-1 py-2">
							<Filter
								label="bc-coder"
								onChange={d => console.log(d)}
								placeholder="bc coder"
								multiselect={false}
								options={[
									{ label: "@alesanchezr", value: "male" },
									{ label: "@camilocruz", value: "female" }
								]}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 py-5 px-5">
						<h1 className="h3 text-primary  text-left">
							Create a quiz about git
						</h1>
						<p className="lead  text-left text-secondary">
							Project Assets isse #36 opened on nov 13, 207 by
							alesanchezr
						</p>
						<div className="row">
							<div className="col-12">tags</div>
						</div>
						<hr className="my-4" />
					</div>
				</div>
			</div>
		);
	}
}
