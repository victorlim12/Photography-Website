import React from "react";

//own utils
import {CardContent} from '../Components/Style'

//MUI components
import { Grid, Typography} from "@mui/material";
import Gallery from "../Components/Gallery";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'
import Cards from "../Components/Cards";

export default function Board({data}){
    
    const rightshade = 'rgba(0,0,0,0)'

    return(
        <div 
        className={'notnormal'} style={{
         width: '100vw',flexDirection:'row', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center', background:'white'}}>
        <CardContent>
            </CardContent>
        <div style={{overflow: 'scroll', width:'100vw', height:'fit-content',paddingBottom:'3%',background:'white', transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease"}}>
        <Gallery>
        {data.map((item, index) => (
          <Cards gradient={rightshade} direction={'to bottom'} direction2={'to bottom'}  min={'100%'} max={'fit-content'} height={'fit-content'} resize={'100%'} hr={'fit-content'} 
          style={{ boxShadow:'0px 0px 10px rgba(0,0,0,0.5)', backgroundColor:`${item.Cardcolor}`, color:`${item.Fontcolor}`}}>
      <CardContent max={'100%'} style={{padding: '10%'}}>
      <Typography variant="h3" fontWeight={600} align='center'>
      {item.Content}
      </Typography>
      </CardContent>
        </Cards>
        ))}
        </Gallery>
        </div>
        </Grid>
        </div>
    )
}