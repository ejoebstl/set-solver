import React from 'react';
import './backgrounds.css';

function Tilde(props) {
  return <div class="shape-container">
    <svg width="64" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256">
      <defs>
        <pattern id={`stripes-${props.color}`} viewBox="0,0,8,8" width="16" height="16" patternUnits="userSpaceOnUse">
          <polygon points="0,0 4,0 4,8 0,8" fill="white"></polygon>
          <polygon points="4,0 6,0 6,8 4,8" class={props.color}></polygon>
        </pattern>
      </defs>
      <g>
        <path class={props.style} d="m1.994998,29.219526c168.666682,-97.167012 337.333331,97.167004 505.999979,0l0,174.900592c-168.666648,97.16702 -337.333297,-97.166996 -505.999979,0l0,-174.900592z" stroke-width="4" />
      </g>
    </svg>
 </div >
}

export default Tilde