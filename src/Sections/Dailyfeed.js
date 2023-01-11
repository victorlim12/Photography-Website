import React from "react";

//own utils

//MUI components
import { Grid, Typography} from "@mui/material";
import {CardContent, Card, CarouselWrapper} from '../Components/Style'
import Cards from "../Components/Cards";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

export default function Dailyfeed(){
    
    const color = 'rgba(0,0,0,0)'
    const [colors,setColor]=React.useState('');

    return(
        <div 
        className={'Normals'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center', mt:'5%', height:'100%'}}>
            <CarouselWrapper>
            <Cards  gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'20vw'} max={'20vw'} height={'50vh'} resize={'45vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)'}}>
        <CardContent max={'20vw'}>
        <Typography variant="h3" fontWeight={600} align='center'><span className="pink" style={{fontWeight:'600'}}> 
        Pumping Adrenaline</span>
        </Typography>
          <Typography variant="h5" fontWeight={500} align='center'> <span className="">Exhilarating. Daunting. Loud. Sometimes.</span> </Typography> 
        </CardContent>
          </Cards>
          <Cards  gradient={color} direction={'to bottom'} direction2={'to bottom'}  min={'35vw'} height={'50vh'} resize={'40vw'} hr={'50vh'} 
            style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)'}}>
        <CardContent max={'35vw'}>
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