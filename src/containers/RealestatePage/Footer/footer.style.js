import styled from 'styled-components';
import {SectionHeading,SectionSubHeading,Commonpara} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundImg from '../../../assets/realestate-images/contact.jpg'
const OPACITY = 0.5;

export const FooterSection = styled.section`
    background-image:url(${BackgroundImg});
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

export const ContactWrapper = styled.div`
    display:flex;
    align-items:center;
    background:rgba(51,51,51,0.9);
    margin-bottom:20px;

    @media ${device.tablet} {
        flex-direction:column;
    }
`;

export const ContactLayoutRight = styled.div`
    width:100%;
    background:rgba(34,34,34,0.9);
    padding:30px;

    iframe{
        margin-bottom:15px;
    }

    @media ${device.laptop}{
        padding:20px;
    }

    @media ${device.tablet} {
        width:100%;
    }
`;

export const ContactUsLayout = styled.div`
`;

export const DetailsLayout = styled.div`
    display:flex;
    align-items:flex-start;
    margin-bottom:15px;
`;

export const DetailsIcon = styled.img`
    width:20px;
`;

export const DetailsText = styled(Commonpara)`
    color:#fff;
    margin-bottom:0;
    margin-left:15px;
    line-height:1.2;
`;