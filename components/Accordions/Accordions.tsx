import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type AccordionPropsType ={
	title:string
	collapsed:boolean
}

function Accordion(props: AccordionPropsType) {
  debugger;
  console.log("Accordion rendering");
 if (props.collapsed === true ){ return (
    <div>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </div>
 )
 }
  return (
    <div>
      <AccordionTitle title={props.title} />
    
    </div>
  );
}

type AccordionTitlePropsType ={
	title:string
}

function AccordionTitle(props: AccordionTitlePropsType ) {
  console.log("Accordion TITLE");
  return <h3>{props.title}</h3>;
}

//type AccordionPropsType ={

//}
function AccordionBody() {
  console.log("AccordionBody");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
export default Accordion;
