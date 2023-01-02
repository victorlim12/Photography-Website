import React from "react";
import { motion } from "framer-motion";

//own utils
import {CardContent, Card} from './Style'
import Cards from "./Card";

//MUI components
import { Grid, Typography} from "@mui/material";
import Gallery from "./Gallery";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST5 from '../Images/Hive_C.jpeg'
import TEST4 from '../Images/Cam_C.png'
import TEST6 from '../Images/bnw_C.jpeg'

export default function Showcase(){
    const color='rgba(0,0,0,1)'
    // const color1 ='rgba(0,0,0,0.8)'
    return(
        <div 
        className={'normal'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center', mt:'5%', height:'100%'}}>
        <CardContent max={'75vw'} margin={'5%'} style={{alignItems:'center', justifySelf:'center'}}>
          <Typography variant="h1" fontWeight={500} align='center' sx={{marginBottom:'2%'}}><span className="grey"></span>WORKS</Typography>
                  <Typography variant="h6" fontWeight={400} align='center'>
                    this is what I have so far.
                </Typography>
            </CardContent>
          <Gallery/>
        </Grid>
        </div>
    
    )
}