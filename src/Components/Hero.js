import React from "react";

//own utils
import '../App.css';
import '../Utils/Gradient.css'

//MUI components
import { Grid, Typography, Button } from "@mui/material";

//import { motion, useAnimation } from "framer-motion";
import { useAnimation, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Hero(){
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return(
        <div className="image-bg" 
                style={{
                        transition: "all .5s ease",
                        WebkitTransition: "all 1s ease",
                        MozTransition: "all 1s ease", minHeight:'200vh', overflow:'hidden'
                        }}>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
            <motion.div transition={{ delay: 1 }} style={{
          scale
        }}>
            <Grid container sx={{display:'block'}}>
                <Grid item xs={12} sx={{ textAlign: 'center' }} >
                    <Typography variant="h2" fontWeight={600} sx={{lineHeight:1, letterSpacing:7 }} ><span className="grey">WELCOME.</span> </Typography>
                    <Typography variant="h2" >to a glimpse</Typography>
                    <Typography variant="h2" >my sanity and <span className="crimson" style={{fontWeight: 600}}>insanity</span></Typography>
                    {/* <Button variant="contained" size="large" sx={{mt:'3%'}}>WHERE</Button> */}
                </Grid>
            </Grid>
            </motion.div>
            </div>
    )
}