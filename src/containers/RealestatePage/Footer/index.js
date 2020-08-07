import React,{Component}from 'react';
import {FooterSection,SectionWrapper,HeadingLayout,SmallHeading,Heading,ContactWrapper,
    ContactLayoutLeft,FormLayout,Form,FormGroup,InputText,ContactSpanErr,TextareaMessage,
    TextCenter,SubmitBtn,ContactSpanSuccess,ContactLayoutRight,ContactUsLayout,DetailsLayout,DetailsIcon,
    DetailsText,SocialLayout,FooterSocial,FbIcon,
    TwitterIcon,LinkedinIcon,InstaIcon,BottomFooterPara,BottomLink
} from './footer.style';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticQuery, graphql } from 'gatsby';
import Iframe from 'react-iframe'

const WRNG_MSG_TIMEOUT = 3000;

class Footer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            contact_name:"",
            contact_email:"",
            contact_phone:"",
            contact_message:"",
            success_contact_message:"",
            errors:[]
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validateForm()
    {
        var error_flag = false;
        let errors = {};
        if(this.state.contact_name === "")
        {
            error_flag = true;
            errors['contact_name'] = "Please enter full name!";
            setTimeout(function(){
                this.setState({errors:{}});
            }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_email === "")
        {
            error_flag = true;
            errors['contact_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_email !== "")
        {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.contact_email)) {
                error_flag = true;
                errors["contact_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contact_phone === "")
        {
            error_flag = true;
            errors["contact_phone"] = "Please enter Mobile No!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_phone !== "")
        {
            var patternPhone = new RegExp(/^\d+$/);
            if(!patternPhone.test(this.state.contact_phone)) {
                error_flag = true;
                errors["contact_phone"] = "Please enter valid Mobile No!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
            if(this.state.contact_phone.length<10) {
                error_flag = true;
                errors["contact_phone"] = "Please enter valid Mobile No!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contact_message === "")
        {
            error_flag = true;
            errors["contact_message"] = "Please enter message!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        this.setState({
            errors: errors
        });
        return error_flag;
    }

    contactUsSubmit = (e) =>{
        e.preventDefault();
        if(!this.validateForm())
        {
            //SUCCESS 
            //TO DO
            console.log("Name: "+this.state.contact_name);
            console.log("Email: "+this.state.contact_email);
            console.log("Phone: "+this.state.contact_phone);
            console.log("Message: "+this.state.contact_message);
            this.setState({
                contact_name:"",
                contact_email:"",
                contact_phone:"",
                contact_message:"",
                success_contact_message:"Thanks for contacting us.",
                errors:[]
            },()=>{
                setTimeout(() => {
                    this.setState({
                        success_contact_message:""
                    });
               },WRNG_MSG_TIMEOUT);
            });
        }
    }

    render() {
        return (
            <FooterSection id="footerSection">
                <SectionWrapper>
                    <Container>
                        <HeadingLayout>
                            <SmallHeading>
                            {this.props.FooterData.SmallHeading}
                            </SmallHeading>
                            <Heading>
                            {this.props.FooterData.Heading}
                            </Heading>
                        </HeadingLayout>
                        <ContactWrapper>
                                <ContactLayoutLeft>
                                    <FormLayout>
                                        <Form method="post">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <InputText aria-label="Name" type="text" placeholder="Name"  name="contact_name" onChange={this.handleChange} value={this.state.contact_name}/>
                                                        <ContactSpanErr>{this.state.errors.contact_name}</ContactSpanErr>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <InputText aria-label="Email" type="email" placeholder="Email"  name="contact_email" onChange={this.handleChange} value={this.state.contact_email}/>
                                                        <ContactSpanErr>{this.state.errors.contact_email}</ContactSpanErr>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <InputText aria-label="Mobile No" type="tel" placeholder="Mob No."  name="contact_phone" onChange={this.handleChange} value={this.state.contact_phone}/>
                                                        <ContactSpanErr>{this.state.errors.contact_phone}</ContactSpanErr>
                                                    </FormGroup>
                                                </Col>

                                                <Col md="12">
                                                    <FormGroup>
                                                        <TextareaMessage aria-label="Message" type="text" placeholder="Message" name="contact_message" onChange={this.handleChange} value={this.state.contact_message}></TextareaMessage>
                                                        <ContactSpanErr>{this.state.errors.contact_message}</ContactSpanErr>
                                                    </FormGroup>
                                                </Col>

                                                <Col md="12">
                                                    <TextCenter>
                                                        <SubmitBtn href="#" onClick={this.contactUsSubmit}>{this.props.FooterData.ContactButtonText}</SubmitBtn>
                                                    </TextCenter>
                                                    <ContactSpanSuccess>{this.state.success_contact_message}</ContactSpanSuccess>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </FormLayout>
                                </ContactLayoutLeft>

                                <ContactLayoutRight>
                                <Row>
                                    <Col md={12}>
                                    <Iframe url="https://maps.google.com/maps?f=q&amp;source=s_d&amp;hl=en&amp;saddr=37.42216,-122.083737&amp;z=15&amp;output=embed"
                                        title="google map"
                                        width="100%"
                                        height="200px"
                                        frameBorder="0"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <ContactUsLayout>
                                            <DetailsLayout>
                                                <DetailsIcon src={this.props.FooterData.DetailsData[1].DetailsIcon} alt=""/>
                                                <DetailsText>
                                                {this.props.FooterData.DetailsData[1].DetailsText}
                                                </DetailsText>
                                            </DetailsLayout>
                                            <DetailsLayout>
                                                <DetailsIcon src={this.props.FooterData.DetailsData[2].DetailsIcon} alt=""/>
                                                <DetailsText>
                                                {this.props.FooterData.DetailsData[2].DetailsText}
                                                </DetailsText>
                                            </DetailsLayout>
                                        </ContactUsLayout>
                                    </Col>
                                    <Col md={6}>
                                        <DetailsLayout>
                                            <DetailsIcon src={this.props.FooterData.DetailsData[0].DetailsIcon} alt=""/>
                                            <DetailsText>
                                            {this.props.FooterData.DetailsData[0].DetailsText}
                                            </DetailsText>
                                        </DetailsLayout>
                                    </Col>
                                </Row>
                                <Row>  
                                    <Col md={12}>
                                        <SocialLayout>
                                            <FooterSocial href="#" aria-label={"Fb Link"}>
                                                <FbIcon/>
                                            </FooterSocial>
                                            <FooterSocial href="#" aria-label={"Twitter Link"}>
                                                <TwitterIcon/>
                                            </FooterSocial>
                                            <FooterSocial href="#" aria-label={"Linkedin Link"}>
                                                <LinkedinIcon/>
                                            </FooterSocial>
                                            <FooterSocial href="#" aria-label={"Instagram Link"}>
                                                <InstaIcon/>
                                            </FooterSocial>
                                        </SocialLayout>
                                    </Col>

                                </Row>
                                </ContactLayoutRight>
                            </ContactWrapper>
                        <Row>
                            <Col md="12">
                                <BottomFooterPara>
                                    {this.props.FooterData.BottomFooterPara}
                                    <BottomLink rel="noreferrer" href={this.props.FooterData.BottomFooterLink} target="_blank">
                                    {this.props.FooterData.BottomFooterName}
                                    </BottomLink>
                                </BottomFooterPara>
                            </Col>
                        </Row>
                    </Container>
                </SectionWrapper>
            </FooterSection>
        );
    }
}
export default () => (
    <StaticQuery
        query={graphql`
            query {
                    realestatePageJson{
                        Footer{
                            ContactButtonText
                            DetailsData{
                                DetailsIcon
                                DetailsText
                            }
                            SmallHeading
                            Heading
                            FooterUl{
                                Href
                                Menu
                            }
                            BottomFooterPara
                            BottomFooterName
                            BottomFooterLink
                        }
                    }
                }
            `}
        render={(data) => (
            <Footer FooterData={data.realestatePageJson.Footer}/>
        )}
    />
  )