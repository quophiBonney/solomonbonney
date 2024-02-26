import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button className="btn btn-black text-light" onClick={decoratedOnClick}>
        {children}
      </button>
    </div>
  );
}

const Faqs = () => {
  return (
    <div className="container px-3 mt-5" id="faqs">
      <h2 className="h-2">FAQs</h2>
      <div className="row">
        <div className="col-12">
          <Accordion defaultActiveKey="0">
            <>
              <CustomToggle eventKey="0">
                <h4 className="h-4 fw-bold">
                  Are you available for remote job?
                </h4>
              </CustomToggle>
            </>
            <Accordion.Collapse eventKey="0">
              <p className="p">
                Yes I am available with full experience and taste of remote job.
              </p>
            </Accordion.Collapse>
            <hr />
            <CustomToggle eventKey="1">
              <h4 className="h-4 fw-bold"> Where are you located in Ghana?</h4>
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
              <p className="p">
                I am in the Central Region to be precise Kasoa-Bawjiase but
                really travel around the world for work and studies.
              </p>
            </Accordion.Collapse>
            <hr />
            <CustomToggle eventKey="2">
              <h4 className="h-4 fw-bold">
                How do you work with your clients?
              </h4>
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
              <p className="p">
                I first engage them in detailed and descriptive conversation in
                order to know their requirements, then again interact with them
                during every phase in the development process.
              </p>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Faqs;
