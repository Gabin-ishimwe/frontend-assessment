/* eslint-disable no-unused-vars */
import HelpIcon from "@mui/icons-material/Help";
import { Box, Button, Divider, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import React from "react";
import File from "../../folderStructure/File";
import Dropdown from "./Dropdown";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#fff",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    color: "#9ca3af",
    fontSize: 15,
    fontWeight: theme.typography.fontWeightMedium,
    // marginRight: theme.spacing(1),
    "&:hover": {
      color: "#fff",
    },
    "&.Mui-selected": {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "red",
    },
  })
);

const TopRight = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexBasis: "30%",
        overflowY: "auto",
      }}>
      <Box
        sx={{
          px: 2,
          pt: 3,
          width: "100%",
        }}>
        <AntTabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example">
          <AntTab label="Outlined" />
          <AntTab label="Documentation" />
        </AntTabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          px: 2,
          pt: 2,
          pb: 1,
        }}>
        <HelpIcon sx={{ color: "#f59e0b", mr: 0.5 }} />
        <Typography variant="subtitle2" sx={{ color: "#f59e0b", fontSize: 15 }}>
          No compilation issue
        </Typography>
      </Box>
      <File label={"table"} name={"data_2_with_ref"} color={"#06b6d4"} />
      <Divider sx={{ backgroundColor: "#6b7280", mt: 1 }} />
      <Dropdown folderName={"Dependencies"} num={3}>
        <Typography>NPM@3.91</Typography>
      </Dropdown>
      <Divider sx={{ backgroundColor: "#6b7280", mt: 1 }} />
      <Dropdown folderName={"Compiled"} num={0}>
        <Typography>NPM@3.91</Typography>
      </Dropdown>
      <Divider sx={{ backgroundColor: "#6b7280", mt: 1 }} />
      <Dropdown folderName={"Query"} num={0}>
        <Typography>NPM@3.91</Typography>
      </Dropdown>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 3,
        }}>
        <Button
          variant="contained"
          disableElevation
          sx={{
            fontSize: 15,
            flexBasis: "50%",
            textTransform: "none",
            borderRadius: 2,
            padding: "10px 4px",
            backgroundColor: "#6b7280",
            "&:hover": {
              backgroundColor: "#6b7280",
            },
            marginRight: 2,
          }}>
          Execute query
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            flexBasis: "50%",
            fontSize: 15,
            backgroundColor: "#2563eb",
            textTransform: "none",
            boxShadow: 0,
            borderRadius: 2,
            padding: "10px 4px",
            "&:hover": {
              backgroundColor: "#2563eb",
            },
          }}>
          Run this node
        </Button>
      </Box>
    </Box>
  );
};

export default TopRight;
