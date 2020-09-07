import React from "react";

function TextError(props) {
	return (
		<div className="error" style={{ paddingLeft: "2rem" }}>
			{props.children}
		</div>
	);
}

export default TextError;
