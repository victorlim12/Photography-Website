import React from "react";
import { motion } from "framer-motion";

//own utils
import {CardContent} from '../Components/Style'
import Cards from "../Components/Cards";

//MUI components
import { Grid, Typography} from "@mui/material";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'
import vid from '../Images/vid.mp4'

//images (can consider CDN)
import { HeroVideo } from "../Components/Style";

export default function Introduction(){
    const color='rgba(0,0,0,1)'
    // const color1 ='rgba(0,0,0,0.8)'
    
    return(
        <div 
        className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <motion.div>
          <Grid container sx={{justifyContent:'center', mt:'3%', height:'100%'}}>
            <Cards direction={'to bottom'} direction2={'to bottom'} gradient={color} min={'45vw'} height={'40vh'} resize={'90vw'} hr={'25vh'} style={{justifySelf:'center', position: 'relative'}}>
            <HeroVideo  autoPlay muted loop  className='fade-in-image' >
				<source src={vid} type="video/mp4"/>
				</HeroVideo>
            </Cards>
            <Cards direction={'to bottom'} direction2={'to bottom'} gradient={color} min={'45vw'} height={'40vh'} resize={'90vw'} hr={'25vh'} style={{justifySelf:'center', position: 'relative'}}>
        <CardContent margin={'5%'} style={{alignItems:'center', justifySelf:'center'}}>
          <Typography variant="h3" fontWeight={500} align='center' sx={{marginBottom:'2%'}}><span className="gray">It's just like a supercut.</span></Typography>
          <Typography variant="h5" fontWeight={500} align='center' sx={{marginBottom:'2%'}}><span className="gray">Love the feel of sudden a</span></Typography>
            </CardContent>
            </Cards>
          </Grid>
          </motion.div>
        </div>
    )
}