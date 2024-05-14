import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="conta">
			<Navbar/>
			<Jumbotron/>
			<Card />    
		</div>
	);
};

export default Home;
