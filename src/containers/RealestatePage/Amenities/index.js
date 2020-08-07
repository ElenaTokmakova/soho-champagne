import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AmenitiesSection,
    SectionWrapper,
    HeadingLayout,
    SmallHeading,
    Heading,
    AmenitiesLayout,
    AmenitiesImage,
    AmenitiesText
} from './amenities.style';

import { useStaticQuery, graphql } from 'gatsby';

const Amenities = () => {
    const JSONData  = useStaticQuery(graphql`
    query {
        realestatePageJson{
            Amenities{
                SmallHeading
                Heading
                AmenitiesData{
                    Img
                    AmenitiesText
                }
            }
        }
    }
  `);
    const AmenitiesData = JSONData.realestatePageJson.Amenities;
    return(
        <AmenitiesSection id="amenitiesSection">
            <SectionWrapper>
                <Container>
                    <Row>
                        <Col md={12}>
                            <HeadingLayout>
                                <SmallHeading>
                                {AmenitiesData.SmallHeading}
                                </SmallHeading>
                                <Heading>
                                {AmenitiesData.Heading}
                                </Heading>
                            </HeadingLayout>
                        </Col>
                    </Row>
                    <Row>
                    {
                        AmenitiesData.AmenitiesData.map((amnObj, idx) => {
                        return <Col lg={3} md={6} sm={6}>
                            <AmenitiesLayout>
                                <AmenitiesImage src={amnObj.Img} alt="" />
                                <AmenitiesText>
                                {amnObj.AmenitiesText}
                                </AmenitiesText>
                            </AmenitiesLayout>
                        </Col>
                        })
                    }
                    </Row>
                </Container>
            </SectionWrapper>
        </AmenitiesSection>

    );
}

export default Amenities;