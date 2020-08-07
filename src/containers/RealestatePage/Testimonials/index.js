import React,{Component}from 'react';
import {TestimonialWrapper,SectionWrapper,HeadingLayout,SmallHeading,Heading,
    SliderOuterWrapper,ImgButtonLeft,LeftIcon,SliderWrapper,TestimonialCard,ImageLayout,
    Author,Designation,TextLayout,TestimonialText,
    ImgButtonRight,RightIcon
} from './testimonials.style';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GatsImg from "gatsby-image";
import { StaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends Component{

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <TestimonialWrapper id="testimonialsSection">
                <SectionWrapper>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <HeadingLayout>
                                    <SmallHeading>
                                    {this.props.TestimonialsData.SmallHeading} 
                                    </SmallHeading>
                                    <Heading>
                                    {this.props.TestimonialsData.Heading} 
                                    </Heading>
                                </HeadingLayout>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <SliderOuterWrapper>
                                    <ImgButtonLeft onClick={this.previous} aria-label="Prev Button">
                                        <LeftIcon />
                                    </ImgButtonLeft>
                                    <Slider ref={c => (this.slider = c)} {...settings}>
                                    {
                                        this.props.TestimonialsData.TestimonialCards.map((item,idx) => {
                                        return <SliderWrapper>
                                            <TestimonialCard>
                                                <ImageLayout>
                                                    <GatsImg 
                                                        fluid={item.Img.childImageSharp.fluid} 
                                                        alt=""
                                                        className = "authorImg"
                                                        imgStyle={{
                                                            objectPosition:"top"
                                                        }}
                                                    />
                                                </ImageLayout>
                                                <TextLayout>
                                                    <Author>
                                                    {item.Author} 
                                                    </Author>
                                                    <Designation>
                                                    {item.Designation} 
                                                    </Designation>
                                                    <TestimonialText>
                                                    {item.TestimonialText} 
                                                    </TestimonialText>
                                                </TextLayout>
                                            </TestimonialCard>
                                            </SliderWrapper>
                                        })
                                    }
                                    </Slider>
                                    <ImgButtonRight onClick={this.next} aria-label="Next Button">
                                        <RightIcon />
                                    </ImgButtonRight>
                                </SliderOuterWrapper>
                            </Col>
                        </Row>
                    </Container>
                </SectionWrapper>
            </TestimonialWrapper>
        );
    }
}
export default () => (
    <StaticQuery
        query={graphql`
            query {
                    realestatePageJson{
                        Testimonials{
                        SmallHeading
                        Heading
                        TestimonialCards{
                            Img{
                                childImageSharp{
                                    fluid(quality: 100){
                                    ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            TestimonialText
                            Author
                            Designation
                        }
                    }
                }
            }
            
        `}
        render={(data) => (
            <Testimonials TestimonialsData={data.realestatePageJson.Testimonials}/>
        )}
    />
  )