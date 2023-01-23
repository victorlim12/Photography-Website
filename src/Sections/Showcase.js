import React from "react";

//own utils
import { CardContent } from "../Components/Style";

//MUI components
import { Grid, Typography } from "@mui/material";
import Gallery from "../Components/Gallery";

//css from App (need to rewrite)
import "../App.css";
import "../Utils/Gradient.css";
import { green } from "../Utils/Const";
import ImgBlock from "../Components/ImgBlock";

export default function Showcase() {
  const rightshade = "rgba(0,0,0,0.5)";
  const [colors, setColor] = React.useState("");

  return (
    <div
      className={"notnormal"}
      style={{
        width: "100vw",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ justifyContent: "center" }}>
        <CardContent>
          <Typography
            variant="h1"
            fontWeight={600}
            align="center"
            sx={{ marginBottom: "-2%" }}
          >
            <span className="grey"></span>WORKS
          </Typography>
          <Typography variant="h6" fontWeight={400} align="center">
            this is what I have so far.
          </Typography>
        </CardContent>
        <div
          style={{
            overflow: "scroll",
            width: "100vw",
            height: "75vh",
            paddingBottom: "3%",
            background: `linear-gradient(to top ,rgba(0,0,0,1),${colors},rgba(0,0,0,1))`,
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease",
          }}
        >
          <Gallery>
            {green.map((item, index) => (
              <div key={index}>
                <ImgBlock
                  src={item.img}
                  alt={item.title}
                  colors={colors}
                  setColor={setColor}
                  active={index}
                  Noice={rightshade}
                />
              </div>
            ))}
          </Gallery>
        </div>
      </Grid>
    </div>
  );
}
