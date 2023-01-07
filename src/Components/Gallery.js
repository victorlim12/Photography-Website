import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import { green } from '../Utils/Const';

import '../App.css';
import '../Utils/Gradient.css'

import ImgBlock from './ImgBlock';
// }));

export default function Gallery({colors, setColor, Noice, setActive}) {
  return (
    <div className={'normal'} style={{backgroundColor:'transparent',
      transition: "all .5s ease",
      WebkitTransition: "all 1s ease",
      MozTransition: "all 1s ease", width: '100vw', flexDirection:'row', justifyContent:'center', overflow:'scroll'
      }}>
    <Box sx={{ minWidth: '75vw', maxWidth:'95vw', alignItems:'center', justifyContent:'center'}}>
      <Masonry spacing={2} columns={{ xs: 2, sm: 2, md: 3 }} sx={{m:'0%'}}>
        {green.map((item, index) => (
          <div key={index}>
            <ImgBlock
            src={item.img}
            alt={item.title}
            colors={colors} setColor={setColor} active={index} setActive={setActive} Noice={Noice}
            />
          </div>
        ))}
      </Masonry>
    </Box>
    </div>
  );
}