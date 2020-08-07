import styled from 'styled-components';
import {device} from './device';

export const Commonbtn = styled.a`
    background: #ef5350;
    color: #fff;
    padding: 8px 40px;
    text-decoration:none;
    border-radius: 5px;
    display:inline-block;
    text-transform:uppercase;
    cursor:pointer;

    :hover{
        background:#e91916;
    }

    @media ${device.mobileXL} {
        padding: 8px 30px;
    }
`;

export const Commonh1 = styled.h1`
    font-size:50px;
    line-height:55px;
    margin-bottom:20px;
    text-transform:uppercase;
    font-weight:600;

    @media ${device.laptop} {
        font-size:45px;
        line-height:50px;
    }

    @media ${device.tablet} {
        text-align:center;
    }
    @media ${device.mobileXL} {
        font-size:40px;
        line-height:45px;
    }
`;

export const Commonh2 = styled.h2`
    font-size: 42px;
    line-height:48px;
    margin-bottom: 30px;
    font-weight:700;
    color:#333;

    @media ${device.tablet} {
        font-size:40px;
    }
`;

export const Commonh3 = styled.h3`
    font-size: 36px;
    line-height:42px;
    margin-bottom: 30px;
    font-weight:600;
    text-transform:uppercase;
    font-weight:700;
`;

export const Commonh4 = styled.h4`
    font-size:30px;
    color:#333;
    line-height:35px;
    text-align:center;
    margin-bottom:20px;
    font-weight:700;

    @media ${device.tablet} {
        font-size:28px;
        line-height:32px;
    }
`;

export const Commonh5 = styled.h5`
    font-size:24px;
    color:#333;
    line-height:29px;
    text-align:center;
    margin-bottom:20px;
    font-weight:700;
`;

export const Commonh6 = styled.h6`
    font-size:18px;
    line-height:24px;
    margin-bottom:20px;
    font-weight:600;

    @media ${device.tablet} {
        text-align:center;
    }

    @media ${device.mobileXL} {
        font-size:17px;
        line-height:23px;
    }
`;

export const Commonpara = styled.p`
    color:#666666;
    margin-bottom:20px;
    font-size:15px;
    line-height:25px;
`;

export const SectionHeading = styled(Commonh2)`
    text-align:center;
    line-height:1;
    text-transform:uppercase;
`;
