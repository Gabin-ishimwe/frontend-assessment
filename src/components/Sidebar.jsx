import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Ide from "./CodingEnv/Ide";
import CustomDrawer from "./drawer/CustomDrawer";
import Structure from "./folderStructure/Structure";
import CustomAppBar from "./navbar/CustomAppBar";

export default function MiniDrawer() {
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
          height: "calc(100vh - 64px)",
          marginTop: 8,
        }}>
        <Structure />
        <Ide />
      </Box>
    </Box>
  );
}
