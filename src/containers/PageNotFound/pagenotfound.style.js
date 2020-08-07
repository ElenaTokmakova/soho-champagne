import styled from 'styled-components';
import BackgroundImg from '../../assets/pagenotfound-images/notfoundbg.jpg'
import {Warning} from '@styled-icons/material/Warning'
import {Commonbtn} from './Common/common.style'

export const NotFoundSection = styled.section`
    height:100vh;
    background:url(${BackgroundImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const Overlay = styled.div`
    background:#00000066;
    display:flex;
    align-items:center;
    height:100vh;
`;

export const NotFoundSectionInner = styled.div`
    margin:auto;
    max-width:600px;
    text-align:center;
    padding:25px;
`;
export const NotFoundImg = styled.img`
    max-height: 230px;
    margin-bottom:20px;
`;
export const NotFoundHeading = styled.h3`
    margin-bottom:20px;
    font-size: 50px;
    line-height:50px;
    color:#fff;
`;
export const NotFoundPara = styled.p`
    margin-bottom:40px;
    color:#fff;
`;
export const NotFoundBtnBg = styled.div`

`;

export const WarningIcon = styled(Warning)`
    height:120px;
    width:120px;
    color:#fff;
    margin-bottom:10px;
`;

export const HomeBtn = styled(Commonbtn)`
    box-shadow:none;
`;