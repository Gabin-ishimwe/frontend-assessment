/* eslint-disable no-unused-vars */
import { ListItemText } from "@mui/material";
import React from "react";

const CustomSideBarText = ({ label, open }) => {
  return (
    <ListItemText
      primary={
        <p style={{ fontSize: 14, margin: 0, padding: 0, fontWeight: "bold" }}>
          {label}
        </p>
      }
      sx={{
        opacity: open ? 1 : 0,
      }}
    />
  );
};

export default CustomSideBarText;
