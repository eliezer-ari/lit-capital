import React from "react";
import "./About.css";
// import AboutBG from "./images/about_bg.png";
import { useParallax } from "react-scroll-parallax";
import Flower from "./images/lc-flower-1.png";
import Flower2 from "./images/lc-flower-2.png";
import Flower3 from "./images/lc-flower-3.png";

function About() {
	const parallax = useParallax({
		easing: "easeInQuad",
		translateY: [-30, 30],
	});
	const parallax2 = useParallax({
		easing: "easeInQuad",
		translateY: [-10, 60],
	});
	const parallax3 = useParallax({
		easing: "easeInQuad",
		translateY: [5, 105],
	});

	return (
		<div id="about" className="about-container">
			<div ref={parallax.ref} className="about-parallax">
				<img className="flower" src={Flower} alt="" />
			</div>
			<div ref={parallax2.ref} className="about-parallax">
				<img className="flower2" src={Flower2} alt="" />
			</div>
			<div ref={parallax3.ref} className="about-parallax">
				<img className="flower3" src={Flower3} alt="" />
			</div>
			{/* <img className="desktop-bg" src={AboutBG} alt="" /> */}
			<div className="about-body">
				<h1>About</h1>
				<p>
					Lit Capital is a Web3-focused stage-agnostic venture fund that invests
					in lit projects.
				</p>
				<p>
					We believe that venture is about big ideas, lasting impact, and most
					importantly, litness.
				</p>
			</div>
		</div>
	);
}

export default About;
