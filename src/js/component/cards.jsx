import React from "react";

const Cards = () => {
	return (
		<div>
			<div className="card mt-5">
				<img
					src="https://via.placeholder.com/500x325.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="text-center">Card title</h5>
					<p className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<div className="text-center">
						<div className="d-grid gap-2 col-6 mx-auto">
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
