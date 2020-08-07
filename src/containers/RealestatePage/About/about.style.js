import styled from 'styled-components';
import {device} from '../Common/device';
import {SectionHeading,SectionSubHeading,Commonpara} from '../Common/common.style';
import {Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImg from '../../../assets/realestate-images/pattern-banner.jpg';

export const AboutSection = styled.section`
    background-image:url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;

export const SectionWrapper = styled.div`
    min-height:100vh;
    display:flex;
    align-items:center;
    padding:70px 0px;

    @media ${device.tablet} {
        padding:70px 10px;
    }
`;

export const CustomRow = styled(Row)`
    align-items:center;
    
    @media ${device.laptop} {
        flex-direction:column;
    }
`;

export const TextLayout = styled.div`
    @media ${device.laptop} {
        margin-bottom:30px;
    }
`;

export const HeadingLayout = styled.div`
    margin-bottom:30px;
`;

export const SmallHeading = styled(SectionSubHeading)`
    text-align:left;

    @media ${device.tablet}{
        text-align:left;
    }
`;

export const Heading = styled(SectionHeading)`
    margin-bottom:0px;
    text-align:left;
`;

export const Description1 = styled(Commonpara)`
    color:#fff;
`;

export const Description2 = styled(Commonpara)`
    color:#fff;
`;

export const ImageHolder = styled.div`
    padding-right:50px;

    @media ${device.laptop} {
        padding-right:0px;
    }

    .aboutImg{
        height:450px;
    }
`;


