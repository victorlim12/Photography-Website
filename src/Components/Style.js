import { css } from 'styled-components'
import styled from 'styled-components'
import TEST from '../Images/foklore.png'

export const Card= styled.div`
width: fit-content; 
  /** Sizeable height for the form **/
  height:fit-content;
  min-height: 40vh;
  max-Width:75vw;
  min-Width:75vw;
  /** Black color with opacity **/
  background-image:linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255,255,255,0),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});
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
  /** Smooth corners **/
  border-radius:10px;
  /** Top, bottom, right, and left spacing between form and it's content **/
  justify-self:'center';
  margin-bottom: 4%;
  /** Spacing from the top **/

  @media screen and (max-width: 768px) {
    background-image:linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0,0,0.2),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});
    min-height:50vh;
    min-width: 80vw;
  }
`
export const CardContent= styled.div`
    padding:3%;
    height:inherit;
    @media screen and (max-width: 768px) {
    margin-top: 50%;
  }

`

 // background-image:linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255,255,255,0),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});