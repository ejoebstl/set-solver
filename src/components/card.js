import React from 'react';
import Diamond from './shapes/diamond';
import Cylinder from './shapes/cylinder';
import Tilde from './shapes/tilde';
import './card.css';
import { FaShapes, FaFillDrip, FaPalette, FaTrashAlt, FaChevronUp } from "react-icons/fa";
import Empty from './shapes/empty';


export const COLOR_RED = 'red'
export const COLOR_PURPLE = 'purple'
export const COLOR_GREEN = 'green'
export const COLORS = [COLOR_RED, COLOR_PURPLE, COLOR_GREEN]

export const STYLE_STRIPES = 'stripes'
export const STYLE_EMPTY = 'empty'
export const STYLE_SOLID = 'solid'
export const STYLES = [STYLE_STRIPES, STYLE_EMPTY, STYLE_SOLID]

export const SHAPE_TILDE = 'tilde'
export const SHAPE_DIAMOND = 'diamond'
export const SHAPE_CYLINDER = 'cylinder'
export const SHAPES = [SHAPE_TILDE, SHAPE_DIAMOND, SHAPE_CYLINDER]

function Card(props) {

  let items = []

  const style = `${props.color}-${props.style}`

  for (let i = 0; i < props.count; i++) {
    switch (props.shape) {
      case 'diamond': items.push(<Diamond style={style} color={`${props.color}-solid`}></Diamond>)
        break;
      case 'cylinder': items.push(<Cylinder style={style} color={`${props.color}-solid`}></Cylinder>)
        break;
      case 'tilde': items.push(<Tilde style={style} color={`${props.color}-solid`}></Tilde>)
        break;
    }
  }

  return <div class={props.isSet ? 'set card' : 'card'}>
    <div class="card-header">
      <div class="card-button" onClick={props.nextColor}>
        <FaPalette></FaPalette>
      </div>
      <div class="card-button" onClick={props.nextShape}>
        <FaShapes></FaShapes>
      </div>
      <div class="card-button" onClick={props.nextFill}>
        <FaFillDrip></FaFillDrip>
      </div>
      <div class="card-button" onClick={props.nextCount}>
        <FaChevronUp></FaChevronUp>
      </div>
    </div>
    <div class={`card-content-${props.count}`}>
      {items}
    </div>
    <div class="card-footer">
      <div class="card-button" onClick={props.remove}>
        <FaTrashAlt></FaTrashAlt>
      </div>
    </div>
  </div>
}

export default Card;