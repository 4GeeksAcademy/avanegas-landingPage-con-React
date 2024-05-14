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
        <div className="container">
            <div className="row">
            {infoCard.map((card, index) =>
                <div key={index} className="card col-3">
                    <img src={rigoImage} className="card-img-top w-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <a href={card.labelUrl} className="btn btn-primary">{card.button}</a>
                    </div>
                </div>
            )}
            </div>
        </div>   
    )
}


export default Card