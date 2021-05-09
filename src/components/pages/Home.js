import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import { Lnk } from 'react-router-dom';
import VMC from './inc/Vmc';
import services1 from '../images/image1T.jpg';

function Home() {
	return (
		<div>
			<Slider />

			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h3 className="main-heading">Out Company</h3>
							<div className="underline mx-auto" />
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
								McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
								the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source. Lorem
								Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
								Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
								theory of ethics, very popular during the Renaissance.
							</p>
							<Link to="/about" className="btn btn-warning shadow">
								Read More
							</Link>
						</div>

					</div>
				</div>
			</section>
			{/* Our vision, mission and values*/}
			<VMC />
			{/* Our Services*/}
			<section className="section border-top">
				<div className="container">
					<div className="row">
						<div className="col-md-12 mb-4 text-center">
							<h3 className="main-heading">Our Services</h3>
							<div className="underline mx-auto" /></div>
                         
						<div className="col-md-4">
							<div className="card shadow">
								<img src={services1} className="w-100 border-bottom" alt="Services" />
								<div className="card-body">
									<h6>Services 1</h6>
									<div className="underline"></div>
										<p>Contrary to popular belief</p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>
									</div>
								</div>
							</div>
                            <div className="col-md-4">
							<div className="card shadow">
								<img src={services1} className="w-100 border-bottom" alt="Services" />
								<div className="card-body">
									<h6>Services 1</h6>
									<div className="underline"></div>
										<p>Contrary to popular belief</p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>
									</div>
								</div>
							</div>
                            <div className="col-md-4">
							<div className="card shadow">
								<img src={services1} className="w-100 border-bottom" alt="Services" />
								<div className="card-body">
									<h6>Services 1</h6>
									<div className="underline"></div>
										<p>Contrary to popular belief</p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>
									</div>
								</div>
							</div>
						</div>   
					
				</div>
			</section>
		</div>
	);
}

export default Home;
