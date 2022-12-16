import React from "react"
import { getAverageRGB } from "./Color"


const Colorpick=({children, src, setColor, active, setActive, Noice,props})=>{

    const imgRef = React.useRef()
    let color =''
    let BackgroundColor =''

    const handleMouseOverHandler=()=>{
        color= imgRef.current ;
        console.log(imgRef)
        const { R, G, B }  =getAverageRGB(color,1)
        BackgroundColor=`rgba(${R}, ${G},${B},0.5)`
        setColor(BackgroundColor)
        setActive(active)
      }
    
    const Leave=()=>{
        setColor(Noice)
    }

    return(
        <div>
        <img ref={imgRef} src={src} width='100%' height='auto' alt="sth" onMouseOver={handleMouseOverHandler} onMouseLeave={Leave}/>
        {children}
        </div>
    )
}

export default Colorpick