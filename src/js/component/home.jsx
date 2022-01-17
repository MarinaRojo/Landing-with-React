import React from "react";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-md-4 g-80">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
				<div className="container-fluid">
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
