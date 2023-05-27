/* eslint-disable no-unused-vars */
import CommitIcon from "@mui/icons-material/Commit";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#60a5fa",
  boxShadow: 0,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  padding: "6px 12px",
  "&:hover": {
    backgroundColor: "#60a5fa",
  },
  marginRight: 12,
});

const CommitBtn = () => {
  return (
    <CustomButton variant="contained" disableElevation>
      <CommitIcon sx={{ color: "white", fontSize: 24, pr: 0.5 }} />
      Commit (2 files)
    </CustomButton>
  );
};

export default CommitBtn;
