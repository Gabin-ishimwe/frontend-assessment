/* eslint-disable no-unused-vars */
import { PlayArrow } from "@mui/icons-material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SearchIcon from "@mui/icons-material/Search";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import React from "react";
import CustomSideBarItem from "./CustomSideBarItem";

const drawerWidth = 200;

// drawer opened
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "#0f172a",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// drawer closed
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#0f172a",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const CustomDrawer = ({ open, handleClick }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}>
        <Box>
          <List>
            <CustomSideBarItem open={open} item={"DEV"}>
              <LogoDevIcon sx={{ color: "white" }} />
            </CustomSideBarItem>
            <CustomSideBarItem open={open} item={"Demo"}>
              <PlayArrow />
            </CustomSideBarItem>
          </List>
          <Divider
            variant="middle"
            sx={{ backgroundColor: "#6b7280", opacity: open ? 0 : 1 }}
          />
          <List>
            <CustomSideBarItem open={open} item={"Label 1"}>
              <ShutterSpeedIcon />
            </CustomSideBarItem>
            <CustomSideBarItem open={open} item={"Label 2"}>
              <SearchIcon />
            </CustomSideBarItem>
          </List>
          <Divider
            variant="middle"
            sx={{ backgroundColor: "#6b7280", opacity: open ? 0 : 1 }}
          />
          <List>
            <CustomSideBarItem open={open} item={"Label 3"}>
              <AcUnitIcon />
            </CustomSideBarItem>
            <CustomSideBarItem open={open} item={"Label 4"}>
              <RestartAltIcon />
            </CustomSideBarItem>
            <CustomSideBarItem open={open} item={"Label 5"}>
              <CalendarTodayIcon />
            </CustomSideBarItem>
            <CustomSideBarItem open={open} item={"Label 6"}>
              <FolderIcon />
            </CustomSideBarItem>
          </List>
          <Divider
            variant="middle"
            sx={{ backgroundColor: "#6b7280", opacity: open ? 0 : 1 }}
          />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
                onClick={handleClick}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#9ca3af",
                  }}>
                  {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box>
          <List sx={{}}>
            <CustomSideBarItem open={open} item={"Settings"}>
              <TuneIcon />
            </CustomSideBarItem>
            <CustomSideBarItem open={open} item={"Profile"}>
              <AccountCircleIcon />
            </CustomSideBarItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
