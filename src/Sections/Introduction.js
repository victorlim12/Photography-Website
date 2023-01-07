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

//images (can consider CDN)
import TEST from '../Images/ObjectWeb.png'
import TEST5 from '../Images/bg2_C.jpeg'

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
          <Grid container sx={{justifyContent:'center', mt:'1%', height:'100%'}}>
          <CardContent max={'75vw'} margin={'5%'} style={{alignItems:'center', justifySelf:'center'}}>
          <Typography variant="h4" fontWeight={600} align='center' sx={{marginBottom:'2%'}}><span className="grey"></span></Typography>
                  <Typography variant="h6" fontWeight={400} align='center'><span className="grey" >
                    I am <span className="blue" style={{fontWeight: '500'}}>Victor</span>. 
                    A passionate <span className="blue" style={{fontWeight: '500'}}>photographer</span>. <br/>
                    Aspiring Interface <span className="blue" style={{fontWeight: '500'}}>Developer</span>.
                    this website is mainly for <span className="blue" style={{fontWeight: '500'}}>media-related</span> work.</span>
            </Typography>
            </CardContent>
            <Cards
            Background={TEST5} direction={'to bottom'} direction2={'to bottom'} gradient={color} min={'90vw'} resize={'95vw'} style={{justifySelf:'center'}}>
            <CardContent max={'90vw'} margin={'1%'} style={{alignItems:'center', justifyContent:'center'}}>
                  <Typography variant="h1" fontWeight={600} align="center"><span className="grey">Afloat.</span></Typography>
                  <Typography variant="h5" fontWeight={500} align="center">stay afloat. head above water. </Typography>
            </CardContent>
          </Cards>
          <Cards min={'95vw'} height={'100vh'} hr={'100vh'} style={{flexDirection:'row', flexWrap: 'wrap'}}>
          <CardContent margin={'5%'} max={'55vw'} style={{alignItems:'left'}}>
                  <br/>
                  <Typography variant="h1" fontWeight={500} align='left' sx={{textTransform: 'uppercase',}}><span className="blue" >
               Photo</span>
            </Typography>
            <Typography variant="h1" fontWeight={500} align='left' sx={{textTransform: 'uppercase',lineHeight:0.6}}><span className="blue" >
               Graphy.</span>
            </Typography>
            <br/>
            <Typography variant="body1" fontWeight={500} align='left' style={{lineHeight:1.4,  fontSize:'1.1rem'}}><span className="grey" >
                    Personally, it is a nature by-product of observation on life. how moods are portrayed and conveyed. how certain scenes are reimagined. how memories are kept.  </span><br/>
            </Typography>
            </CardContent>
            <Cards Background={TEST} direction={'to top'} direction2={'to bottom'} min={'50vw'} height={'60vh'} resize={'95vw'} hr={'52vh'}
            style={{justifySelf:'center', 
            backgroundImage:`linear-gradient(to bottom , rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0),rgba(0,0,0,0.8)), url(${TEST})`}}></Cards>
            </Cards>
          </Grid>
          </motion.div>
        </div>
    )
}