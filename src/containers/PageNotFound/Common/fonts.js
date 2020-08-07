import React from "react";
import Helmet from "react-helmet"

const Fonts = () => {
    return(
        <Helmet>
            <link 
                href="https://fonts.googleapis.com/css?family=Barlow:600,700|Poppins:400,500&display=swap" 
                rel="stylesheet"/>
        </Helmet>
    );
};

export default Fonts;
