import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";
import { MarkdownParser } from "@breathecode/ui-components";
import { Context } from "../store/appContext.jsx";

export class AboutUs extends React.Component {
	render() {
		return (
			<div>
				<SmallJumbotron
					jumboClass="jumbotron jumbotron-fluid mb-0 bg-white"
					containerClass="pl-4  container-fluid"
					headerClass="display-4 font-weight-bold  text-left"
					headerText="About Breathecode"
					spanClass="h3 text-secondary"
					spanContent=".md"
				/>

				<p align="center">
					<img src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" />
				</p>
				<h1 className="mb-5" align="center">
					{" "}
					Welcome to BreatheCode{" "}
				</h1>
				<div className="px-5">
					<Context.Consumer>
						{({ store, actions }) => {
							return <MarkdownParser source={store.markdown} />;
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
