import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const infoCard =[
        {
            title:"Card title",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            button:"Go somewhere",
            labelUrl: "https://4geeks.com/"
        },

        {
            title:"Card title",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            button:"Go somewhere",
            labelUrl: "https://4geeks.com/"
        },

        {
            title:"Card title",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            button:"Go somewhere",
            labelUrl: "https://4geeks.com/"
        },

        {
            title:"Cardjkhkjhkj",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            button:"Go somewhere",
            labelUrl: "https://4geeks.com/"
        }
    ]
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>
			<div className="container cardContainer">
            	<div className="row cardRow">
					{infoCard.map((card, index) =>{
						return <Card  title={card.title} text={card.text} btn={card.button} labelUrl={card.labelUrl} key={index} />
					}
					)}
				</div>
			</div>
			<Footer />    
		</div>
	);
};

export default Home;
