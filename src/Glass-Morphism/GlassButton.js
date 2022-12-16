import React from 'react';
import { MorphButton } from './Morph-style';
const GlassButton = (props) => {
  const { type } = props;
  return (
    <MorphButton
      Blur={props.Blur}
      Blend ={props.Blend}
      BackgroundColor = {props.BackgroundColor}
      LeftShade={props.LeftShade}
      RightShade={props.RightShade}
      style={props.style}
      HoverColor ={props.HoverColor}
      type={type || "submit"}>
      {props.children}
    </MorphButton>
  )
}

export default GlassButton;