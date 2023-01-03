import React from "react";

//own utils
import {CardContent} from './Style'

//MUI components
import { Grid, Typography} from "@mui/material";
import Gallery from "./Gallery";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

export default function Showcase(){
    
    const rightshade = 'rgba(0,0,0,0.5)'
    const [colors,setColor]=React.useState('');

    return(
        <div 
        className={'notnormal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw',flexDirection:'row', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center'}}>
        <CardContent>
          <Typography variant="h1" fontWeight={500} align='center' sx={{marginBottom:'-2%'}}><span className="grey"></span>WORKS</Typography>
                  <Typography variant="h6" fontWeight={400} align='center'>
                    this is what I have so far.
                </Typography>
            </CardContent>
        <div style={{overflow: 'scroll', height:'80vh', backgroundImage:`linear-gradient(to top , ${colors},rgba(0,0,0,1))`,transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease"}}>
        <Gallery colors={colors} setColor={setColor} Noice={rightshade}/>
        </div>
        </Grid>
        </div>
    
    )
}