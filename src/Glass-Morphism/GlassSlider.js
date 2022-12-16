import React from 'react';
import { GlassSlider } from './Morph-style';
const GlassSlide = (props) => {

  return (
    <div>
    <GlassSlider
      type={'range'}
      min="1" max="100" defaultValue="50" step="1"
      Blur={props.blur}
      Blend ={props.blend}
      BackgroundColor = {props.BackgroundColor}
      Background = {props.Background}
      LeftShade={props.leftshade}
      RightShade={props.rightshade}
      style={props.style}
      Slider={props.SliderColor}
      Height={props.Height}>
      {props.children}
    </GlassSlider>
    </div>
  )
}

export default GlassSlide;