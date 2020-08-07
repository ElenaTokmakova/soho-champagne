import styled from 'styled-components';
import {device} from './device';

export const Commonbtn = styled.a`
    background: #f4ba10;
    color: #000;
    padding: 8px 40px;
    text-decoration:none;
    display:inline-block;
    text-transform:uppercase;
    cursor:pointer;

    :hover{
        background:#c39409;
        text-decoration:none;
        color:#fff;
    }

    @media ${device.mobileXL} {
        padding: 8px 30px;
    }
`;

export const Commonh1 = styled.h1`
    font-size:62px;
    line-height:1.2;
    margin-bottom:20px;
    color:#fff;
    text-align:center;

    @media ${device.laptop} {
        font-size:54px;
        line-height:1.2;
    }
    
    @media ${device.mobileXL} {
        font-size:42px;
        line-height:1.2;
    }
`;

export const Commonh2 = styled.h2`
    font-size: 40px;
    line-height:46px;
    margin-bottom:20px;
    color:#fff;
    text-align:center;

    @media ${device.tablet} {
        font-size:38px;
        line-height:44px;
    }
`;

export const Commonh3 = styled.h3`
    font-size: 36px;
    line-height:42px;
    margin-bottom:20px;
    color:#fff;
    text-align:center;
`;

export const Commonh4 = styled.h4`
    font-size:30px;
    line-height:36px;
    margin-bottom:20px;
    color:#fff;
    text-align:center;

    @media ${device.tablet} {
        font-size:28px;
        line-height:32px;
    }
`;

export const Commonh5 = styled.h5`
    font-size:22px;
    line-height:28px;
    margin-bottom:20px;
    color:#fff;
    text-align:center;
`;

export const Commonh6 = styled.h6`
    font-size:18px;
    line-height:24px;
    margin-bottom:20px;
    color:#fff;
    text-align:center;
    font-weight:600;

    @media ${device.mobileXL} {
        font-size:17px;
        line-height:23px;
    }
`;

export const CommonMerriWh6 = styled.h6`
    font-size:18px;
    line-height:24px;
    margin-bottom:20px;
    color:#fff;
    text-align:center;
    font-family: 'Merriweather', serif;
    font-weight:600;

    @media ${device.mobileXL} {
        font-size:17px;
        line-height:23px;
    }
`;

export const Commonpara = styled.p`
    color:#fff;
    margin-bottom:20px;
    font-size:14px;
    line-height:1.5;
`;

export const SectionHeading = styled(Commonh2)`
    text-align:center;
    line-height:1;
    color:#fff;

    @media ${device.tablet} {
        line-height:1;
    }
`;

export const SectionSubHeading = styled(Commonh6)`
    line-height:1;
    text-align:center;
    color:#fff;
    margin-bottom:10px;

    @media ${device.mobileXL} {
        line-height:1;
    }
`;