import React from "react";
import { useState, Component } from "react";
import { Accordion, AccordionItem, AccordionHeader } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

class FAQ extends Component {
  
  state={
    stayOpen: false,
  }
  toggle = () => {
    this.setState({
      stayOpen: !this.state.isOpen
    });
  };
 

  render(){
    return(
  
        <div>
          <AppNavbar />
  <Accordion 
    flush
    toggle={function noRefCheck(){}}
  >
    <AccordionItem>
      <AccordionHeader targetId="1" onClick={this.toggle}>
        Food options at the camping
      </AccordionHeader>
      <AccordionItem accordionid="1">
        We'll provide a breakfast bar with some juices, sandwitches in the morning but we highly encourage you to bring your own supplies or enjoy the food trucks that'll be available for you in the festival.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader onClick={this.toggle} targetId="2">
        Will vegetarian/vegan food options be provided during the festival?
      </AccordionHeader>
      <AccordionItem onClick={this.toggle} accordionid="2">
        We are making sure to acomodate everyones dietary choices, therefore we'll be providing food options for many different dietary requirements.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="3">
        Can I bring my own alcohol to the festival?
      </AccordionHeader>
      <AccordionItem accordionid="3">
       You can bring your own alcohol to the camping, but not to the festival. However, we make it our mission to ensure the supply during the festival in our bar stands. 
      </AccordionItem>
    </AccordionItem>
  </Accordion>
 <Footer />
</div>
    )
}
}


export default FAQ;