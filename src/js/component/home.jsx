import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;
