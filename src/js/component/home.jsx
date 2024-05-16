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
            title:"Card title",
            text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            button:"Go somewhere",
            labelUrl: "https://4geeks.com/"
        }
    ]

    const infoJumbo = {
        title: "A warm Welcome!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum tempore quibusdam reprehenderit necessitatibus perspiciatis veniam alias cum non sunt nulla. Placeat illo soluta magni labore accusamus necessitatibus tenetur ipsum eaque.",
        button: "Call to action",
        labelUrl:"https://www.youtube.com/@4GeeksAcademyes"
    }

    const navbar = {
        title: "Start Bootstrap",
        home: "Home",
        about: "About",
        services: "Services"
    }

    const footer = {
        text: "Copyright @ your website 2024"
    }

	return (
		<div className="">
			<Navbar title={navbar.title} home={navbar.home} about={navbar.about} services={navbar.services}/>
            
            <div className="jumbotron col-md-12">
                <div className="container jumboContainer">
			        <Jumbotron title={infoJumbo.title} text={infoJumbo.text} btn={infoJumbo.button} labelUrl={infoJumbo.labelUrl}/>
                </div>
            </div>

			<div className="container cardContainer">
            	<div className="row cardRow">
					{infoCard.map((card, index) =>{
						return <Card  title={card.title} text={card.text} btn={card.button} labelUrl={card.labelUrl} key={index} />
					}
					)}
				</div>
			</div>
            
            <div class="card footerCard text-center col-md-12">
			    <Footer text={footer.text} />    
            </div>
		</div>
	);
};

export default Home;
