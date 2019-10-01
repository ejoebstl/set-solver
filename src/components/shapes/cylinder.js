import React from 'react';
import './backgrounds.css';

function Cylinder(props) {
  return <div class="shape-container">
    <svg width="64" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256">
      <defs>
        <pattern id={`stripes-${props.color}`} viewBox="0,0,8,8" width="16" height="16" patternUnits="userSpaceOnUse">
          <polygon points="0,0 4,0 4,8 0,8" fill="white"></polygon>
          <polygon points="4,0 6,0 6,8 4,8" class={props.color}></polygon>
        </pattern>
      </defs>
      <g>
        <path class={props.style} d="m85.585412,8.625429l335.729143,0l0,0c43.981473,0 79.635416,54.397427 79.635416,121.50002c0,67.102569 -35.65396,121.499972 -79.635416,121.499972l-335.729143,0l0,0c-43.981423,0 -79.635416,-54.397403 -79.635416,-121.499972c0,-67.102617 35.653993,-121.50002 79.635416,-121.50002z" stroke-width="4" />
      </g>
    </svg>
  </div >
}

export default Cylinder