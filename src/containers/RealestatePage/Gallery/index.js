import React,{Component} from 'react';
import {GallerySection,SectionWrapper,HeadingLayout, SmallHeading,Heading,
    NextPrev,ImgButton,PrevImg,NextImg,SliderOuterWrapper,SLiderWrapper,GallerySliderLayout
} from './gallery.style';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticQuery, graphql } from 'gatsby';
import GatsImg from "gatsby-image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends Component {
    constructor(props) {
      console.log("Gallery props", props)
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    openDialogBox(imageArray,idx)
    {
        this.props.openLightBox(imageArray,idx);
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
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            rows:2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
        return (
            <GallerySection id="gallerySection">
                <SectionWrapper>
                    <Container>
                        <Row>
                            <Col md={8}>
                                <HeadingLayout>
                                    <SmallHeading>
                                        {this.props.GalleryData.SmallHeading}
                                    </SmallHeading>
                                    <Heading>
                                        {this.props.GalleryData.Heading}
                                    </Heading>
                                </HeadingLayout>
                            </Col>
                            <Col md={4}>
                                <NextPrev>
                                    <ImgButton onClick={this.previous} aria-label="Prev Button">
                                        <PrevImg src={this.props.GalleryData.PrevImg} alt=""/>
                                    </ImgButton>
                                    <ImgButton onClick={this.next} aria-label="Next Button">
                                        <NextImg src={this.props.GalleryData.NextImg} alt=""/>
                                    </ImgButton>
                                </NextPrev>
                            </Col>
                        </Row>
                        <SliderOuterWrapper>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                            this.props.GalleryData.Slider.map((item,idx) => {
                            return <SLiderWrapper key={idx}>
                                    <GallerySliderLayout onClick={this.openDialogBox.bind(this,this.props.GalleryData,idx)}>
                                        <GatsImg
                                            fluid={item.GallerySliderImg.childImageSharp.fluid}
                                            className="GallerySliderImg"
                                            alt=""
                                        />
                                    </GallerySliderLayout>
                                </SLiderWrapper>
                            })
                        }
                        </Slider>
                        </SliderOuterWrapper>
                    </Container>
                </SectionWrapper>
            </GallerySection>
        );
    }
}

export default props => (
<StaticQuery
    query={graphql`
        query {
            realestatePageJson{
                Gallery{
                    SmallHeading
                    Heading
                    PrevImg
                    NextImg
                    Slider{
                        GallerySliderImg{
                            childImageSharp{
                                fluid(quality: 100){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `}
    render={(data) => (
        <Gallery
        GalleryData={data.realestatePageJson.Gallery}
        {...props}
        />
    )}
/>
)
