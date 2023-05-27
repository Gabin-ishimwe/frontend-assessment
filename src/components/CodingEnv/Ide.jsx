/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React from "react";
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
      <Box
        sx={{
          flexBasis: "calc(50% - 42px)",
          backgroundColor: "#1f2937",
        }}></Box>
    </Box>
  );
};

export default Ide;
