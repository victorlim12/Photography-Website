import React from "react";


//MUI components
import { Grid, Typography, TextField, Button} from "@mui/material";
import {CardContent} from '../Components/Style'
import Dailyfeed from "./Dailyfeed";
import {database} from '../Utils/firebase'
import {ref,push,child,update} from "firebase/database";

//css from App (need to rewrite)
import '../App.css';
import '../Utils/Gradient.css'

export default function Dailyboard(){
    // const rightshade = 'rgba(0,0,0,0.5)'

    const [content, setContent] = React.useState(null);
    const [font, setFont] = React.useState(null);
    const [card, setCard] = React.useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "content"){
            setContent(value);
        }
        if(id === "font"){
            setFont(value);
        }
        if(id === "card"){
          setCard(value);
      }
    }

    const handleSubmit = () =>{
        let obj = {
                Content : content,
                Fontcolor:font,
                Cardcolor:card,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
        <div 
        className={'Normals'} style={{
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'hidden'
        }}>
        <Grid container sx={{justifyContent:'center', mt:'5%', height:'100%'}}>
        <CardContent>
              <Typography variant="h2" fontWeight={600} align='center' sx={{letterSpacing: 2, color:'black'}}>
                   Board Under Maintenance.
                </Typography>
                <Typography variant="h5" fontWeight={600} align='center' sx={{letterSpacing: 0, color:'black'}}>
                  <span className="pink">You can type stuff soon.</span>
                </Typography>
              </CardContent>
        <div style={{overflow: 'scroll', width:'100vw', height:'50vh',paddingBottom:'3%', background: 'white',transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease"}}>
                <Dailyfeed/>
        </div>
        <CardContent max={'90vw'} style={{alignItems:'center'}}>
          <Grid container spacing={2}>
            <Grid container item xs={12}  >
            <TextField
            fullWidth
            id="content"
            type="text" value={content} onChange = {(e) => handleInputChange(e)}
          label="What Do You Think"
          multiline
          variant="outlined"
          size="large"
          rows={1}
          />
            </Grid>
            <Grid container item xs={5} >
            <TextField 
             type="text" value={card} onChange = {(e) => handleInputChange(e)}
          label="Card Color"
          id="card"
          multiline
          fullWidth
          variant="outlined"
          rows={1}
          />
            </Grid>
            <Grid container item xs={5} >
            <TextField
            type="text" value={font} onChange = {(e) => handleInputChange(e)}
          label="Font Color"
          id="font"
          multiline
          fullWidth
          variant="outlined"
          rows={1}
          />
            </Grid>
            <Grid container item xs={2} >
            <Button onClick={()=>handleSubmit()} type="submit" fullWidth variant="contained">submit</Button>
            </Grid>
          </Grid>
        </CardContent>
        </Grid>
        </div>
    )
}