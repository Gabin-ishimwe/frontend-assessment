/* eslint-disable no-unused-vars */
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Typography } from "@mui/material";
import React from "react";

const ViewedData = ({ label }) => {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#374151",
          cursor: "pointer",
          "& .child": {
            color: "white",
          },
        },
        px: 3,
        py: 1,
      }}>
      <RemoveRedEyeIcon sx={{ mr: 1, color: "#9ca3af" }} className="child" />
      <Typography sx={{ fontSize: 15, fontWeight: "bold" }} className="child">
        {label}
      </Typography>
    </Box>
  );
};

export default ViewedData;
