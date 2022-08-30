import React from "react";
import "./Title.css";
import lcLogo from "./images/lc-logo-1.png";
import DesktopBG from "./images/litcapwallpaper-101.png";

function Title() {
	// const html = document.documentElement;
	// const canvas = document.getElementById(".bg-animation");
	// const context = canvas.getContext("2d");
	// const frameCount = 180;
	// const preloadImages = () => {
	// 	for (let i = 1; i < frameCount; i++) {
	// 		const img = new Image();
	// 		img.src = currentFrame(i);
	// 	}
	// };
	// const currentFrame = (index) =>
	// 	`./images/img_sequence/litcapwallpaper_${index
	// 		.toString()
	// 		.padStart(5, "0")}.png`;
	// const img = new Image();
	// img.src = currentFrame(1);
	// canvas.width = 2880;
	// canvas.height = 1800;
	// img.onload = function () {
	// 	context.drawImage(img, 0, 0);
	// };
	// const updateImage = (index) => {
	// 	img.src = currentFrame(index);
	// 	context.drawImage(img, 0, 0);
	// };
	// window.addEventListener("scroll", () => {
	// 	const scrollTop = html.scrollTop;
	// 	const maxScrollTop = html.scrollHeight - window.innerHeight;
	// 	const scrollFraction = scrollTop / maxScrollTop;
	// 	const frameIndex = Math.min(
	// 		frameCount - 1,
	// 		Math.ceil(scrollFraction * frameCount)
	// 	);
	// 	requestAnimationFrame(() => updateImage(frameIndex + 1));
	// });
	// preloadImages();
	return (
		<div className="titlecontainer">
			<div className="header">
				{/* <canvas id="bg-animation" /> */}
				<img className="desktop-bg" src={DesktopBG} alt="" />
				{/* <video autoPlay loop muted id="video">
					<source
						src="https://websiteassetsbucket.s3.us-west-1.amazonaws.com/litcapwallpaper_1.mp4"
						type="video/mp4"
					/>
				</video> */}
				<div className="header-bg">
					<img className="title-logo" src={lcLogo} alt="" />

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1213 201">
						<defs></defs>
						<path
							className="title-sublogo"
							d="M1.143,13.121V196.559H82.807V170.54H28.84V13.121H1.143Zm99.17,0V196.559h27.7V13.121h-27.7ZM256.066,39.14V13.121H144.09V39.14h42.2V196.559h27.7V39.14h42.08ZM426.234,9.557q-45.289,0-73.818,33.622-23.179,27.444-23.18,62.493,0,39.088,27.7,66.769,27.816,27.444,67.162,27.444A100.074,100.074,0,0,0,474.02,186.46V153.076a139.778,139.778,0,0,1-12.9,9.742,71.64,71.64,0,0,1-11.828,6.415q-10.224,4.753-24.844,4.752-28.292,0-47.786-19.84t-19.494-48.711q0-29.226,19.494-49.423,19.374-20.316,47.668-20.316,25.675,0,49.687,20.078V22.982Q450.958,9.558,426.234,9.557h0Zm205.441,187h30.312L574.379,1.6,483.562,196.559H513.4l20.446-44.553h78.573Zm-86.3-70.571L573.9,63.614l27.221,62.374h-55.75ZM716.7,122.067q28.645,0,45.527-14.732t16.88-39.919q0-23.524-15.81-38.968a46.723,46.723,0,0,0-20.921-12.118q-11.769-3.208-34.829-3.208H676.165V196.559h27.7V122.067H716.7Zm-12.838-83.4h9.153q39.344,0,39.346,28.395,0,29.346-38.158,29.345H703.862V38.665Zm95.01-25.543V196.559h27.7V13.121h-27.7ZM954.624,39.14V13.121H842.648V39.14h42.2V196.559h27.7V39.14h42.08ZM1087.67,196.559h30.31L1030.38,1.6,939.56,196.559H969.4l20.445-44.553h78.578Zm-86.3-70.571,28.53-62.374,27.22,62.374h-55.75ZM1132.16,13.121V196.559h81.67V170.54h-53.97V13.121h-27.7Z"
						/>
					</svg>
				</div>
				<div className="header-menu"></div>
			</div>
		</div>
	);
}

export default Title;
