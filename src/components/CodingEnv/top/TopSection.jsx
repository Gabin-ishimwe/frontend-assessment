/* eslint-disable no-unused-vars */
import { Box, Divider } from "@mui/material";
import React from "react";
import TopRight from "./TopRight";

const TopSection = () => {
  return (
    <Box
      sx={{
        // flexBasis: "calc(50% + 42px)",
        flex: 1,
        display: "flex",
      }}>
      <Box
        sx={{
          flexBasis: "70%",
        }}></Box>
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: "#6b7280" }}
        flexItem
      />
      <TopRight />
    </Box>
  );
};

export default TopSection;
