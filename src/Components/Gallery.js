import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import "../App.css";
import "../Utils/Gradient.css";

export default function Gallery(props) {
  return (
    <div
      className={"normal"}
      style={{
        backgroundColor: "transparent",
        transition: "all .5s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease",
        width: "100vw",
        flexDirection: "row",
        justifyContent: "center",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          minWidth: "75vw",
          maxWidth: "95vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Masonry spacing={2} columns={{ xs: 2, sm: 2, md: 3 }} sx={{ m: "0%" }}>
          {props.children}
        </Masonry>
      </Box>
    </div>
  );
}
