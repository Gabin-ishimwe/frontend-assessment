/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import WebAssetIcon from "@mui/icons-material/WebAsset";
import { Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import React from "react";
import CommitBtn from "./CommitBtn";
import ProjectBtn from "./ProjectBtn";
import DevBtn from "./devBtn";

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#1f2937",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7)})`,
  }),
}));

const CustomAppBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar open={open} elevation={0}>
      <Toolbar disableGutters sx={{ px: 2 }}>
        <ProjectBtn />
        <DevBtn />
        <CommitBtn />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}>
          <WebAssetIcon sx={{ color: "#9ca3af", pr: 1, fontSize: 32 }} />
          <WebAssetIcon sx={{ color: "#9ca3af", pr: 1, fontSize: 32 }} />
          <WebAssetIcon sx={{ color: "#9ca3af", pr: 1, fontSize: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
