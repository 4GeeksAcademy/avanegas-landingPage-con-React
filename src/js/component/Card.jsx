import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = ({title, text, labelUrl, btn}) =>{

    return(
                <div className="card d-flex cardInfo col-lg-2 col-md-12">
                    <img src={rigoImage} className="card-img-center w-50" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title text-center">{title}</h4>
                        <p className="card-text">{text}</p>
                        <hr/>
                        <a href={labelUrl} className="btn btn-primary cardButton justify-content align-items">{btn}</a>
                    </div>
                </div>
    )
}


export default Card