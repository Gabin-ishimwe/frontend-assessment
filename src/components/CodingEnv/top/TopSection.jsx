/* eslint-disable no-unused-vars */
import { Box, Divider } from "@mui/material";
import React from "react";
import TopRight from "./TopRight";

const TopSection = () => {
  return (
    <Box
      sx={{
        flex: "1 1 50%",
        display: "flex",
        height: "100%",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          flexBasis: "70%",
        }}>
        <p>Hellow world</p>
      </Box>
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
