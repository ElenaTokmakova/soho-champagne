import React from 'react';
import {NotFoundSection,Overlay,NotFoundSectionInner,NotFoundHeading,NotFoundPara,
NotFoundBtnBg,WarningIcon,HomeBtn} from './pagenotfound.style';

const NotFound = () => (
    <NotFoundSection>
        <Overlay>
            <NotFoundSectionInner>
                <WarningIcon />
                <NotFoundHeading>
                    Page not found!
                </NotFoundHeading>
                <NotFoundPara>
                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                </NotFoundPara>
                <NotFoundBtnBg>
                    <HomeBtn href="/">
                        Home
                    </HomeBtn>
                </NotFoundBtnBg>
            </NotFoundSectionInner>
        </Overlay>
    </NotFoundSection>
  )
  
  export default NotFound;