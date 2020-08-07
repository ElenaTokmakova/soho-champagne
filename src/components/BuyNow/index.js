import React from 'react';
import {BuyNowOuterLayout,CartAnchor,BuyNowLayout,CartIcon} from './buynow.style';

const BuyNow = () => {
    return(
        <BuyNowOuterLayout>
            <CartAnchor aria-label="Buy Now" rel="noreferrer" target="_blank" 
                href="https://www.reactrepo.com/template/22-topaz-real-estate-gatsby-landing-pages/">
                <BuyNowLayout>
                    <CartIcon />
                </BuyNowLayout>
            </CartAnchor>
        </BuyNowOuterLayout>
    );
}

export default BuyNow;