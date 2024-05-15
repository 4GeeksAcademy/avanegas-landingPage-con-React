import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () =>{

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

    return(
        <div className="container cardContainer">
            <div className="row cardRow">
            {infoCard.map((card, index) =>
                <div key={index} className="card d-flex cardInfo col-sm-3 col-md-2">
                    <img src={rigoImage} className="card-img-center w-50" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title text-center">{card.title}</h4>
                        <p className="card-text">{card.text}</p>
                        <hr/>
                        <a href={card.labelUrl} className="btn btn-primary cardButton justify-content align-items">{card.button}</a>
                    </div>
                </div>
            )}
            </div>
        </div>   
    )
}


export default Card