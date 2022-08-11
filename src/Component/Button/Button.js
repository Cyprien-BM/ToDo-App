import React from 'react';
import './Button.css';

export default function Buttons(props) {
  return (
    <button
      className={'btn ' + props.class}
      onClick={props.handleClick ? () => props.handleClick() : undefined}
    >
      {props.txt}
    </button>
  );
}
