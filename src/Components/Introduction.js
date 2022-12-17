import React from "react";

//own utils
import '../App.css';
import './Introduction.css'
import '../Utils/Gradient.css'
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
import TEST3 from '../Images/album.png'

export default function Introduction(){
    const leftshade = '#d1d1d122'
    const slide = '#000000BB'
    const rightshade = '#00000054'
    const [colors,setColor]=React.useState('');
    const [active, setActive] = React.useState(0)

    const sources = [{
      src: TEST, 
      title: "Folklore", 
      Artist: "SWIFT.",
      Span2:'grey',
      desc:"Day off in Kyoto",
      span:"green"
    },
      {
      src: TEST3, 
      title: "Punisher", 
      Artist: "PHOEBE.",
      Span2:'grey',
      desc:"Day off in Kyoto",
      span:"cool"
    },
      {
      src: TEST2, 
      title: "Melodrama",
      Artist: "Lorde.",  
      Span2:'grey',
      desc:"All the glamours and the drama",
      span:"blue"
    }
    ];
    // const { scrollYProgress } = useScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return(
        <div className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', display:"inline-block", justifyContent:'center'
        }}>
          <Grid container sx={{justifyContent:'center', mt:'4%', height:'100%'}}>
         <Card Background={TEST} Color={'red'} style={{justifySelf:'center'}}>
            <CardContent>
                  <Typography variant="h3" fontWeight={500}><span className="blue">welcome</span> </Typography>
                  <Typography variant="h4" fontWeight={400}>to a story that i share</Typography>
                  <Typography variant="h4" fontWeight={400}>a narrative that i crafted.</Typography>
            </CardContent>
          </Card>
          <Card Background={TEST2} Color={'blue'}  style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h3" fontWeight={500} align='right'> <span className="crimson">welcome</span> </Typography>
                  <Typography variant="h4" fontWeight={400}>to a story that i share</Typography>
                  <Typography variant="h4" fontWeight={400}>a narrative that i crafted.</Typography>
            </CardContent>
          </Card>
        

          </Grid>
        </div>
    
    )
}