import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/pages/Main";
import { ParallaxProvider } from "react-scroll-parallax";

// import { Amplify } from "aws-amplify";
// import awsExports from "./aws-exports";

// Amplify.configure(awsExports);

function App() {
	return (
		<Router>
			<ParallaxProvider>
				<Main />
			</ParallaxProvider>
		</Router>
	);
}

export default App;
