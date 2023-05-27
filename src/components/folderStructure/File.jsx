/* eslint-disable no-unused-vars */
import { MoreHoriz } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomChip from "./CustomChip";

const File = ({ label, name, color }) => {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#374151",
          cursor: "pointer",
          "& .child": {
            color: "white",
          },
        },
        px: 2,
        py: 1,
      }}>
      <CustomChip label={label} color={color} />
      <Typography
        className="child"
        variant="subtitle2"
        sx={{
          ml: 1,
          fontSize: 15,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}>
        {name}
      </Typography>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
        <MoreHoriz
          sx={{ fontSize: 28, opacity: isButtonVisible ? 1 : 0 }}
          className="child"
        />
      </Box>
    </Box>
  );
};

export default File;
