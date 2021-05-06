import React, { useState } from "react";
import HeroImageSlide from "./heroImageSlide";
import imageSlideCard from "../cardInfo";
import previousBtn from "../images/icon-angle-left.svg";
import nextBtn from "../images/icon-angle-right.svg";

const HeroPage = () => {
	let [position, setPosition] = useState(0);
	const imageSlide = imageSlideCard.map((card) => {
		return <HeroImageSlide key={card.id} card={card} />;
	});

	function handleClick() {
		imageSlide.length - 1 > position ? setPosition(position + 1) : setPosition(0);
	}

	return (
		<header>
			{imageSlide[position]},
			<div className="slider-btn">
				<img src={previousBtn} alt="slider button" className="angle-left" />
				<img onClick={handleClick} src={nextBtn} alt="slider button" />
			</div>
		</header>
	);
};

export default HeroPage;
