import React from "react";
import "./Team.css";
import One from "./images/team-plc-1.png";
import Two from "./images/team-plc-2.png";
import Three from "./images/team-plc-3.png";
import Four from "./images/team-plc-4.png";
// import TeamBG from "./images/team_bg.png";
import { useParallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

function Team() {
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

	const parallax4 = useParallax({
		translateY: [20, -20],
		disabled: isMobile,
	});

	return (
		<div id="team" className="team-container">
			<div ref={parallax4.ref} className="team-body">
				<h1>Team</h1>
				<div className="row">
					<ul>
						<li>
							<img className="team-img" src={Four} alt=""></img>
							<h2>Andy Prevalsky</h2>
							<p>Why Andy is lit...</p>
						</li>
						<li>
							<img className="team-img" src={Three} alt=""></img>
							<h2>Rishi Talati</h2>
							<p>Why Rishi is lit...</p>
						</li>
						<li>
							<img className="team-img" src={One} alt=""></img>
							<h2>Jiazi Guo</h2>
							<p>Why Jiazi is lit...</p>
						</li>

						<li>
							<img className="team-img" src={Two} alt=""></img>
							<h2>Isaac Roseman</h2>
							<p>Why Isaac is lit...</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Team;
