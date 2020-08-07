import React from "react";
import Helmet from "react-helmet"

const Fonts = () => {
    return(
        <Helmet>
            <link 
                href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400&display=swap" 
                rel="stylesheet"/>
        </Helmet>
    );
};

export default Fonts;
