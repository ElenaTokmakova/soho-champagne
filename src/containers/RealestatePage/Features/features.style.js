import styled from 'styled-components';
import {SectionHeading,Commonpara,Commonh5,SectionSubHeading} from '../Common/common.style';
import {device} from '../Common/device';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImg from '../../../assets/realestate-images/pattern-banner.jpg';

export const FeaturesSection = styled.section`
    background-image:url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;

export const SectionWrapper = styled.div`
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

export const FeaturesWrapper = styled.div`
`;

export const FeaturesCard = styled.div`
    background:#222;
    cursor:pointer;
    padding: 30px;
    overflow:hidden;
    margin-bottom:30px;
`;

export const FeaturesCardIcon = styled.img`
    margin-bottom:20px;
    height: 60px;
`;

export const FeaturesTextLayout = styled.div`
`;

export const FeaturesCardHeading = styled(Commonh5)`
    margin-bottom:10px;
    font-weight:700;
    text-align:left;

    @media ${device.tablet} {
        text-align:left;
    }
`;

export const FeaturesCardPara = styled(Commonpara)`
    margin-bottom:0px;
    opacity:0.9;
`;