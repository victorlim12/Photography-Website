import React from "react";
import { motion } from "framer-motion";

//own utils
import {CardContent} from './Style'
import Cards from "./Card";

//MUI components
import { Grid, Typography} from "@mui/material";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST from '../Images/ObjectWeb.png'
import TEST4 from '../Images/road_C.jpeg'
import TEST5 from '../Images/bg2_C.jpeg'
import TEST6 from '../Images/RED_C.jpeg'

export default function Introduction(){
    const color='rgba(0,0,0,1)'
    // const color1 ='rgba(0,0,0,0.8)'
    return(
        <div 
        className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', display:"inline-block", justifyContent:'center', overflow:'hidden'
        }}>
        <motion.div>
          <Grid container sx={{justifyContent:'center', mt:'1%', height:'100%'}}>
          <CardContent max={'75vw'} margin={'5%'} style={{alignItems:'center'}}>
          <Typography variant="h4" fontWeight={600} align='center' sx={{marginBottom:'2%'}}><span className="grey"></span></Typography>
                  <Typography variant="h5" fontWeight={400} align='center'><span className="grey" >
                    I am <span className="blue" style={{fontWeight: '500'}}>Victor</span>. 
                    A passionate <span className="blue" style={{fontWeight: '500'}}>photographer</span>. 
                    Aspiring Interface <span className="blue" style={{fontWeight: '500'}}>Developer</span>. <br/>
                    this website is mainly for <span className="blue" style={{fontWeight: '500'}}>media-related</span> work.</span>
            </Typography>
            </CardContent>
            <Cards
            Background={TEST5} direction={'to bottom'} direction2={'to bottom'} gradient={color} min={'98vw'} resize={'90vw'} style={{justifySelf:'center'}}>
            <CardContent>
                  <Typography variant="h3" fontWeight={500} align="center"><span className="grey">Afloat.</span></Typography>
                  <Typography variant="h5" fontWeight={500} align="center">stay afloat. head above water. </Typography>
                  <Typography variant="h6" fontWeight={500} align="center"></Typography>
            </CardContent>
          </Cards>
          {/* <Cards
          Background={TEST6} direction={'to top'} direction2={'to bottom'} gradient={color} min={'49vw'} resize={'45vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h3" fontWeight={500} align='center'> <span className="crimson">Passion.</span> </Typography>
                  <Typography variant="h6" fontWeight={500} align='center'>scarlet. burgundy. maroon.</Typography>
            </CardContent>
          </Cards>
          <Cards
          Background={TEST4} direction={'to top'} direction2={'to bottom'} gradient={color} min={'49vw'} resize={'45vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h3" fontWeight={500} align='center'><span className="green">Rejuvenate.</span></Typography>
                  <Typography variant="h6" fontWeight={400} align='center'>and no regret or whatsoever</Typography>
            </CardContent>
          </Cards>    */}
          <Cards min={'95vw'} height={'60vh'} resize={'90vw'} style={{flexDirection:'row', flexWrap: 'wrap'}}>
          <CardContent margin={'5%'} max={'55vw'} style={{alignItems:'center'}}>
                  <br/>
                  <Typography variant="h2" fontWeight={500} align='center' sx={{textTransform: 'uppercase', letterSpacing: 8}}><span className="blue" >
               Photography.</span>
            </Typography>
            <br/>
            <Typography variant="h6" fontWeight={500} align='center' style={{lineHeight:1.4}}><span className="grey" >
                    Personally, it is a nature by-product of observation on life. how moods are portrayed and conveyed. how certain scenes are reimagined. how memories are kept. how feelings are blabbed out with colors. Those feelings sustained me this far.
                    Staying afloat for one more time.  </span><br/>
            </Typography>
            </CardContent>
            <Cards Background={TEST} direction={'to top'} direction2={'to bottom'} min={'50vw'} height={'55vh'} resize={'95vw'} 
            style={{justifySelf:'center', 
            backgroundImage:`linear-gradient(to bottom , rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0),rgba(0,0,0,0.8)), url(${TEST})`}}></Cards>
            </Cards>
          </Grid>
          </motion.div>
        </div>
    
    )
}