import React from "react";
import arrowIcon from "../images/icon-arrow.svg";
import NavBar from "./NavBar";
import "../css/-recursive/main.css";

const HeroImageSlide = (props) => {
	return (
		<div className="card-container">
			<div className={props.card.classname}>
				<NavBar />
			</div>
			<div className="card-details container">
				<h1>{props.card.title}</h1>
				<p>{props.card.description}</p>
				<a href="/shop">
					Shop Now <img src={arrowIcon} alt="arrowicon" />
				</a>
			</div>
		</div>
	);
};

export default HeroImageSlide;
