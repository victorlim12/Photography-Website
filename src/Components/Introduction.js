import React from "react";

//own utils
import '../App.css';
import '../Utils/Gradient.css'
import GlassCard from "../Glass-Morphism/GlassCard";


//MUI components
import { Grid, Typography, Button} from "@mui/material";

//import { motion, useAnimation } from "framer-motion";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Colorpick from "../Utils/ColoredImg";
import GlassButton from '../Glass-Morphism/GlassButton'
import GlassSlide from '../Glass-Morphism/GlassSlider'

//MUI - need npm install
import MusicNoteIcon from '@mui/icons-material/MusicNote';

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST from '../Images/foklore.png'
import TEST2 from '../Images/melodrama.png'
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
        <Grid container justifyContent="center" alignItems="center" sx={{display: 'block'}}>
        <div className={'image-bg'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw'
        }}>
           <Grid container item justifyContent="center" alignItems="center" lg={12} xs={12} xl={12} sx={{m: '5%'}}>
            <GlassCard style={{width:'80vw'}}>

            </GlassCard>
            <GlassCard style={{width: '80vw'}}>

            </GlassCard>
            <GlassCard style={{width: '80vw'}}>
                
            </GlassCard>

          </Grid>
        </div>
    
        </Grid>    
    )
}