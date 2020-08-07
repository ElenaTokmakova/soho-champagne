import styled from 'styled-components';
import {device} from '../Common/device';
import Img1 from '../../../assets/realestate-images/bullet.svg';
import Img2 from '../../../assets/realestate-images/selected-bullet.svg';

export const StickySection = styled.section`
    height:100vh;
    position:fixed;
    z-index:999999;
    right:20px;
    
    //9 Menu Items, each with height 30 px
    //Selected menu item with 40px
    // Total 310/2 = 155px
    top:calc(50% - 155px); 

    @media ${device.laptop}{
        display:none;
    }
`;

export const MenuLayout = styled.div`

    //scrollspy styles
    ul{
        margin:0;
    }

    a{
        font-size:10px;
        padding:10px 0px;
        line-height:1;
        display:block;
    }

`;

export const MenuLi = styled.li`
    list-style: none;
    margin:0px;
    line-height:1;
    font-size:0px;
    text-align:center;
`;

export const StickyIcon = styled.span`
    display: inline-block;
    width:   10px;
    height:  10px;
    background-image: url(${Img1});
    background-repeat:no-repeat;
    background-position:center;

    .is-current &{
        width:   20px;
        height:  20px;
        background-image: url(${Img2});
        background-repeat:no-repeat;
        background-position:center;
    }
`;