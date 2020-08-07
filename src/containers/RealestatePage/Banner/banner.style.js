import styled from 'styled-components';
import {Commonh6,Commonh1} from '../Common/common.style';
import {device} from '../Common/device';
import {ControllerPlay} from '@styled-icons/entypo/ControllerPlay';
import {Container} from 'react-bootstrap';

const OPACITY = 0.6;

export const BannerSection = styled.section`
    min-height:100vh;
`;

export const BannerWrapper = styled.div`
    .slick-list{
        line-height:0;
    }

    .slick-active{
        z-index:999;
    }
`;

export const BannerSlide = styled.div`
    position:relative;
`;

export const BannerImageHolder = styled.div`
    position:relative;
    width:100%;
    height:100vh;

    .bannerImage{
        height:100vh;
    }
`;

export const BannerContents = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:100%;
    display:flex;
    align-items:center;
    background:rgba(0,0,0,${OPACITY});
`;

export const BannerContentLeft = styled.div`
    text-align:left;
    max-width:650px;
    margin-top:40px;

    @media ${device.laptop} {
        max-width:550px;
    }

    @media ${device.tablet} {
        width:100%;
    }
`;

export const BannerSubHeading = styled(Commonh6)`
    color:#fff;
    text-align:left;

    @media ${device.tablet} {
        text-align:center;
    }
`;

export const BannerHeading = styled(Commonh1)`
    color:#fff;
    text-align:left;
    
    @media ${device.tablet} {
        text-align:center;
    }
`;

export const WatchVideoAnchor = styled.a`
    text-decoration:none;

    :hover{
        text-decoration:none;
    }
`;

export const WatchVideoLayout = styled.div`
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        justify-content:center;
    }
`;

export const PlayOuterWrapper = styled.div`
    background:#ADABAC77;
    border-radius:100%;
    padding:6px;
    transition:0.3s all;

    ${WatchVideoLayout}:hover &{
        transform:scale(1.15);
        transition:0.3s all;
    }
`;

export const PlayWrapper = styled.div`
    background:#ADABAC;
    border-radius:100%;
    padding:8px;
`;

export const PlayIcon = styled(ControllerPlay)`
    width: 28px;
    height: 28px;
    color:#fff;
    position:relative;
    left:2px;
`;

export const PlayText = styled(Commonh6)`
    line-height:1;
    margin-bottom:0px;
    margin-left:10px;
    color:#fff;
`;

export const NextPrev = styled(Container)`
    position:absolute;
    bottom:40px;
    right:0px;
    left:0px;
    text-align: right;

    @media ${device.tablet} {
        text-align: center;
    }
`;

export const ImgButton = styled.button`
    line-height:0px;
    padding:0px;
    border:none;
    background:none;
    outline:none;

    :focus{
        outline:0;
    }
`;

export const PrevImg = styled.img`
    margin:0px 10px;
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
    margin:0px 10px;
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
