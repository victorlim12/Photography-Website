import React from "react";

//own utils
import '../App.css';
import '../Utils/Gradient.css'
import vid from '../Images/LX_d7M.mp4'


//MUI components
import { Grid, Typography, Button} from "@mui/material";

//import { motion, useAnimation } from "framer-motion";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero(){
    // const { scrollYProgress } = useScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return(
        <Grid container >
        <motion.div animate={{scale: 1, opacity: 1, backgroundColor: [	'rgb(64,0,120)', 'hsl(0, 0,0)'],transition: {
            duration: 2
           },
 }} className="image-bg" 
                style={{
                        transition: "all .5s ease",
                        WebkitTransition: "all 1s ease",
                        MozTransition: "all 1s ease",width:'100vw',height:'100vh', overflowY:'scroll'
                        }}>
            <motion.div  initial={{ opacity: 0, scale: 1.8}}
            animate={{scale: 1, opacity: 1,transition: {
                 duration: 2
                },
      }} >
                <Grid container item sx={{display:'block'}} >
                    <Typography variant="h1" fontWeight={460} sx={{lineHeight:1, letterSpacing:7 }} ><span className="grey">WELCOME.</span> </Typography>
                    <Typography variant="h2" >to a <span className="">glimpse</span> of</Typography>
                    <Typography variant="h2" >my <span className="blue"  style={{fontWeight: 50}}>sanity</span> and <span style={{fontWeight: 50, textDecoration:'line-through', color:'red' }}>insanity</span></Typography>
                </Grid>
            </motion.div>
            </motion.div>
            </Grid>
    )
}