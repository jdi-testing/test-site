import React from 'react';
import SimpleCollapse from "./SimpleCollapse";
import SimpleFade from "./SimpleFade";
import SimpleGrow from "./SimpleGrow";
import SimpleSlide from "./SimpleSlide";
import SimpleZoom from "./SimpleZoom";


export default function SimpleTransitions(...args) {
    return (
      <div>
        <h1>Transitions</h1>
        <h2>Collapse</h2>
        <SimpleCollapse />
        <h2>Fade</h2>
        <SimpleFade />
        <h2>Grow</h2>
        <SimpleGrow />
        <h2>Slide</h2>
        <SimpleSlide />
        <h2>Zoom</h2>
        <SimpleZoom />
      </div>
    );
}