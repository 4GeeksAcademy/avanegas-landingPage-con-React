import React from 'react';

const Jumbotron = () =>{
    
    const infoJumbo = {
        title: "A warm Welcome!",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        button: "Call to action"
    }

    return (
        <div className="container">
            <div className="jumbotron bg-dark-subtled">
                <h1 className="display-4">{infoJumbo.title}</h1>
                <p className="lead">{infoJumbo.text}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">{infoJumbo.button}</a>
                </p>
            </div>      
        </div>
    )

}

export default Jumbotron