import React, { useState } from "react";

import { Light } from "./Light.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [glow, setGlow] = useState("");

	return (
		<div className="main">
			<div className="traffic-light">
				<Light
					color="red"
					setGlowSelected={() => setGlow("red")}
					visible={glow === "red"}
				/>
				<Light
					color="yellow"
					setGlowSelected={() => setGlow("yellow")}
					visible={glow === "yellow"}
				/>
				<Light
					color="green"
					setGlowSelected={() => setGlow("green")}
					visible={glow === "green"}
				/>
			</div>
		</div>
	);
}
