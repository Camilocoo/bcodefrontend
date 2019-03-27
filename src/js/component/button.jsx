import React from "react";
import PropTypes from "prop-types";

export class Button extends React.Component {
	render() {
		return (
			<button type="button" className={this.props.className}>
				{this.props.buttonText}
			</button>
		);
	}
}

Button.propTypes = {
	className: PropTypes.string,
	buttonText: PropTypes.string
};
