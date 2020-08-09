import React from "react";
import {StickySection,MenuLayout,MenuLi,StickyIcon} from "./stickymenu.style"
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useStaticQuery, graphql } from 'gatsby';
import ScrollSpy from 'react-scrollspy';

const Stickymenu = () => {
    const JSONData  = useStaticQuery(graphql`
        query{
            realestatePageJson {
                StickyMenu{
                    Items
                    MenuItems{
                        Href
                    }
                }
            }
        }
    `);
    const StickyMenuData =  JSONData.realestatePageJson.StickyMenu;
    return(
        <StickySection>
            <MenuLayout>
                <ScrollSpy offset={-59} items={StickyMenuData.Items} currentClassName="is-current">
                {
                    StickyMenuData.MenuItems.map((menuObj, idx) => {
                    return <MenuLi key={idx}>
                            <AnchorLink href={menuObj.Href} aria-label={"menulink-"+idx} rel="noreferrer">
                                <StickyIcon />
                            </AnchorLink>
                        </MenuLi>
                    })
                }
                </ScrollSpy>
            </MenuLayout>
        </StickySection>
    );
}

export default Stickymenu;