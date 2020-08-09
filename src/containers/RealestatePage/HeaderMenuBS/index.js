import React,{Component} from "react";
import {NavbarCustom,NavbarToggleCustom} from "./headermenubs.style"
import {
    Container,Nav,Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticQuery, graphql } from 'gatsby';
import ScrollSpy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Headermenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            stickyClass:'top',
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            let stickyClass = 'topSticky';
            let scrollPos = window.scrollY;

            if(scrollPos < 100){
                stickyClass = 'top';
            }

            if(this.state.stickyClass !== stickyClass)
            {
                this.setState({ stickyClass });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render(){
        return(
            <NavbarCustom
                expand="lg" fixed="top"
                isSticky={this.state.stickyClass==="topSticky"?true:false}>
                <Container>

                    <NavbarToggleCustom
                    isSticky={this.state.stickyClass==="topSticky"?true:false}
                    aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-auto">
                        <ScrollSpy offset={-59} items={this.props.HeaderData.Items} currentClassName="is-current">
                            {
                                this.props.HeaderData.MenuItems.map((menuItem, idx)=>{
                                    return <li key={idx}>
                                        <AnchorLink offset={55} href={menuItem.Href}>
                                            {menuItem.Menu}
                                        </AnchorLink>
                                    </li>
                                })
                            }
                            </ScrollSpy>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavbarCustom>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query{
                realestatePageJson {
                    Header{
                        Items
                        MenuItems{
                            Menu
                            Href
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Headermenu HeaderData={data.realestatePageJson.Header}/>
        )}
    />
  )