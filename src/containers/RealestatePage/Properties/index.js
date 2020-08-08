import React,{Component} from 'react';
import {PropertiesSection,SectionWrapper,TopLayout,HeadingLayout,SmallHeading,Heading,
    CustomTabList,SliderOuterWrapper,SliderWrapper,
    PropertyLayout,DetailsLayout,TabHeading,TabPara,SizeText,Separator,SpecWrapper,SpecLayout,SpecIcon,SpecText,
    ImageLayout,ImageHolder
} from './properties.style';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { StaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GatsImg from "gatsby-image";

class Properties extends Component{

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

        return(
            <PropertiesSection id="propertiesSection">
                <SectionWrapper>
                    <Container>
                        <Tabs>
                            <TopLayout>
                                <HeadingLayout>
                                    <SmallHeading>
                                        {this.props.PropertiesData.SmallHeading}
                                    </SmallHeading>
                                    <Heading>
                                        {this.props.PropertiesData.Heading}
                                    </Heading>
                                </HeadingLayout>
                                <CustomTabList>
                                    {
                                        this.props.PropertiesData.TabList.map((item,idx) => {
                                            return <Tab>{item.Tab}</Tab>
                                        })
                                    }
                                </CustomTabList>
                            </TopLayout>

                            {
                                this.props.PropertiesData.TabList.map((itemTab,idxTab) => {
                                return <TabPanel>
                                        <SliderOuterWrapper>
                                            <Slider ref={c => (this.slider = c)} {...settings}>
                                            {
                                                itemTab.TabPanel.map((itemPanel,idxPanel) => {
                                                return <SliderWrapper>
                                                    <PropertyLayout>
                                                        <DetailsLayout>
                                                            <TabHeading>{itemPanel.TabHeading}</TabHeading>
                                                            <TabPara>{itemPanel.TabPara}</TabPara>
                                                            <SizeText>
                                                            {itemPanel.SizeText}
                                                            </SizeText>
                                                            <Separator />
                                                            <SpecWrapper>

                                                            {
                                                                itemPanel.SpecLayout.map((specItem,specIndex) => {
                                                                    return <SpecLayout>
                                                                        <SpecIcon src={specItem.SpecIcon} alt=""/>
                                                                        <SpecText>
                                                                        {specItem.SpecText}
                                                                        </SpecText>
                                                                    </SpecLayout>
                                                                })
                                                            }
                                                            </SpecWrapper>
                                                        </DetailsLayout>
                                                        <ImageLayout>
                                                            <ImageHolder>
                                                                <GatsImg
                                                                    fluid={itemPanel.Img.childImageSharp.fluid}
                                                                    alt=""
                                                                    className="propertyImg"
                                                                    imgStyle={{
                                                                        maxHeight:"600px",
                                                                        width:"auto",
                                                                        right:"0",
                                                                        margin:"0px auto"
                                                                    }}
                                                                />
                                                            </ImageHolder>
                                                        </ImageLayout>
                                                    </PropertyLayout>
                                                </SliderWrapper>
                                                })
                                            }
                                            </Slider>
                                        </SliderOuterWrapper>
                                    </TabPanel>
                                })
                            }
                        </Tabs>
                    </Container>
                </SectionWrapper>
            </PropertiesSection>
        );
    }
}


export default () => (
<StaticQuery
    query={graphql`
        query{
            realestatePageJson {
                Properties {
                    SmallHeading
                    Heading
                    TabList{
                        Tab
                        TabPanel{
                            Img{
                                childImageSharp{
                                    fluid(quality: 100){
                                    ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            TabHeading
                            TabPara
                            SizeText
                            SpecLayout{
                                SpecIcon
                                SpecText
                            }
                        }
                    }
                    PrevImg
                    NextImg
                }
            }
        }
    `}

    render={(data) => (
        <Properties PropertiesData={data.realestatePageJson.Properties}/>
    )}
/>
)