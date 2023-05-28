/* eslint-disable no-unused-vars */
import { Box, Divider } from "@mui/material";
import React from "react";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

const TopSection = () => {
  return (
    <Box
      sx={{
        flex: "1 1 50%",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}>
      <TopLeft />
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
