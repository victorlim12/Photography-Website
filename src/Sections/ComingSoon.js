import React from "react";
import { motion } from "framer-motion";

//own utils
import {CardContent} from '../Components/Style'

//MUI components
import { Grid, Typography} from "@mui/material";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)

export default function ComingSoon(props){

    return(
        <div 
        className={props.bgColor} style={{
      width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <motion.div>
          <Grid container sx={{justifyContent:'center', mt:'3%', height:'100%'}}>
            <CardContent max={'80vw'} >
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