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
    const [bgColor, setBgColor] = React.useState("black")


  const listenScrollEvent = () => {
      window.scrollY > 4000
        ? setBgColor("Normals")
        : setBgColor("normal")
    }

  React.useEffect(() => {
    console.log(window.scrollY)
    window.addEventListener("scroll", listenScrollEvent)
  })
    return(
        <div 
        className={bgColor} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease", 
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <motion.div>
          <Grid container sx={{justifyContent:'center', mt:'3%', height:'100%'}}>
          <CardContent margin={'5%'} max={'60vw'} style={{alignItems:'center', justifySelf:'center'}}>
          <Typography variant="h3" fontWeight={600} align='left'>
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
        <CardContent margin={'5%'} style={{alignItems:'center', justifySelf:'center'}}>
          <Typography variant="h2" fontWeight={500} align='center'><span className="orange" style={{fontWeight:'600'}}> It's just like a Supercut.</span></Typography>
          <Typography variant="h5" fontWeight={600} align='center'><span className="pink" style={{fontWeight:'600'}}>Song plays in my head like a memory cut out.</span></Typography> 
            </CardContent>
            </Cards>
            <CardContent >
          <Typography variant="h1" fontWeight={500} align='center' sx={{letterSpacing: 10}}>
          <br/>
            <span className="grey"></span>Coming Soon</Typography>
                  <Typography variant="h4" fontWeight={600} align='center' sx={{letterSpacing: 8}}>
                    what you can expect:
                </Typography>
                <br/>
                <Typography variant="h5" fontWeight={600} align='center'>
                    <span className="blue"> Interactive UI. Clickable Photos. Live Feedback Board. <br/> Most Importantly, more photos/ categories. </span>
                </Typography>
                <br/>
                <Typography variant="h4" fontWeight={600} align='center'>
                    <span className="cool"> Happy New Year, 2023! </span>
                </Typography>
                <br/>
                <br/>
            </CardContent>
          </Grid>
          </motion.div>
        </div>
    )
}