import React from "react";

//own utils
import {CardContent} from '../Components/Style'
import Cards from "../Components/Cards";

//MUI components
import { Grid, Typography} from "@mui/material";
import Gallery from "../Components/Gallery";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

export default function Hobbies(){
    
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
        <CardContent >
          <Typography variant="h1" fontWeight={500} align='center' sx={{letterSpacing: 10}}>
          <br/>
            <span className="grey"></span>Coming Soon</Typography>
                  <Typography variant="h4" fontWeight={600} align='center' sx={{letterSpacing: 8}}>
                    what you can expect:
                </Typography>
                <br/>
                <Typography variant="h5" fontWeight={500} align='center'>
                    <span className="blue"> Interactive UI. Clickable Photos. Live Feedback Board. <br/> Most Importantly, more photos/ categories. </span>
                </Typography>
                <br/>
                <Typography variant="h4" fontWeight={500} align='center'>
                    <span className="cool"> Happy New Year, 2023! </span>
                </Typography>
                <br/>
                <br/>
            </CardContent>
        </Grid>
        </div>
    
    )
}