import { css } from 'styled-components'
import styled from 'styled-components'
import TEST from '../Images/foklore.png'

export const Card= styled.div`
width: fit-content; 
  /** Sizeable height for the form **/
  height:fit-content;
  min-height: 40vh;
  max-Width:75vw;
  min-height:${(props)=>props.height === undefined ? '40vh' : props.height};
  min-Width:${(props)=>props.min};
  /** Black color with opacity **/
  background-image:linear-gradient(${(props)=>props.direction}, ${(props)=>props.gradient}, rgba(255,255,255,0),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});
  background-size: cover;
  background-position: center;
  backdrop-filter:blur(10px);
  /* box-shadow: 0px 0px 30px ${(props) => props.Color}; */
  /** Responsive layout **/
  display:flex;
  /** One element on top of the other **/
  flex-direction:column;
  /** Vertically at the center **/
  justify-content: center;
  border-radius:1em;
  justify-self:'center';
  margin-bottom: 2%;
  margin: 1%;


  @media screen and (max-width: 768px) {
    background-image:linear-gradient(${(props)=>props.direction2}, rgba(0, 0, 0, 1), rgba(0,0,0,0.2),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});
    min-height:40vh;
    max-height:40vh;
    min-width: ${(props)=>props.resize};
    max-width: ${(props)=>props.resize};
  }
`
export const CardContent= styled.div`
    padding:3%;
    height:inherit;
    min-Width:${(props)=>props.max};
    max-Width:${(props)=>props.max};

    @media screen and (max-width: 768px) {
    margin-top: ${(props) => props.margin === undefined ? '30%' : props.margin};
    max-Width:80vw;
  }

`

 // background-image:linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255,255,255,0),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});