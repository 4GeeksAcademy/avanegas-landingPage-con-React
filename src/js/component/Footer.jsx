import React from 'react';

const Footer = () =>{

    const infoFooter ={
        text: "Copyright 2024"
    }

    return(
        <div className="container-fluid">
            <div class="card text-center">
                <div class="card-footer bg-dark text-white">
                    {infoFooter.text}
                </div>
            </div>
        </div>
    )
}

export default Footer;