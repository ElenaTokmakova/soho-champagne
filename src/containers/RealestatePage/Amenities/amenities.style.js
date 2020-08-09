import styled from 'styled-components';
import {SectionHeading,SectionSubHeading,CommonMerriWh6} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundImg from '../../../assets/realestate-images/amenities.jpg';
const OPACITY = 0.6;

export const AmenitiesSection = styled.section`
    background-image:url(${BackgroundImg}) !important;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;

export const SectionWrapper = styled.div`
    background:rgba(0,0,0,${OPACITY});
    min-height:100vh;
    display:flex;
    align-items:center;
    padding:70px 0px 40px;

    @media ${device.tablet} {
        padding:70px 10px 40px;
    }
`;

export const HeadingLayout = styled.div`
    margin-bottom:50px;
`;

export const SmallHeading = styled(SectionSubHeading)`

`;

export const Heading = styled(SectionHeading)`
`;

export const AmenitiesLayout = styled.div`
    background:rgba(34,34,34,0.9);
    // background:rgba(255,255,255,0.2);
    text-align:center;
    padding:30px;
    margin-bottom:30px;
    // display:flex;
    align-items:center;
`;

export const AmenitiesImage = styled.img`
    height:40px;
    margin-bottom:20px;
`;

export const AmenitiesText = styled(CommonMerriWh6)`
    margin-bottom:0px;
    line-height:1;

    @media ${device.mobileXL} {
        line-height:1;
    }
`;


