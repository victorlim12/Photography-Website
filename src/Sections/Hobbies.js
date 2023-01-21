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
import TEST from '../Images/next/radio_C.jpeg'

//images (can consider CDN)
import { HeroVideo } from "../Components/Style";

export default function Introduction(props){
    const color='rgba(0,0,0,0)'

    return(
        <div 
        className={props.bgColor} style={{
        transition: "all 1s ease",
        WebkitTransition: "all 0.7s ease", 
        MozTransition: "all 0.7s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <motion.div>
          <Grid container sx={{justifyContent:'center', mt:'3%', height:'100%'}}>
          <CardContent margin={'5%'} max={'60vw'} >
          <Typography variant="h2" fontWeight={600} align='left'>
            <span className="orange" style={{fontWeight:'600'}}>Life in general.</span>
            </Typography>
             <Typography variant="h5" fontWeight={600} align='left'>
            wondering about what would've. could've. should've.
            </Typography> 
            <Typography variant="h5" fontWeight={300} align='left'>
            <span className="blue" style={{fontWeight:'600'}}>pondering upon what's in this life that's worth living for.</span>
            </Typography> 
          </CardContent>
          <Cards direction={'to bottom'} direction2={'to bottom'} gradient={color} min={'80vw'} height={'40vh'} resize={'80vw'} hr={'30vh'} 
            style={{justifySelf:'center', position: 'relative'}}>
          <HeroVideo  autoPlay muted loop  className='fade-in-image' >
				<source src={vid} type="video/mp4"/>
				</HeroVideo>
        <CardContent>
          <Typography variant="h2" fontWeight={500} align='center'><span className="orange" style={{fontWeight:'600', filter: 'drop-shadow(4px 3px 3px #333434)'}}> It's just like a Supercut.</span></Typography>
          <Typography variant="h5" fontWeight={600} align='center'><span className="blue" style={{fontWeight:'600'}}>Things plays out and end in my head.</span></Typography> 
            </CardContent>
          </Cards>
          <Cards Background={TEST} gradient={color} direction={'to bottom'} direction2={'to bottom'} min={'43vw'} height={'40vh'} resize={'80vw'} hr={'50vh'} 
            style={{boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', color:'white'}}>
        <CardContent max={'42vw'}>
          <Typography variant="h3" fontWeight={600} align='center'><span className="orange"> in my head.</span></Typography>
          <Typography variant="h5" fontWeight={500} align='center'><span className="">Drowning in feelings.  </span></Typography> 
        </CardContent>
          </Cards>
          <Cards  gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'35vw'} height={'40vh'} resize={'80vw'} hr={'25vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)'}}>
        <CardContent max={'35vw'} style={{ color:'black'}}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="pink" style={{fontWeight:'600'}}> 
        Pumping Adrenaline</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">Exhilarating. Daunting. Loud. Sometimes.</span> </Typography> 
        </CardContent>
          </Cards>
          </Grid>
          </motion.div>
        </div>
        
    )
}