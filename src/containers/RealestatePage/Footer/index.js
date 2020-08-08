import React,{Component}from 'react';
import {FooterSection,SectionWrapper,HeadingLayout,SmallHeading,Heading,ContactWrapper,ContactLayoutRight,ContactUsLayout,DetailsLayout,DetailsIcon,DetailsText
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
                                <ContactLayoutRight>
                                <Row>
                                    <Col md={12}>
                                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44815.973954558285!2d-75.72612864155553!3d45.40937240119311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce043308bd0ab1%3A0x2802f4957a72ceb0!2sSoHo%20Champagne!5e0!3m2!1sen!2sus!4v1596829688628!5m2!1sen!2sus"
                                        title="google map"
                                        width="100%"
                                        height="400px"
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
                                                <DetailsIcon src={this.props.FooterData.DetailsData[0].DetailsIcon} alt=""/>
                                                <DetailsText>
                                                {this.props.FooterData.DetailsData[0].DetailsText}
                                                </DetailsText>
                                            </DetailsLayout>
                                        </ContactUsLayout>
                                    </Col>
                                    <Col md={6}>
                                    <DetailsLayout>
                                        <DetailsIcon src={this.props.FooterData.DetailsData[1].DetailsIcon} alt=""/>
                                        <DetailsText>
                                        {this.props.FooterData.DetailsData[1].DetailsText}
                                        </DetailsText>
                                    </DetailsLayout>
                                    </Col>
                                </Row>
                                </ContactLayoutRight>
                            </ContactWrapper>
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
                        }
                    }
                }
            `}
        render={(data) => (
            <Footer FooterData={data.realestatePageJson.Footer}/>
        )}
    />
  )