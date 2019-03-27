import React from "react";

import PropTypes from "prop-types";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className={this.props.jumbotronClass}>
				<h1 className={this.props.jumbotronTitleClass}>
					{this.props.jumbotronTitle}
				</h1>
				<div className="row">
					<div className={this.props.firstColumnClass}>
						<p className={this.props.pClassFirstCol}>
							{this.props.pHeaderFirstCol}
						</p>
						<p>{this.props.pTextFirstCol}</p>
					</div>
					<div className={this.props.secondColumnClass}>
						<img
							className={this.props.imgClass}
							src={this.props.imgSrc}
						/>
					</div>
					<div className={this.props.thirdColumnClass}>
						<p className={this.props.pClassSecondCol}>
							{this.props.pHeaderSecondCol}
						</p>
						<p>{this.props.pTextSecondCol}</p>
					</div>
				</div>
			</div>
		);
	}
}

Jumbotron.propTypes = {
	jumbotronClass: PropTypes.string,
	jumbotronTitle: PropTypes.string,
	jumbotronTitleClass: PropTypes.string,
	firstColumnClass: PropTypes.string,
	secondColumnClass: PropTypes.string,
	thirdColumnClass: PropTypes.string,
	pClassFirstCol: PropTypes.string,
	pHeaderFirstCol: PropTypes.string,
	imgSrc: PropTypes.string,
	pClassSecondCol: PropTypes.string,
	pHeaderSecondCol: PropTypes.string,
	imgClass: PropTypes.string,
	pTextSecondCol: PropTypes.string,
	pTextFirstCol: PropTypes.string
};
