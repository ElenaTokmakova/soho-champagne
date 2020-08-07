import styled from 'styled-components';
import {SectionHeading,SectionSubHeading,Commonpara,Commonbtn} from '../Common/common.style';
import {device} from '../Common/device';
import {SocialFacebook} from '@styled-icons/typicons/SocialFacebook';
import {SocialTwitter} from '@styled-icons/typicons/SocialTwitter';
import {SocialLinkedin} from '@styled-icons/typicons/SocialLinkedin';
import {SocialInstagram} from '@styled-icons/typicons/SocialInstagram';
import BackgroundImg from '../../../assets/realestate-images/banner-10.jpg'
const OPACITY = 0.7;

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

export const ContactLayoutLeft = styled.div`
    width:35%;
    padding:30px;

    @media ${device.laptop}{
        padding:20px;
    }

    @media ${device.tablet} {
        width:100%;
    }  
`;

export const FormLayout = styled.div`

`;

export const Form = styled.form`
    margin-bottom:0px;
`;

export const FormGroup = styled.div`
    margin-bottom:15px;
`;

export const InputText = styled.input`
    width: 100%;
    background:rgba(34,34,34,0.9);
    border: none;
    padding: 8px 16px;
    outline:0;
    font-size: 15px;
    color:#fff;
`;

export const ContactSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const TextareaMessage = styled.textarea`
    width: 100%;
    background:rgba(34,34,34,0.9);
    border: none;
    color:#fff;
    padding: 8px 16px;
    border-radius: 5px;
    height:100px;
    font-size: 15px;
    outline:0;
`;

export const TextCenter = styled.div`
    text-align:center;
`;

export const SubmitBtn = styled(Commonbtn)`
    font-size:15px;
    width:100%;
`;

export const ContactSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const ContactLayoutRight = styled.div`
    width:65%;
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
export const SocialLayout  = styled.div`
    margin: 15px 0px 0px;

    @media ${device.tablet} {
        margin:0;
    }  
`;

export const FooterSocial = styled.a`
    margin-right:10px;
`;

export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #f4ba10;
    background: rgba(244,186,16,0.2);
    border-radius:100%;
    padding: 6px;
    
    transition:all .5s;
    :hover{
        background:#3b5999;
        color:#fff;
    }
`;

export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #f4ba10;
    background: rgba(244,186,16,0.2);
    border-radius:100%;
    padding: 6px;
    transition:all .5s;
    :hover{
        background:#00adee;
        color:#fff;
    }
`;

export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #f4ba10;
    background: rgba(244,186,16,0.2);
    padding: 6px;
    border-radius:100%;
    transition:all .5s;
    :hover{
        background:#3b5999;
        color:#fff;
    }
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #f4ba10;
    background: rgba(244,186,16,0.2);
    padding: 6px;
    border-radius:100%;
    transition:all .5s;
    :hover{
        background:#ed008d;
        color:#fff;
    }
`;

export const BottomFooterPara = styled.p`
    color:#fff;
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;
    text-align:center;
`;

export const BottomLink = styled.a`
    font-size:15px;   
    margin-bottom:0px;
    padding:10px 0px;  
    color:#fff;
    text-decoration:none;
    text-align:center;
    :hover{
        text-decoration:underline;
    }
`;