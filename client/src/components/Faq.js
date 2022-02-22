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
  
        <div className="text-center bg-light">
          <AppNavbar />
  <Accordion className="text"
    flush
    toggle={function noRefCheck(){}}
  >
    <AccordionItem className="text">
      <AccordionHeader className="faq-text" targetId="1" onClick={this.toggle}>
       <b>Food options at the camping</b> 
      </AccordionHeader>
      <AccordionItem accordionid="1" className="faq-text">
        We'll provide a breakfast bar with some juices, sandwitches in the morning but we highly encourage you to bring your own supplies or enjoy the food trucks that'll be available for you in the festival.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader className="faq-text" onClick={this.toggle} targetId="2">
        <b>Will vegetarian/vegan food options be provided during the festival?</b>
      </AccordionHeader>
      <AccordionItem className="faq-text" onClick={this.toggle} accordionid="2">
        We are making sure to acomodate everyones dietary choices, therefore we'll be providing food options for many different dietary requirements.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader  targetId="3">
       <b> Can I bring my own alcohol to the festival?</b>
      </AccordionHeader>
      <AccordionItem  accordionid="3">
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