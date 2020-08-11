import React from 'react';
import {AboutSection,SectionWrapper,CustomRow,TextLayout,HeadingLayout,SmallHeading,Heading,
    Description1,Description2,ImageHolder
} from './about.style';
import {Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GatsImg from "gatsby-image";
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
    const JSONData  = useStaticQuery(graphql`
        query {
                realestatePageJson{
                    About{
                       SmallHeading
                       Heading
                       Description1
                       Description2
                       Img{
                        childImageSharp{
                            fluid(quality: 100){
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                       }
                    }
                }
            }
    `);
    const AboutData = JSONData.realestatePageJson.About;
    return (
        <AboutSection id="aboutSection">
            <SectionWrapper>
                <Container>
                    <CustomRow>
                        <Col md={12} lg={7}>
                            <TextLayout>
                                <HeadingLayout>
                                    <SmallHeading>
                                        {AboutData.SmallHeading}
                                    </SmallHeading>
                                    <Heading>
                                        {AboutData.Heading}
                                    </Heading>
                                </HeadingLayout>
                                <Description1>
                                {AboutData.Description1}
                                </Description1>
                                <Description2>
                                {AboutData.Description2}
                                </Description2>
                            </TextLayout>
                        </Col>
                        <Col md={12} lg={5}>
                            <ImageHolder>
                                <GatsImg
                                    fluid={AboutData.Img.childImageSharp.fluid}
                                    alt=""
                                    className="aboutImg"
                                />
                            </ImageHolder>
                        </Col>
                    </CustomRow>
                </Container>
            </SectionWrapper>
        </AboutSection>
    );
}

export default About;