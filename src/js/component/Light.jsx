import React from "react";
import PropTypes from "prop-types";

export function Light({ color, setGlowSelected, visible }) {
	const colorSelected = c => `selected-${c}`;

	return (
		<div
			className={`${color} ${visible ? colorSelected(color) : ""}`}
			onClick={setGlowSelected}
		/>
	);
}

Light.propTypes = {
	setGlowSelected: PropTypes.func,
	color: PropTypes.string,
	visible: PropTypes.bool
};
