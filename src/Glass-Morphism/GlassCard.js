import React from 'react';
import { MorphCard } from './Morph-style';

const GlassCard = (props) => {
  return (
    <MorphCard
      Blur={props.Blur}
      Blend ={props.Blend}
      BackgroundColor = {props.BackgroundColor}
      LeftShade={props.LeftShade}
      RightShade={props.RightShade}
      style={props.style}>
      {props.children}
    </MorphCard>
  )
}

export default GlassCard;