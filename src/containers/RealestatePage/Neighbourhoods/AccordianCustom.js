import React, { Component } from "react";
import AnimateHeight from 'react-animate-height';
import {AccordianRow,Accordian,AccordianTitleCol,AccordianTitle,AccordianContentCol,
    AccordianContent,IconHolder,PlusIcon,MinusIcon
} from './neighbourhoods.style'

class AccordianCustom extends Component {
    constructor(props){
        super(props);
        this.state = { isActive: props.isActive };
    }

    toggleVisibility = () =>
        this.setState({ isActive: !this.state.isActive });

    render(){
        return(
            <AccordianRow>
                <Accordian>
                    <AccordianTitleCol onClick={this.toggleVisibility}>
                        <AccordianTitle>
                            {this.props.title}
                        </AccordianTitle>
                        <IconHolder>
                        {
                            this.state.isActive &&
                            <MinusIcon/>
                        }
                        {
                            !this.state.isActive &&
                            <PlusIcon/>
                        }
                        </IconHolder>
                    </AccordianTitleCol>

                    <AnimateHeight height={this.state.isActive?"auto":"0%"}>
                        <AccordianContentCol isActive={this.state.isActive}>
                            <AccordianContent>
                                {this.props.description}
                            </AccordianContent>
                        </AccordianContentCol>
                    </AnimateHeight>
                </Accordian>
            </AccordianRow>
        );
    }
}

export default AccordianCustom;