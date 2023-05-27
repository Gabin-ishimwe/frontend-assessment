/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React from "react";
import BottomSection from "./bottom/BottomSection";
import TopSection from "./top/TopSection";

const Ide = () => {
  return (
    <Box
      sx={{
        flexBasis: "80%",
        backgroundColor: "#374151",
        display: "flex",
        flexDirection: "column",
      }}>
      <TopSection />
      <BottomSection />
    </Box>
  );
};

export default Ide;
