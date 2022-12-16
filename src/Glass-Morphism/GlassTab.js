import React from 'react';
import { MorphTab } from './Morph-style';
import './theme.css';

const GlassTab = (props) => {
  return (
    <MorphTab
    className={'Tabs'}
      Blur={props.Blur}
      Blend ={props.Blend}
      BackgroundColor = {props.BackgroundColor}
      LeftShade={props.LeftShade}
      RightShade={props.RightShade}
      style={props.style}>
      {props.children}
    </MorphTab>
  )
}

export default GlassTab;