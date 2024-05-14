import React from 'react';

const Footer = () =>{

    const infoFooter ={
        text: "Copyright @ your website 2024"
    }

    return(
            <div class="card footerCard text-center">
                <div class="card-footer bg-dark text-white">
                    {infoFooter.text}
                </div>
            </div>
    )
}

export default Footer;