/* eslint-disable no-unused-vars */
import { ListItem, ListItemButton } from "@mui/material";
import React from "react";
import CustomIconButton from "./CustomIconButton";
import CustomSideBarText from "./CustomSideBarText";

const CustomSideBarItem = ({ item, children, open }) => {
  return (
    <ListItem key={item} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 40,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}>
        <CustomIconButton open={open}>{children}</CustomIconButton>
        <CustomSideBarText label={item} open={open} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomSideBarItem;
