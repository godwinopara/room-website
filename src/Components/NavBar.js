import React from "react";
import hamburgerClose from "../images/icon-close.svg";
import hamburgerOpen from "../images/icon-hamburger.svg";

const NavBar = () => {
	function handleOpenClick(e) {
		const ele = document.querySelector(".hamburger-open");
		const nav = document.querySelector(ele.dataset.open);
		nav.classList.add("close");
	}

	function handleCloseClick(e) {
		const ele = document.querySelector(".hamburger-open");
		const nav = document.querySelector(ele.dataset.open);
		nav.classList.remove("close");
	}

	return (
		<nav>
			<div className="nav-wrapper container">
				<div data-close="nav" className="hamburger-close">
					<img onClick={handleCloseClick} src={hamburgerClose} alt="hamburger menu" />
				</div>
				<div className="hamburger-open" data-open="nav">
					<img onClick={handleOpenClick} src={hamburgerOpen} alt="hamburger Menu" />
				</div>
				<div className="nav-title">
					<h2>room</h2>
				</div>
				<ul>
					<li>Home</li>
					<li>Shop</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
