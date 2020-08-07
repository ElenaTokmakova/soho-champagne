import React from 'react';
import {FeaturesSection,SectionWrapper,HeadingLayout,SmallHeading,Heading,
    FeaturesWrapper,FeaturesCard,FeaturesCardIcon,FeaturesTextLayout,FeaturesCardHeading,
    FeaturesCardPara
} from './features.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useStaticQuery, graphql } from 'gatsby';

const Features = () => {  
    const JSONData  = useStaticQuery(graphql`
        query{
            realestatePageJson {
                Features {
                    SmallHeading
                    Heading
                    FeaturesWrapper{
                        FeaturesCardIcon
                        FeaturesCardHeading
                        FeaturesCardPara
                    }
                }
            }
        }
    `);
    const FeaturesData = JSONData.realestatePageJson.Features;
    return(
        <FeaturesSection id="featuresSection">
            <SectionWrapper>
                <Container>
                    <HeadingLayout>
                        <SmallHeading>
                        {FeaturesData.SmallHeading}
                        </SmallHeading>
                        <Heading>
                        {FeaturesData.Heading}
                        </Heading>
                    </HeadingLayout>
                    <FeaturesWrapper>
                        <Row>
                        { 
                            FeaturesData.FeaturesWrapper.map((item,idx) => {
                            return <Col lg="4" md="12" sm="12">
                                        <FeaturesCard>
                                            <FeaturesCardIcon src={item.FeaturesCardIcon} alt=""/>
                                            <FeaturesTextLayout>
                                                <FeaturesCardHeading>{item.FeaturesCardHeading}</FeaturesCardHeading>
                                                <FeaturesCardPara>{item.FeaturesCardPara}</FeaturesCardPara>
                                            </FeaturesTextLayout>
                                        </FeaturesCard>
                                </Col>
                            })
                        }
                        </Row>
                    </FeaturesWrapper>
                </Container>
                </SectionWrapper>
        </FeaturesSection>
)
}
export default Features;