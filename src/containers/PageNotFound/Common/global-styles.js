import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`


    body{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
    }
    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    a{
        font-size:16px;
        font-family: 'Poppins', sans-serif;
        font-weight:500;
    }
    img{
        margin-bottom:0px;
    }
`;

export default GlobalStyle;