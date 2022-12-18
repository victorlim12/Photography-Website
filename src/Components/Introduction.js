import React from "react";

//own utils
import GlassCard from "../Glass-Morphism/GlassCard";
import {Card, CardContent} from '../Components/Style'


//MUI components
import { Grid, Typography, Button} from "@mui/material";

//import { motion, useAnimation } from "framer-motion";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Colorpick from "../Utils/ColoredImg";
// import GlassButton from '../Glass-Morphism/GlassButton'
// import GlassSlide from '../Glass-Morphism/GlassSlider'

//MUI - need npm install
// import MusicNoteIcon from '@mui/icons-material/MusicNote';

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST from '../Images/bg1.png'
import TEST2 from '../Images/bg2.jpg'
import TEST3 from '../Images/bg6.jpg'

export default function Introduction(){

  
    // const { scrollYProgress } = useScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const color='rgba(0,0,0,0)'
    return(
        <div className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', display:"inline-block", justifyContent:'center'
        }}>
          <Grid container sx={{justifyContent:'center', mt:'4%', height:'100%'}}>
         <Card Background={TEST} direction={'to right'} direction2={'to top'} Color={'red'} gradient={color} min={'75vw'} resize={'90vw'} style={{justifySelf:'center'}}>
            <CardContent>
                  <Typography variant="h3" fontWeight={500}><span className="blue">welcome</span> </Typography>
                  <Typography variant="h5" fontWeight={400}>to a story that i share</Typography>
                  <Typography variant="h5" fontWeight={400}>a narrative that i crafted.</Typography>
            </CardContent>
          </Card>
          <Card Background={TEST2} direction={'to top'} direction2={'to bottom'} gradient={color} Color={'blue'} min={'60vw'} resize={'55vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h4" fontWeight={500} align='center'> <span className="green">at the bottom of</span> </Typography>
                  <Typography variant="h5" fontWeight={400} align='center'>this soul, lies a  </Typography>
                  <Typography variant="h5" fontWeight={400} align='center'>a narrative that i burried.</Typography>
            </CardContent>
          </Card>
          <Card Background={TEST3} direction={'to bottom'} Color={'blue'}  gradient={color} min={'20vw'} resize={'35vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h4" fontWeight={500} align='center'><span className="blue">at the bottom of</span></Typography>
                  <Typography variant="h5" fontWeight={400} align='center'>and no regret or whatsoever</Typography>
            </CardContent>
          </Card>        
          </Grid>
        </div>
    
    )
}