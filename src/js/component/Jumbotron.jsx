import React from 'react';

const Jumbotron = ({title, text, btn, labelUrl}) =>{

    return (
        <>
            <h1 className="jumboTitle display-4">{title}</h1>
            <p className="jumboText lead">{text}</p>
            <p className="jumboButton lead">
                <a className="btn btn-primary btn-lg" href={labelUrl} role="button">{btn}</a>
            </p>
        </>
    )

}

export default Jumbotron