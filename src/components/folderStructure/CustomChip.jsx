/* eslint-disable no-unused-vars */
import { Chip, Typography } from "@mui/material";
import React from "react";

const CustomChip = ({ label, color }) => {
  return (
    <Chip
      label={
        <Typography
          variant="subtitle2"
          sx={{
            color: "white",
            // fontWeight: 500,
          }}>
          {label}
        </Typography>
      }
      sx={{
        backgroundColor: color,
      }}
    />
  );
};

export default CustomChip;
