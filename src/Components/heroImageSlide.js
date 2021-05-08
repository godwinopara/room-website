import React from "react";
import arrowIcon from "../images/icon-arrow.svg";
import NavBar from "./NavBar";
import "../css/-recursive/main.css";
import previousBtn from "../images/icon-angle-left.svg";
import nextBtn from "../images/icon-angle-right.svg";

const HeroImageSlide = (props) => {
	return (
		<div className="card-container">
			<div id="hero-img" className={props.card.classname}>
				<NavBar />
				<div className="slider-btn1">
					<img
						onClick={props.handleSlideLeft}
						src={previousBtn}
						alt="slider button"
						className="button to slide right"
					/>
					<img onClick={props.handleSlideRight} src={nextBtn} alt="slider button" />
				</div>
			</div>
			<div className="card-details container">
				<div className="card-details-wrapper">
					<h1>{props.card.title}</h1>
					<p>{props.card.description}</p>
					<a href="/shop">
						Shop Now
						<img src={arrowIcon} alt="arrowicon" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroImageSlide;
