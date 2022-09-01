import React from "react";
import "./About.css";
// import AboutBG from "./images/about_bg.png";
import { useParallax } from "react-scroll-parallax";
import Flower from "./images/lc-flower-1.png";
import Flower2 from "./images/lc-flower-2.png";
import Flower3 from "./images/lc-flower-3.png";

function About() {
	const handleLoad = () => {
		// updates cached values after image dimensions have loaded
		this.context.parallaxController.update();
	};

	const parallax = useParallax({
		translateY: [-30, 30],
	});
	const parallax2 = useParallax({
		translateY: [-15, 15],
	});
	// const parallax3 = useParallax({
	// 	translateY: [-5, 5],
	// });

	return (
		<div id="about" className="about-container">
			<div ref={parallax.ref} className="about-parallax">
				<img className="flower" src={Flower} alt="" onLoad={handleLoad} />
			</div>
			<div ref={parallax2.ref} className="about-parallax">
				<img className="flower2" src={Flower2} alt="" onLoad={handleLoad} />
			</div>
			{/* <div ref={parallax3.ref} className="about-parallax">
				<img className="flower3" src={Flower3} alt="" onLoad={handleLoad} />
			</div> */}
			{/* <img className="desktop-bg" src={AboutBG} alt="" /> */}
			<div className="about-body">
				<h1>About</h1>
				<div className="about-p-text">
					<p>
						Lit Capital is a Web3 venture fund that invests in lit projects.
					</p>
					<p>
						We believe that venture is about big ideas, lit founders, and
						lasting impact.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
