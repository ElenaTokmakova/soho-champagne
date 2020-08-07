import styled from 'styled-components';
import {device} from '../Common/device';
import {SectionHeading,SectionSubHeading,Commonh5,Commonpara} from '../Common/common.style';
import {ChevronLeft} from '@styled-icons/fa-solid/ChevronLeft';
import {ChevronRight} from '@styled-icons/fa-solid/ChevronRight';
import BackgroundImg from '../../../assets/realestate-images/pattern-banner.jpg';

export const TestimonialWrapper = styled.section`
    background-image:url(${BackgroundImg});    
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;

export const SectionWrapper = styled.div`
    min-height:100vh;
    display:flex;
    align-items:center;
    padding:70px 0px 30px;

    @media ${device.tablet} {
        padding:70px 10px 30px;
    }
`;

export const HeadingLayout = styled.div`
    margin-bottom:50px;
`;

export const SmallHeading = styled(SectionSubHeading)`
    
`;

export const Heading = styled(SectionHeading)`
`;

export const SliderOuterWrapper = styled.div`
    max-width:800px;
    margin:0px auto;
    position:relative;

    .slick-list{
        line-height:0;
    }
`;

export const ImgButtonLeft = styled.button`
    line-height:0px;
    padding-bottom:0px;
    border:none;
    background:none;
    outline:none;
    position:absolute;
    top:calc(50% - 25px);
    z-index:99;
    background:#f4ba10;
    padding: 15px;
    left: 0px;
    border-radius:100%;

    :focus{
        outline:0;
    }

    :hover{
        background:#c39409;
    }
`;

export const LeftIcon = styled(ChevronLeft)`
    width:20px;
    height:20px;
    color:#fff;
`;

export const SliderWrapper = styled.div`
    outline:0;
`;

export const TestimonialCard = styled.div`
    background:rgba(34,34,34,0.9);
    margin:40px 25px;
    text-align:center;
`;

export const ImageLayout = styled.div`
    width:80px;
    flex-shrink:0;
    border-radius:100%;
    position: relative;
    top: -40px;
    margin: 0px auto;
    
    .authorImg{
        width:80px;
        height:80px;
        border-radius:100%;
        object-fit:cover;
    }
    
`;

export const TextLayout = styled.div`
    margin-top: -20px;
    padding: 0px 40px 40px;
`;

export const Author = styled(Commonh5)`
    margin-bottom:10px;
    color:#fff;
    line-height:1;

    @media ${device.tablet} {
        padding:0px;
    }
`;

export const Designation = styled(Commonpara)`
    line-height:1;
    margin-bottom:20px;
    color:#fff;

    @media ${device.tablet} {
        padding:0px;
    }
`;

export const TestimonialText = styled(Commonpara)`
    margin-bottom:0px;
    color:#fff;
`;

export const ImgButtonRight = styled.button`
    line-height:0px;
    padding-bottom:0px;
    border:none;
    background:none;
    outline:none;
    position:absolute;
    top:calc(50% - 25px);
    z-index:99;
    background:#f4ba10;
    padding: 15px;
    right: 0px;
    border-radius:100%;

    :focus{
        outline:0;
    }
    :hover{
        background:#c39409;
    }
`;

export const RightIcon = styled(ChevronRight)`
    width:20px;
    height:20px;
    color:#fff;
`;


