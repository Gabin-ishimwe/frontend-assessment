/* eslint-disable no-unused-vars */
import FindInPageIcon from "@mui/icons-material/FindInPage";
import SchemaIcon from "@mui/icons-material/Schema";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const BottomSection = () => {
  return (
    <Box
      sx={{
        // flexBasis: "calc(50% - 42px)",
        flex: 1,
        backgroundColor: "#1f2937",
        // height: "100%",
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
          //   height: "100%",
        }}>
        <Box
          sx={{
            flexBasis: "40%",
          }}></Box>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#6b7280" }}
          flexItem
        />
        <Box
          sx={{
            flexBasis: "60%",
          }}></Box>
      </Box>
    </Box>
  );
};

export default BottomSection;
