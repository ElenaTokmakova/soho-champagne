import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`


    body{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;

        .ReactModal__Overlay{
            z-index:9999 !important;
        }
    }

    h1,h2,h3,h4,h5{
        font-family: 'Merriweather', serif;
        font-weight: 400;
    }
    
    h6,p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }
    a{
        font-size:16px;
        font-family: 'Open Sans', sans-serif;
        // font-weight:600;
    }
    img{
        margin-bottom:0px;
    }
`;

export default GlobalStyle;