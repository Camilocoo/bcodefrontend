import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
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
					<div className="col border-top border-bottom">
						<p>tags</p>
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
