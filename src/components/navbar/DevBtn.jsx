/* eslint-disable no-unused-vars */
import { MoreHoriz } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const DevButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#1f2937",
  boxShadow: 0,
  borderRadius: 5,
  border: "0.5px solid",
  borderColor: "#6b7280",
  display: "flex",
  padding: "0",
  "&:hover": {
    backgroundColor: "#1f2937",
  },
  marginRight: 12,
});

const DevBtn = () => {
  return (
    <DevButton variant="text" disableElevation>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "6px 10px",
        }}>
        <Typography
          variant="body1"
          sx={{ pr: 0.5, fontSize: 14, fontWeight: "600" }}>
          Development
        </Typography>
        <KeyboardArrowDownIcon
          sx={{ color: "#9ca3af", fontSize: 22, pt: 0.2 }}
        />
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ backgroundColor: "#6b7280" }}
      />
      <MoreHoriz sx={{ color: "#9ca3af", fontSize: 22, mx: "6px" }} />
    </DevButton>
  );
};

export default DevBtn;
