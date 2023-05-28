/* eslint-disable no-unused-vars */
import FindInPageIcon from "@mui/icons-material/FindInPage";
import SchemaIcon from "@mui/icons-material/Schema";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

const BottomSection = () => {
  return (
    <Box
      sx={{
        flex: "1 1 50%",
        // flexBasis: "50%",
        // flexGrow: 1,
        backgroundColor: "#1f2937",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          px: 3,
          py: 2,
          display: "flex",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 4,
          }}>
          <FindInPageIcon sx={{ color: "#9ca3af", mr: 1 }} />
          <Typography sx={{ color: "#9ca3af", fontWeight: "bolder" }}>
            Query results
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          <SchemaIcon sx={{ color: "white", mr: 1, fontWeight: 500 }} />
          <Typography sx={{ color: "white", fontWeight: 500 }}>
            Schemas
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#6b7280" }} />
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}>
        <BottomLeft />
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#6b7280" }}
          flexItem
        />
        <BottomRight />
      </Box>
    </Box>
  );
};

export default BottomSection;
