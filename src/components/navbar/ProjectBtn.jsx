/* eslint-disable no-unused-vars */
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#1f2937",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "6px 12px",
  "&:hover": {
    backgroundColor: "#1f2937",
  },
  marginRight: 12,
});

const ProjectBtn = () => {
  return (
    <StyledButton variant="text" disableElevation>
      <Typography variant="body1" sx={{ pr: 0.5, fontSize: 14 }}>
        Project name
      </Typography>
      <KeyboardArrowDownIcon sx={{ color: "#9ca3af", fontSize: 22, pt: 0.2 }} />
    </StyledButton>
  );
};

export default ProjectBtn;
