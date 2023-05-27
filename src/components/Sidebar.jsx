import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import Ide from "./CodingEnv/Ide";
import CustomDrawer from "./drawer/CustomDrawer";
import Structure from "./folderStructure/Structure";
import CustomAppBar from "./navbar/CustomAppBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleSidebar = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomDrawer open={open} handleClick={handleSidebar} />
      <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          height: "calc(100vh - 48px)",
          mt: 6,
        }}>
        {/* <DrawerHeader /> */}
        <Structure />
        <Ide />
      </Box>
    </Box>
  );
}
