import React from "react"
import { getAverageRGB } from "../Utils/Color"
import { motion } from "framer-motion"; 

const ImgBlock=({ src, setColor, active, setActive, Noice,props, alt})=>{

    const imgRef = React.useRef()
    let color =''
    let BackgroundColor =''

    const handleMouseOverHandler=()=>{
        color= imgRef.current ;
        const { R, G, B }  =getAverageRGB(color,1)
        BackgroundColor=`rgba(${R}, ${G},${B},1)`
        setColor(BackgroundColor)
        setActive(active)
      }
    
    const Leave=()=>{
        setColor(Noice)
    }

    return(
        <div>
        <motion.img
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
            opacity: { duration: 0.76 },
        }}
              initial={{ opacity: 0 }}
              src={src}
            //   srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={alt}
              loading="lazy"
              ref={imgRef}
              onMouseOver={handleMouseOverHandler} onMouseLeave={Leave}
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
        </div>
    )
}

export default ImgBlock