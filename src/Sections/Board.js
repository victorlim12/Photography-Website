import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../Utils/firebase";

//own utils
import { CardContent } from "../Components/Style";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

//MUI components
import { Grid, Typography } from "@mui/material";
import Gallery from "../Components/Gallery";

//css from App (need to rewrite)
import "../App.css";
import "../Utils/Gradient.css";
import Cards from "../Components/Cards";

function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color === strColor;
}

export default function Board({ data, setData }) {
  const rightshade = "rgba(0,0,0,0)";

  const handleLike = async (id, num, index) => {
    num = num + 1;
    try {
      await updateDoc(doc(firestore, "review", id), { Likes: num });
      setData((prevData) => {
        const newData = prevData.slice();
        newData[index] = {
          ...newData[index],
          Likes: num,
        };
        return newData;
      });
    } catch (e) {
      console.error("Error adding likes: ", e);
    }
  };

  return (
    <div
      className={"notnormal"}
      style={{
        width: "100vw",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ justifyContent: "center", background: "white" }}>
        <CardContent></CardContent>
        <div
          style={{
            overflow: "scroll",
            width: "100vw",
            height: "fit-content",
            paddingBottom: "3%",
            background: "white",
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease",
          }}
        >
          <Gallery>
            {data.map((item, index) => (
              <Cards
                key={index}
                gradient={rightshade}
                direction={"to bottom"}
                direction2={"to bottom"}
                min={"100%"}
                max={"fit-content"}
                height={"fit-content"}
                resize={"100%"}
                hr={"fit-content"}
                style={{
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                  backgroundColor: isColor(`${item.Cardcolor}`)
                    ? `${item.Cardcolor}`
                    : "black",
                  color: isColor(`${item.Fontcolor}`)
                    ? `${item.Fontcolor}`
                    : "pink",
                }}
              >
                <CardContent max={"100%"} style={{ padding: "10%" }}>
                  <Typography variant="h3" fontWeight={600} align="center">
                    {item.Content}
                  </Typography>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginTop: "-8%",
                  }}
                >
                  <ThumbUpAltIcon
                    onClick={() => handleLike(item.id, item.Likes, index)}
                    sx={{
                      fontSize: 25,
                      m: "3%",
                      "&:hover": { color: "LightGreen" },
                    }}
                  />
                  <p>{item.Likes}</p>
                </div>
              </Cards>
            ))}
          </Gallery>
        </div>
      </Grid>
    </div>
  );
}
