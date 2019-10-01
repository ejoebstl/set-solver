import React from 'react';
import './backgrounds.css';

function Diamond(props) {
  return <div class="shape-container">
    <svg width="64" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256">
      <defs>
        <pattern id={`stripes-${props.color}`} viewBox="0,0,8,8" width="16" height="16" patternUnits="userSpaceOnUse">
          <polygon points="0,0 4,0 4,8 0,8" fill="white"></polygon>
          <polygon points="4,0 6,0 6,8 4,8" class={props.color}></polygon>
        </pattern>
      </defs>
      <g>
        <path class={props.style} d="m3.574992,129.752511l251.999998,-123.999991l251.999998,123.999991l-251.999998,123.999991l-251.999998,-123.999991z" stroke-width="4" />
      </g>
    </svg>
  </div >
}

export default Diamond