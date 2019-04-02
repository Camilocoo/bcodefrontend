import React from "react";
import { SmallJumbotron } from "../component/smalljumbo.jsx";

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
					<div className="col border-top border-bottom">
						<p>tags</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 py-5 px-5">
						<h1 className="h3 font-weight-bold  text-left">
							Learn CSS: What is CSS meant for?
						</h1>
						<p className="lead  text-left">
							As you may have noticed, HTML allows you to create
							only basic webistes. Nobody wants to see a white
							website with some horrible text on it. So its time
							to know what is all about! Learn CSS to make your
							website beautiful. Its time to shine !
						</p>
						<hr className="my-4" />
					</div>
				</div>
			</div>
		);
	}
}
