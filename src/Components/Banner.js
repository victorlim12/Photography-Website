import React from "react";
import Colorpick from "../Utils/ColoredImg";
import GlassCard from '../Glass-Morphism/GlassCard'
import GlassButton from '../Glass-Morphism/GlassButton'
import GlassSlide from '../Glass-Morphism/GlassSlider'

//MUI - need npm install
import { Typography, Grid} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

//images (can consider CDN)
import TEST from '../Images/foklore.png'
import TEST2 from '../Images/melodrama.png'
import TEST3 from '../Images/album.png'

//can add animation for transition


const Display = () => {
    const leftshade = '#d1d1d122'
    const slide = '#000000BB'
    const rightshade = '#00000054'
    const [colors,setColor]=React.useState('');
    const [active, setActive] = React.useState(0)

    const sources = [{
      src: TEST, 
      title: "Folklore", 
      Artist: "SWIFT.",
      Span2:'grey',
      desc:"Day off in Kyoto",
      span:"green"
    },
      {
      src: TEST3, 
      title: "Punisher", 
      Artist: "PHOEBE.",
      Span2:'grey',
      desc:"Day off in Kyoto",
      span:"cool"
    },
      {
      src: TEST2, 
      title: "Melodrama",
      Artist: "Lorde.",  
      Span2:'grey',
      desc:"All the glamours and the drama",
      span:"blue"
    }
    ];
    
  
    return (
      <Grid container>
      <div className={''} style={{
      transition: "all .5s ease",
      WebkitTransition: "all 1s ease",
      MozTransition: "all 1s ease", width: '100vw'
      }}>
         <Grid container item lg={5} xs={5} xl={4} sx={{display: 'block', ml:'4%'}}>
          <MusicNoteIcon sx={{color:"pink", fontSize:100}} />
         <Typography variant="h2" fontWeight={600} >Depressed</Typography>
         <Typography variant="h2" fontWeight={600} fontColor={'pink'} sx={{letterSpacing: 5}}><span className="neonText">SPOTIFYING?</span></Typography>
          <Typography variant="h5" fontWeight={400}> Push your passion and <span className="blue" style={{fontWeight:'800'}}>Meet us at Midnights.</span></Typography>
          <GlassButton BackgroundColor={'white'} HoverColor={rightshade} Blend={"overlay"} LeftShade={colors} RightShade={colors} style={{height:'2em'}}>
              <Typography variant="h8" fontWeight={600}>
                Click me!
              </Typography>
            </GlassButton>
         </Grid>
         <Grid container item lg={8} xs={7} xl={8} alignItems="center" spacing={4} sx={{overflow:'auto', minHeight:'80vh', maxHeight:'80vh'}} >
        {sources.map((test,index) => (
          <Grid item lg={3.8} xs={12} xl={3.5}>
          <GlassCard key={index} Blur={10} LeftShade={leftshade} RightShade={index===active? colors: rightshade} 
          style={{background: index===active? colors: rightshade, 
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease" }}>
            <Colorpick src={test.src} colors={colors} setColor={setColor} active={index} setActive={setActive} Noice={rightshade}/>
            <br/>
            <Typography sx={{color:"white"}} fontWeight={600} variant='h6' fontSize={24}><span className={test.span}>{test.title} </span></Typography>
            <Typography sx={{color:"white", textTransform: 'uppercase', letterSpacing: 10, lineHeight: 1}} fontWeight={600} variant='h6' fontSize={16} ><span className={test.Span2}>{test.Artist} </span></Typography>
            <br/>
            <GlassSlide Background={leftshade} SliderColor={slide}/>
          </GlassCard>
          </Grid>
          
        ))}
        </Grid>
      </div>
  
      </Grid>
    );
  };

  export default Display;