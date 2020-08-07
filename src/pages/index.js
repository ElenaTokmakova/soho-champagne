import React,{Component} from "react";
import Headermenu from "../containers/RealestatePage/HeaderMenuBS";
import Stickymenu from "../containers/RealestatePage/StickyMenu";
import Banner from "../containers/RealestatePage/Banner";
import Features from "../containers/RealestatePage/Features";
import Properties from "../containers/RealestatePage/Properties";
import About from "../containers/RealestatePage/About";
import Amenities from "../containers/RealestatePage/Amenities";
import Gallery from "../containers/RealestatePage/Gallery";
import Neighbourhoods from "../containers/RealestatePage/Neighbourhoods";
import Testimonials from "../containers/RealestatePage/Testimonials";
import Footer from "../containers/RealestatePage/Footer";
import GlobalStyle from "../containers/RealestatePage/Common/global-styles";
import Fonts from "../containers/RealestatePage/Common/fonts";
import "../components/layout.css";
import SEO from "../components/seo";
import BuyNow from "../components/BuyNow";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class RealestatePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpenLightBox: false,
            lightBoxImages:[],
            photoIndex: 0,
        }
        this.openLightBox = this.openLightBox.bind(this);
    }

    openLightBox(imageArray,idx)
    {
        const images = [];
        for(const [index,value] of imageArray.Slider.entries()){
            console.log(index);
            images.push(value.GallerySliderImg.childImageSharp.fluid.src);
        }
        
        this.setState(
            {
                isOpenLightBox: true,
                lightBoxImages:images,
                photoIndex:idx
            }
        );
    }

    render() {
        return(
                <div>
                {
                    <div>
                        <Fonts/>
                        <GlobalStyle />
                        <main>
                            <SEO 
                                title="Real Estate Page 6 | Gatsby Landing Page Templates"
                                description="Buy unique and professional React GatsbyJS Real Estate landing page templates from Topaz"
                            />
                            <BuyNow />
                            <Headermenu />
                            <Stickymenu />
                            <Banner />
                            <Features />
                            <Properties />
                            <About />
                            <Amenities />
                            <Gallery openLightBox = {this.openLightBox} />
                            <Neighbourhoods />
                            <Testimonials />
                        </main>
                        <Footer />
                    </div>
                }
                {
                    this.state.isOpenLightBox && (
                    <Lightbox
                        mainSrc={this.state.lightBoxImages[this.state.photoIndex]}
                        nextSrc={this.state.lightBoxImages[(this.state.photoIndex + 1) % this.state.lightBoxImages.length]}
                        prevSrc={this.state.lightBoxImages[(this.state.photoIndex + this.state.lightBoxImages.length - 1) % this.state.lightBoxImages.length]}
                        onCloseRequest={() => this.setState({ isOpenLightBox: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (this.state.photoIndex + this.state.lightBoxImages.length - 1) % this.state.lightBoxImages.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (this.state.photoIndex + 1) % this.state.lightBoxImages.length,
                        })
                        }
                    />
                    )
                }   
                </div> 
                )
            }
        }
  
  export default RealestatePage;
  