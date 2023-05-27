import { ListItemIcon } from "@mui/material";
import React from "react";

const CustomIconButton = ({ children, open }) => {
  return (
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 2 : "auto",
        justifyContent: "center",
        color: "#9ca3af",
      }}>
      {children}
    </ListItemIcon>
  );
};

export default CustomIconButton;
