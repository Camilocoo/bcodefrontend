import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";

export class OpenSource extends React.Component {
	render() {
		return (
			<div>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-4  container-fluid"
					headerClass="display-4 font-weight-bold  text-left"
					headerText="Open Source Projects"
					pClass="lead  text-left"
					pContent="The following projects is the list of the most important projects breatheco.de is working right now"
					spanClass="h3 text-secondary"
					spanContent=".md"
				/>
			</div>
		);
	}
}
