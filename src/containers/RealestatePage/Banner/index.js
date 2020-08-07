import React,{Component} from "react";
import {BannerSection,
    BannerWrapper,
    BannerSlide,
    BannerImageHolder,
    BannerContents,
    BannerContentLeft,
    BannerSubHeading,
    BannerHeading,
    WatchVideoAnchor,
    WatchVideoLayout,
    PlayOuterWrapper,
    PlayWrapper,
    PlayIcon,
    PlayText,
    NextPrev,
    ImgButton,
    PrevImg,
    NextImg
} from './banner.style'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticQuery, graphql } from 'gatsby';
import GatsImg from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from 'react-bootstrap';

class Banner extends Component {
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
            fade:true,
            dots:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000
        };
        return (
            <BannerSection id="homeSection">
                <BannerWrapper>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        this.props.BannerData.BannerSlides.map((item,idx)=>{
                            return<BannerSlide>
                                <BannerImageHolder>
                                    <GatsImg 
                                        fluid={item.BannerImage.childImageSharp.fluid} 
                                        alt=""
                                        className="bannerImage"
                                    />
                                </BannerImageHolder>
                                <BannerContents>
                                    <Container>
                                        <BannerContentLeft>
                                            <BannerSubHeading>{item.BannerSubHeading}</BannerSubHeading>
                                            <BannerHeading>{item.BannerHeading}</BannerHeading>
                                            <WatchVideoAnchor href="#">
                                                <WatchVideoLayout>
                                                    <PlayOuterWrapper>
                                                        <PlayWrapper>
                                                            <PlayIcon />
                                                        </PlayWrapper>
                                                    </PlayOuterWrapper>
                                                    
                                                    <PlayText>
                                                        {item.WatchVideoAnchor}
                                                    </PlayText>
                                                </WatchVideoLayout>
                                            </WatchVideoAnchor>
                                        </BannerContentLeft>
                                    </Container>
                                </BannerContents>
                            </BannerSlide>
                        })
                    }
                    </Slider>

                    <NextPrev>
                        <ImgButton onClick={this.previous} aria-label="Prev Button">
                            <PrevImg src={this.props.BannerData.PrevImg} alt=""/>
                        </ImgButton>
                        <ImgButton onClick={this.next} aria-label="Next Button">
                            <NextImg src={this.props.BannerData.NextImg} alt=""/>
                        </ImgButton>
                    </NextPrev>
                </BannerWrapper>
            </BannerSection>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                realestatePageJson{
                    Banner{
                        BannerSlides{
                            BannerImage{
                                childImageSharp{
                                    fluid(quality: 100){
                                    ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            BannerHeading
                            BannerSubHeading
                            WatchVideoAnchor
                        }
                        PrevImg
                        NextImg
                    }
                }
            }
        `}
        render={(data) => (
            <Banner BannerData={data.realestatePageJson.Banner}/>
        )}
    />
    )