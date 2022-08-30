import React from "react";
import "./Team.css";
import One from "./images/team-plc-1.png";
import Two from "./images/team-plc-2.png";
import Three from "./images/team-plc-3.png";
// import TeamBG from "./images/team_bg.png";
import { useParallax } from "react-scroll-parallax";

function Team() {
	const parallax4 = useParallax({
		easing: "easeInQuad",
		translateY: [20, -100],
	});

	return (
		<div id="team" className="team-container">
			<div ref={parallax4.ref} className="team-body">
				<h1>Team</h1>
				<div className="row">
					<ul>
						<li>
							<img className="team-img" src={Three} alt=""></img>
							<h2>GP</h2>
							<p>Lorem ipsum...</p>
						</li>
						<li>
							<img className="team-img" src={One} alt=""></img>
							<h2>GP</h2>
							<p>Lorem ipsum...</p>
						</li>

						<li>
							<img className="team-img" src={Two} alt=""></img>
							<h2>GP</h2>
							<p>Lorem ipsum...</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Team;
