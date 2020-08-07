import styled from 'styled-components';
import {SectionHeading,SectionSubHeading,Commonh5,CommonMerriWh6,Commonpara} from '../Common/common.style';
import {device} from '../Common/device';
import { TabList} from 'react-tabs';
import BackgroundImg from '../../../assets/realestate-images/banner-3.jpg';
import {ChevronLeft} from '@styled-icons/fa-solid/ChevronLeft';
import {ChevronRight} from '@styled-icons/fa-solid/ChevronRight';

const OPACITY = 0.7;

export const PropertiesSection = styled.section`
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
    padding:70px 0px;

    @media ${device.tablet} {
        padding:70px 10px;
    }
`;

export const TopLayout = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.laptop} {
        flex-direction:column;
        margin-bottom:45px;
    }
`;

export const HeadingLayout = styled.div`
    margin-bottom:50px;
`;

export const SmallHeading = styled(SectionSubHeading)`
    text-align:left;
    @media ${device.laptop} {
        text-align:center;
    }
`;

export const Heading = styled(SectionHeading)`
    margin-bottom:0px;
    text-align:left;

    @media ${device.laptop} {
        text-align:center;
    }
`;

export const CustomTabList = styled(TabList)`
    margin:0px;

    .react-tabs__tab{
        padding: 10px 20px;
        color: #fff;
        font-size:16px;
    }

    .react-tabs__tab--selected{
        color: #fff;
        border: none;
        border-radius:0px;
        background:transparent;
        border:1px solid #fff;
    }
`;

export const SliderOuterWrapper = styled.div`
    position:relative;
    margin-right:-15px;
    margin-left:-15px;
    .slick-list{
        line-height:0;
    }

    :focus{
        outline:0;
    }
`;

export const ImgButtonLeft = styled.button`
    line-height:0px;
    padding-bottom:0px;
    border:none;
    background:none;
    outline:none;
    position:absolute;
    top:calc(50% - 25px); // (icon width + Button Padding)/2 
    z-index:99;
    background:rgba(0,0,0,0.5);
    padding:15px 10px;
    left: 15px;
    // border-radius:100%;

    :focus{
        outline:0;
    }
`;

export const LeftIcon = styled(ChevronLeft)`
    width:20px;
    height:20px;
    color:#fff;

    ${ImgButtonLeft}:hover &{
        color:#f4ba10;
    }
`;


export const SliderWrapper = styled.div`

`;

export const PropertyLayout = styled.div`
    display:flex;
    margin:0px 15px;
    background:rgba(34,34,34,0.9);
    @media ${device.laptop}{
        flex-direction:column;
    }
`;

export const DetailsLayout = styled.div`
    padding:50px 50px 30px;
    width:40%;

    @media ${device.laptop} {
        width:100%;
    }

    @media ${device.tablet}{
        
    }
`;

export const TabHeading = styled(Commonh5)`
    text-align:left;
    margin-bottom:10px;
    font-weight:700;
`;

export const TabPara = styled(Commonpara)`

`;

export const SizeText = styled(CommonMerriWh6)`
    text-align:left;
    
    @media ${device.tablet}{
        text-align:left;
    }
`;

export const Separator = styled.hr`
    height:1px;
    margin:0px 0px 20px;
    border:none;
    background:#555;
`;
export const SpecWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

export const SpecLayout = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    width:50%;

    @media ${device.mobileL}{
        width:100%;
    }
`;

export const SpecIcon = styled.img`
    width:30px;
    flex-shrink:0;
`;

export const SpecText = styled(Commonpara)`
    margin-left:10px;
    margin-bottom:0px;
`;

export const ImageLayout  = styled.div`
    width:60%;
    background:#fff;
    padding:50px;
    display:flex;
    align-items:center;

    @media ${device.laptop} {
        width:100%;
    }

    @media ${device.tablet}{
        width:100%;
    }
`;

export const ImageHolder  = styled.div`
    max-height:250px;
    width:100%;

    .propertyImg{
    }
`;

export const ImgButtonRight = styled.button`
    line-height:0px;
    padding-bottom:0px;
    border:none;
    background:none;
    outline:none;
    position:absolute;
    top:calc(50% - 25px); // (icon width + Button Padding)/2 
    z-index:99;
    background:rgba(0,0,0,0.5);
    padding:15px 10px;
    right: 15px;

    :focus{
        outline:0;
    }
`;

export const RightIcon = styled(ChevronRight)`
    width:20px;
    height:20px;
    color:#fff;

    ${ImgButtonRight}:hover &{
        color:#f4ba10;
    }
`;