import styled from 'styled-components';
import {device} from '../Common/device'
import {
    Navbar
} from 'react-bootstrap';

export const NavbarCustom = styled(Navbar)`
    background: #ffffff00 !important;
    padding:0px !important;
    position:absolute;
    
    @media ${device.laptop} {
        background: ${props => props.isSticky?"#ffffff":"#ffffff00"} !important;
        position:fixed;
        box-shadow: ${props => props.isSticky?"0px 1px 11px -1px #d6d6d6":"none"};

        .navbar-collapse{
            background:#fff !important;
            padding:10px !important;
        }
    }

    @media ${device.mobileXL} {
        padding-left:15px !important;
        padding-right:15px !important;
    }

    //Scrollspy ul styles
    ul{
        margin:0;
    }

    li{
        padding:15px 20px;
        margin: 0;
        display: inline-flex;
    
        @media ${device.laptop}{
            display:block;
        }
    }

    .is-current a{
        color:#f4ba10;
    }

    //Anchor Link Styles
    a{
        padding:0px 0px 10px;
        color: #ffffff;
        line-height:1;

        :hover{
            text-decoration:none;
            color:#ef5350;
        }

        @media ${device.laptop} {
            color: #494949;
        }
    }

    //Logo
    .navbar-brand {
        padding:10px 0px;
 
        @media ${device.laptop} {
            padding:15px 0px;
        }
    }
`;

export const BrandLogo = styled.img`
    margin-bottom:0px;
    max-width:175px;
    transition:all .5s;

    @media ${device.laptop} {
        max-width:${props => props.isSticky?"140px":"175px"};
    }
    
    @media ${device.mobileM} {
        max-width:145px;
    }
`;

export const NavbarToggleCustom = styled(Navbar.Toggle)`
    outline:0px !important;
    border-color:rgba(255,255,255,.1) !important;

    @media ${device.laptop} {
        border-color:${props => props.isSticky?"rgba(0,0,0,.1)":"rgba(255,255,255,.1)"} !important;
    }

    .navbar-toggler-icon{
        background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        
        @media ${device.laptop} {
            background-image:url("${props => props.isSticky?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"}") !important;
        }
    }
`;
