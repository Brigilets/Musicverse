/*import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./Footer";
import AppNavbar from "./AppNavbar";

export default function FAQ1() {
  return (
    <>
    <AppNavbar />
    <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <h4 className="accordion-body"></h4>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
  </div>
  <Footer />
  </>
  );
}
*/

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./Footer";
import AppNavbar from "./AppNavbar";
import FAQ from "./Faq";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const QA = [
  {question: "Food options at the camping", answer:"  We'll provide a breakfast bar with some juices, sandwitches in the morning but we highly encourage you to bring your own supplies or enjoy the food trucks that'll be available for you in the festival."},
  {question: "Will vegetarian/vegan food options be provided during the festival?", answer: " We are making sure to acomodate everyones dietary choices, therefore we'll be providing food options for many different dietary requirements."},
  {question: " Can I bring my own alcohol to the festival?", answer: "You can bring your own alcohol to the camping, but not to the festival. However, we make it our mission to ensure the supply during the festival in our bar stands. " },
]

const FAQ1 = () =>{
  return(
    <div>
    <AppNavbar />
<Card className="border border-none">
  {QA.map((set)=><CardBody>
    <CardTitle tag="h5">
      {set.question}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     { set.answer}
    </CardSubtitle> 
  </CardBody>)}
</Card>
<Footer />
</div>
  )
}
export default FAQ1