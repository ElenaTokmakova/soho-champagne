import styled from 'styled-components';
import {device} from '../Common/device';
import {SectionHeading,SectionSubHeading,CommonMerriWh6,Commonpara} from '../Common/common.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChevronDown} from '@styled-icons/boxicons-regular/ChevronDown';
import {ChevronUp} from '@styled-icons/boxicons-regular/ChevronUp';
import BackgroundImg from '../../../assets/realestate-images/neighbourhood.jpg';
const OPACITY = 0.6;

export const NeighbourhoodsSection = styled.section`
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

export const HeadingLayout = styled.div`
    margin-bottom:50px;
`;

export const SmallHeading = styled(SectionSubHeading)`

`;

export const Heading = styled(SectionHeading)`
`;

export const NeighbourhoodLayout = styled.div`
    display:flex;
    height:320px;

    @media ${device.tablet} {
        flex-direction:column;
        height:auto;
    }
`;

export const ImageHolder = styled.div`
    width:65%;

    .neighbourhoodImg{
        height:320px;
    }

    @media ${device.laptop} {
        padding-right:0px;
    }

    @media ${device.tablet} {
        width:100%;
    }
`;

export const AccordianWrapper = styled.div`
    width:35%;
    overflow:scroll;
    padding:5px 20px;
    background:rgba(34,34,34,0.9);

    @media ${device.tablet} {
        width:100%;
        height:320px;
    }
`;


export const AccordianRow = styled.div`
`;

export const Accordian = styled.div`
    overflow: hidden;
`;

export const AccordianTitleCol = styled.div`
    display:flex;
    // align-items:center;
    transition: all .5s;
    border-bottom:1px solid #555;

    :hover{
        transition: all .5s;
    }
`;

export const AccordianTitle = styled(CommonMerriWh6)`
    padding: 15px 0px 15px;
    overflow:hidden;
    margin-bottom:0px;
    cursor:pointer;
    color:#fff;
    flex-grow: 1;
    line-height:1;
    font-weight:400;
    text-align:left;

    @media ${device.tablet} {
        text-align:left;
    }
`;

export const AccordianContentCol = styled.div`
    padding: 0px 40px 15px 0px;

    ${props => props.isActive &&`

    `}

    ${props => !props.isActive &&`

    `}
`;
export const AccordianContent = styled(Commonpara)`
    margin-bottom:0px;
    padding:10px 0px;
`;

export const IconHolder = styled.div`
    background:transparent;
    display:flex;
    align-items:center;
`;

export const PlusIcon = styled(ChevronDown)`
    color: #F7941D;
    width: 25px;
    margin-left: 10px;
    flex-shrink:0;
`;

export const MinusIcon = styled(ChevronUp)`
    color: #F7941D;
    width: 25px;
    margin-left: 10px;
    flex-shrink:0;
`;


