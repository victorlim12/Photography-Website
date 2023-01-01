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
import TEST from '../Images/ObjectWeb.png'
import TEST2 from '../Images/bg11.png'
import TEST3 from '../Images/BACK.jpg'
import TEST4 from '../Images/road.jpg'
import TEST5 from '../Images/bg2.jpg'
import TEST6 from '../Images/RED.jpg'

export default function Introduction(){

  
    // const { scrollYProgress } = useScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const color='rgba(0,0,0,1)'
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

            <Card Background={TEST5} direction={'to bottom'} direction2={'to bottom'} gradient={color} min={'98vw'} resize={'90vw'} style={{justifySelf:'center'}}>
            <CardContent>
                  <Typography variant="h3" fontWeight={500} align="center"><span className="grey">Afloat.</span></Typography>
                  <Typography variant="h5" fontWeight={500} align="center">stay afloat. head above water. </Typography>
                  <Typography variant="h6" fontWeight={500} align="center"></Typography>
            </CardContent>
          </Card>
          <Card Background={TEST6} direction={'to top'} direction2={'to bottom'} gradient={color} min={'49vw'} resize={'45vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h3" fontWeight={500} align='center'> <span className="crimson">Passion.</span> </Typography>
                  <Typography variant="h6" fontWeight={500} align='center'>scarlet. burgundy. maroon.</Typography>
            </CardContent>
          </Card>
          <Card Background={TEST4} direction={'to top'} direction2={'to bottom'} gradient={color} min={'49vw'} resize={'45vw'} style={{justifySelf:'center'}}>
            <CardContent style={{alignItems:'center'}}>
                  <Typography variant="h3" fontWeight={500} align='center'><span className="green">Rejuvenate.</span></Typography>
                  <Typography variant="h6" fontWeight={400} align='center'>and no regret or whatsoever</Typography>
            </CardContent>
          </Card>   
          {/* <Card Background={TEST2} direction={'to bottom'} direction2={'to top'} gradient={color} min={'98vw'} resize={'45vw'} style={{justifySelf:'center'}}> */}
          <Card min={'95vw'} height={'60vh'} style={{flexDirection:'row', flexWrap: 'wrap'}}>
          <CardContent margin={'5%'} max={'40vw'} style={{alignItems:'left'}}>
                  <br/><br/>
                  <Typography variant="h3" fontWeight={500} align='left' sx={{textTransform: 'uppercase', letterSpacing: 8}}><span className="blue" >
               Photography.</span>
            </Typography>
            <br/>
            <Typography variant="h6" fontWeight={500} align='left' style={{lineHeight:1.4}}><span className="grey" >
                    Personally, it is a nature by-product of observation on life. how moods are portrayed and conveyed. how certain scenes are reimagined. how memories are kept. how feelings are blabbed out with colors. Those feelings sustained me this far.
                    Staying afloat for one more time.  </span><br/>
            </Typography>
            </CardContent>
            <Card Background={TEST} direction={'to top'} direction2={'to bottom'} min={'49vw'} height={'55vh'} resize={'95vw'} style={{justifySelf:'center', backgroundImage:`linear-gradient(to bottom , rgba(0, 0, 0, 1), rgba(0, 0, 0, 0),rgba(0,0,0,0.8)), url(${TEST})`}}></Card>
            </Card>
          </Grid>
        </div>
    
    )
}