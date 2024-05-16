import React from 'react';

const Jumbotron = () =>{
    
    const infoJumbo = {
        title: "A warm Welcome!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum tempore quibusdam reprehenderit necessitatibus perspiciatis veniam alias cum non sunt nulla. Placeat illo soluta magni labore accusamus necessitatibus tenetur ipsum eaque.",
        button: "Call to action"
    }
    return (
        <div className="jumbotron col-md-12">
            <div className="container jumboContainer">
                <h1 className="jumboTitle display-4">{infoJumbo.title}</h1>
                <p className="jumboText lead">{infoJumbo.text}</p>
                <p className="jumboButton lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">{infoJumbo.button}</a>
                </p>
            </div>      
        </div>
    )

}

export default Jumbotron