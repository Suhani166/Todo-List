import React, { useEffect, useState } from "react";
import "./Rocket.css";

const Rocket = () => {
	const [animationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		const animationDuration = 4000; // Duration in milliseconds
		const timer = setTimeout(() => {
			setAnimationComplete(true);
		}, animationDuration);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	if (animationComplete) {
		return null; // Render nothing when the animation is complete
	}

	return (
		<div className="rocket-container">
			<div className="rocket">Congratulations!</div>
		</div>
	);
};

export default Rocket;
