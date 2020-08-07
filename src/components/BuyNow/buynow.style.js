import styled from 'styled-components';
import {Cart} from '@styled-icons/boxicons-regular/Cart';

export const BuyNowOuterLayout = styled.div`

    @-webkit-keyframes leaves {
        0% {
            -webkit-transform: scale(1.0);
        }
        100% {
            -webkit-transform: scale(1.12);
        }
    }

    @keyframes leaves {
        0% {
            transform: scale(1.0);
        }
        100% {
            transform: scale(1.12);
        }
    }
`;

export const CartAnchor = styled.a`

`;

export const BuyNowLayout = styled.div`
    width:60px;
    height:60px;
    background:#F74260;
    border-radius:100%;
    position: fixed;
    bottom: 20px;
    z-index: 1;
    right: 20px;
    box-shadow: 0px 0px 10px 1px #F74260;
    display:flex;
    align-items:center;
    justify-content:center;

    -webkit-animation: leaves 1s ease-in-out infinite alternate;
    animation: leaves 1s ease-in-out infinite alternate;
`;

export const CartIcon = styled(Cart)`
    color:#fff;
    height:35px;
    width:35px;
`;