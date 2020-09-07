import React from "react";

function AppBar() {
	const [show, setShow] = React.useState(false);
	return (
		<nav className="app-bar">
			<div onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
				Company Info
			</div>
			{show && (
				<div style={{ position: "absolute", top: "20px", left: 0 }}>
					Company: Geeksynergy Technologies Pvt Ltd <br />
					Address: Sanjayanagar, Bengaluru-56
					<br />
					Phone:XXXXXXXXX09 <br />
					Email: XXXXXX@gmail.com
				</div>
			)}
		</nav>
	);
}

export default AppBar;
