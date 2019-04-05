import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Lessons } from "./views/lessons.jsx";
import { Contributing } from "./views/contributing.jsx";
import { AboutUs } from "./views/aboutus.jsx";
import { OpenSource } from "./views/opensource.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/lessons" component={Lessons} />
							<Route
								exact
								path="/opensource"
								component={OpenSource}
							/>
							<Route exact path="/aboutus" component={AboutUs} />
							<Route
								exact
								path="/contributing"
								component={Contributing}
							/>
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
