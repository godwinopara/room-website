import React from "react";
import AboutImg1 from "./images/image-about-dark.jpg";
import AboutImg2 from "./images/image-about-light.jpg";

const About = () => {
	return (
		<section className="about-section">
			<div className="about-wrapper">
				<div className="about-img1">
					<img src={AboutImg1} alt="a table and a chair" />
				</div>
				<div className="about-content container">
					<h2>ABOUT OUR FURNITURE</h2>
					<p>
						Our multifunctional collection blends design and function to suit your
						individual taste. Make each room unique, or pick a cohesive theme that best
						express your interests and what inspires you. Find the furniture pieces you
						need, from traditional to contemporary styles or anything in between.
						Product specialists are available to help you create your dream space.
					</p>
				</div>
				<div className="about-img2">
					<img src={AboutImg2} alt="a white wooden chair" />
				</div>
			</div>
		</section>
	);
};

export default About;
