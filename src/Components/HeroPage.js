import React, { useState } from "react";
import HeroImageSlide from "./heroImageSlide";
import imageSlideCard from "../cardInfo";

const HeroPage = () => {
	let [position, setPosition] = useState(0);
	const imageSlide = imageSlideCard.map((card) => {
		return (
			<HeroImageSlide
				key={card.id}
				card={card}
				handleSlideRight={handleSlideRight}
				handleSlideLeft={handleSlideLeft}
			/>
		);
	});

	function handleSlideRight() {
		imageSlide.length - 1 > position ? setPosition(position + 1) : setPosition(0);
	}

	function handleSlideLeft() {
		position === 0 ? setPosition(imageSlide.length - 1) : setPosition(position - 1);
	}

	return <header>{imageSlide[position]}</header>;
};

export default HeroPage;
