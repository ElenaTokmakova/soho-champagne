import React from 'react';
import {NeighbourhoodsSection,SectionWrapper,HeadingLayout,
    NeighbourhoodLayout,SmallHeading,Heading,
    ImageHolder,AccordianWrapper
} from './neighbourhoods.style';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GatsImg from "gatsby-image";
import { useStaticQuery, graphql } from 'gatsby';
import AccordianCustom from './AccordianCustom';

const Neighbourhoods = () => {
    const JSONData  = useStaticQuery(graphql`
        query {
                realestatePageJson{
                    Neighbourhoods{
                        SmallHeading
                        Heading
                       Img{
                            childImageSharp{
                                fluid(quality: 100){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        AccordianCustom{
                            title
                            description
                        }
                    }
                }
            }
    `);
    const NeighbourhoodsData = JSONData.realestatePageJson.Neighbourhoods;
        return (
        <NeighbourhoodsSection id="neighbourhoodsSection">
            <SectionWrapper>
                <Container>
                    <HeadingLayout>
                        <SmallHeading>
                            {NeighbourhoodsData.SmallHeading}
                        </SmallHeading>
                        <Heading>
                            {NeighbourhoodsData.Heading}
                        </Heading>
                    </HeadingLayout>
                    <NeighbourhoodLayout>
                        <ImageHolder>
                            <GatsImg 
                                fluid={NeighbourhoodsData.Img.childImageSharp.fluid} 
                                alt=""
                                className="neighbourhoodImg"
                            />
                        </ImageHolder>
                        <AccordianWrapper>
                        {
                            NeighbourhoodsData.AccordianCustom.map((item,idx) => {
                            return <AccordianCustom 
                                isActive={idx===1?true:false}    
                                title={item.title}
                                description= {item.description} 
                            />
                            })
                        }
                        </AccordianWrapper>
                    </NeighbourhoodLayout>
                </Container>
            </SectionWrapper>
        </NeighbourhoodsSection>
    );
}

export default Neighbourhoods;