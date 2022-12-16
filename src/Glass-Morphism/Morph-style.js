import { css } from 'styled-components'
import styled from 'styled-components'

// const leftshade = '#d1d1d136'
//   const rightshade = '#ffffff33'
//   const slide = '#00000099'
//   const hovercolor = '#d1d1d177'
//   const bgcolor = '#d1d1d133'

//for general Morphed Effect (pass more varible in the working)
export const MorphedGlass = css`
    background-color: ${(props) => props.BackgroundColor === undefined ? '#d1d1d133' : props.BackgroundColor};
    background-image:linear-gradient(to bottom right, ${props => props.LeftShade === undefined ? '#d1d1d136' : props.LeftShade}, ${props => props.RightShade === '#ffffff33' ? '#ffffff33' : props.RightShade});
    backdrop-filter: blur(${props => props.Blur === undefined ? 10 * 1 : props.Blur * 1}px); 
    mix-blend-mode: ${(props) => props.Blend === undefined ? 'normal' : props.Blend};
    background: ${(props) => props.Background};
`

export const MorphButton = styled.button`
    ${MorphedGlass}
    width: fit-content; 
    /** Sizeable height for the form **/
    height:fit-content;
    /** Responsive layout **/
    display:flex;
    /** One element on top of the other **/
    flex-direction:column;
    /** Vertically at the center **/
    justify-content: center;
    /** Smooth corners **/
    border-width: 0.05rem;
    border-color: whitesmoke;
    border-radius: 0.5rem;
    /** Top, bottom, right, and left spacing between form and it's content **/
    padding: 4%;
    /** Spacing from the top **/
    margin-top:3%;
    /** Button Shadow **/
    box-shadow: 0.1rem 0.2rem 0.3rem rgba(30,30,30,0.4);

&:active {
    transform: scale(0.96);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 0rem 0rem 0.08rem rgba(30,30,30,0.7);
    /* Lowering the shadow */
}

&:hover {
  background-color:${(props) => props.HoverColor};
}
`

export const MorphCard = styled.div`
  ${MorphedGlass}
  width: fit-content; 
  /** Sizeable height for the form **/
  height:fit-content;
  /** Black color with opacity **/
  box-shadow: 0px 0px 20px rgba(30,30,30,0.5);
  /** Responsive layout **/
  display:flex;
  /** One element on top of the other **/
  flex-direction:column;
  /** Vertically at the center **/
  justify-content: center;
  /** Smooth corners **/
  border-color: whitesmoke;
  border-radius: 1.2rem; 
  /** Top, bottom, right, and left spacing between form and it's content **/
  padding:8%;
  /** Spacing from the top **/
  margin-top:4%;
`

export const MorphTab = styled.div`

  ${MorphedGlass}
  className: ${props => props.className};
  width: fit-content; 
  /** Sizeable height for the form **/
  height:fit-content;
  /** Black color with opacity **/
  box-shadow: 0px 0px 20px rgba(30,30,30,0.5);
  /** Responsive layout **/
  display:flex;
  /** One element on top of the other **/
  flex-direction:column;
  /** Vertically at the center **/
  justify-content: center;
  /** Smooth corners **/
  border-color: whitesmoke;
  border-radius: 1.2rem; 
  /** Top, bottom, right, and left spacing between form and it's content **/
  padding:5%;
  /** Spacing from the top **/
  margin-top:4%;

  &::button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
  }

  &::button:hover {
    background-color: #ddd;
  }
  
  /* Create an active/current tablink class */
  &::button:active {
    background-color: #ccc;
  }
  
  /* Style the tab content */
  &::tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
`

export const GlassSlider = styled.input`
  ${MorphedGlass}
  -webkit-appearance: none;
  width: 100%;
  height: ${props => props.Height === undefined ? 20 * 1 : props.Height * 1}px;
  outline: none;
  opacity: 0.7;
  border-radius:  ${props => props.Height === undefined ? 20 * 2 : props.Height * 2}px; 
  -webkit-transition: .2s;
  transition: opacity .2s;
  box-shadow: 0px 0px 30px rgba(30,30,30,0.2);


  &:hover{
  opacity: 1;}

  &::-webkit-slider-thumb {
  ${MorphedGlass}
  background: ${(props) => props.Slider} ;
  -webkit-appearance: none;
  appearance: none;
  width:  ${props => props.Height === undefined ? 20 * 1.25 : props.Height * 1.25}px;
  height:  ${props => props.Height === undefined ? 20 * 1.25 : props.Height * 1.25}px;
  border-radius: 50%;
  cursor: pointer;
  mix-blend-mode:overlay;
}
&::-moz-range-thumb {
  ${MorphedGlass}
  width: ${props => props.Height === undefined ? 20 * 1.25 : props.Height * 1.25}px;
  height: ${props => props.Height === undefined ? 20 * 1.25 : props.Height * 1.25}px;
  border-radius: 50%;
  cursor: pointer;}
`
