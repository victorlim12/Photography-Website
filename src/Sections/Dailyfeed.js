import React from "react";

//own utils

//MUI components
import { Grid, Typography} from "@mui/material";
import {CardContent, CarouselWrapper} from '../Components/Style'
import Cards from "../Components/Cards";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

export default function Dailyfeed(){
    
    const color = 'rgba(0,0,0,0)'
    // const [colors,setColor]=React.useState('');

    return(
        <div 
        className={'Normals'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center', mt:'1%', height:'100%'}}>
        <CardContent max={'95vw'}>
        </CardContent>
            <CarouselWrapper>
            <Cards gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:'black', color:'white'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="pink" style={{fontWeight:'600'}}> 
        Placeholder</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">Looks nice? <br/> more content soon !</span> </Typography> 
        </CardContent>
          </Cards>
          <Cards gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:'black', color:'white'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="blue" style={{fontWeight:'600'}}> 
        Melodrama</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">I guess the color does it justice tho.</span> </Typography> 
        </CardContent>
          </Cards>
          <Cards gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:'black', color:'white'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="orange" style={{fontWeight:'600'}}> 
        Don't Blame Me</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">a bit goth. the song is a bop and a half. </span> </Typography> 
        </CardContent>
          </Cards>
          <Cards gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:'black', color:'white'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="grey" style={{fontWeight:'600'}}> 
        Pumping Adrenaline</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">Exhilarating. Daunting. Loud. Sometimes.</span> </Typography> 
        </CardContent>
          </Cards>
          <Cards gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:'black', color:'white'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="cool" style={{fontWeight:'600'}}> 
        A bit dark.</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">better color choice should be made.</span> </Typography> 
        </CardContent>
          </Cards>
          <Cards gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:'black', color:'white'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="pink" style={{fontWeight:'600'}}> 
        Pumping Adrenaline</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">Exhilarating. Daunting. Loud. Sometimes.</span> </Typography> 
        </CardContent>
          </Cards>
            </CarouselWrapper>
        </Grid>
        </div>
    )
}