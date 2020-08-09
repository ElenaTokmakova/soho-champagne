import styled from 'styled-components';
import {device} from '../Common/device';
import {SectionSubHeading,SectionHeading} from '../Common/common.style';
import BackgroundImg from '../../../assets/realestate-images/pattern-banner.jpg';

export const GallerySection = styled.section`
    background-color: black;
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
    text-align:left;

    @media ${device.tablet}{
        text-align:center;
    }
`;

export const Heading = styled(SectionHeading)`
    text-align:left;

    @media ${device.tablet}{
        text-align:center;
    }
`;

export const NextPrev = styled.div`
    text-align:right;

    @media ${device.tablet}{
        text-align:center;
        margin-bottom:40px;
    }
`;

export const ImgButton = styled.button`
    line-height:0px;
    padding-bottom:0px;
    border:none;
    background:none;
    outline:none;

    :focus{
        outline:0;
    }
`;

export const PrevImg = styled.img`
    margin:0px 5px;
    cursor:pointer;
    height:50px;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }

    @media ${device.tablet} {
        height:40px;
    }
`;

export const NextImg = styled.img`
    margin:0px 5px;
    cursor:pointer;
    transition:all .4s;
    height:50px;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
    @media ${device.tablet} {
        height:40px;
    }
`;

export const SliderOuterWrapper = styled.div`
    margin-left:-15px;
    margin-right:-15px;

    .slick-dots li button::before {
        color: white;
        font-size: 20px;
    }

`;

export const SLiderWrapper = styled.div`
    outline:0;
    transition:all 1s;
`;

export const GallerySliderLayout = styled.div`
    margin:0px 15px;

    .GallerySliderImg{
        height:170px;
        margin-bottom:25px;

        @media ${device.tablet} {
            width:100%;
            padding:0px 0px;
        }
    }
`;







