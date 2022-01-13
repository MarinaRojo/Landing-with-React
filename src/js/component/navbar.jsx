import React from "react";
import "../../styles/index.css";
const Navbar = () => {
	return (
		<div>
			<div className="bg-dark navbar-dark">
				<div className="container d-flex flex-wrap py-2 pl-5 mb-3">
					<a
						href="/"
						className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
						<span className="fs-4 fw-bold text-white">
							Start Bootstrap
						</span>
					</a>

					<ul className="nav">
						<li className="nav-item">
							<a
								href="#"
								className="nav-link active text-white"
								aria-current="page">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link text-secondary">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link text-secondary">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link text-secondary">
								Contact
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link text-secondary">
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
