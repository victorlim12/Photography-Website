import React from "react";

//own utils
import GlassCard from "../Glass-Morphism/GlassCard";
import {Card, CardContent} from '../Components/Style'


//MUI components
import { Grid, Typography} from "@mui/material";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST from '../Images/bg1.png'
import TEST2 from '../Images/bg9.jpg'
import TEST3 from '../Images/bg7.jpg'
import TEST4 from '../Images/bg8.jpg'
import TEST5 from '../Images/bg2.jpg'

export default function Introduction(){

  
    // const { scrollYProgress } = useScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const color='rgba(0,0,0,0.5)'
    // const color1 ='rgba(0,0,0,0.8)'
    return(
        <div className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', display:"inline-block", justifyContent:'center', overflow:'hidden'
        }}>
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
            <Card Background={TEST5} direction={'to right'} direction2={'to top'} Color={'red'} gradient={color} min={'75vw'} resize={'90vw'} style={{justifySelf:'center'}}>
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
          <Card Background={TEST3} direction={'to bottom'} gradient={color} min={'20vw'} resize={'35vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h4" fontWeight={500} align='center'><span className="green">at the bottom of</span></Typography>
                  <Typography variant="h5" fontWeight={400} align='center'>and no regret or whatsoever</Typography>
            </CardContent>
          </Card>   
          </Grid>

        </div>
    
    )
}