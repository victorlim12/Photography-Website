// import { css } from 'styled-components'
import styled from 'styled-components'
import { motion } from "framer-motion";

export const Card= styled(motion.div)`
width: fit-content; 
  /** Sizeable height for the form **/
  height:fit-content;
  max-Width:75vw;
  min-height:${(props)=>props.height === undefined ? '50vh' : props.height};
  min-Width:${(props)=>props.min};
  /** Black color with opacity **/
  background-image:linear-gradient(${(props)=>props.direction}, ${(props)=>props.gradient}, rgba(255,255,255,0),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});
  background-size: cover;
  background-position: center;
  /** Responsive layout **/
  display:flex;
  /** One element on top of the other **/
  flex-direction:column;
  border-radius: 0.4em;
  /** Vertically at the center **/
  justify-content: center;
  justify-self:'center';
  /* margin-bottom: 2%;
  margin: 1%; */


  @media screen and (max-width: 912px) {
    background-image:linear-gradient(${(props)=>props.direction2}, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.2),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});
    min-height:${(props) => props.hr === undefined ? '35vh' : props.hr};
    min-width: ${(props)=>props.resize};
    max-width: ${(props)=>props.resize};
  }
`
export const CardContent= styled.div`
    padding:3%;
    height:inherit;
    min-Width:${(props)=>props.max};
    max-Width:${(props)=>props.max};
    z-index: 999;

    @media screen and (max-width: 912px) {
    margin-top: ${(props) => props.margin === undefined ? '0%' : props.margin};
    max-Width:80vw;
  }
`

export const HeroVideo = styled.video`
  z-index: 0;
  position: absolute;
  width:100%;
  height:100%;
	right: 0;
	bottom: 0;
  border-radius: 0.7em;
  object-fit: cover;

	&.fade-in-image { animation: fadeIn 3s; }
	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	  }
`
 // background-image:linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255,255,255,0),  rgba(255, 102, 0, 0)),url(${(props) => props.Background});