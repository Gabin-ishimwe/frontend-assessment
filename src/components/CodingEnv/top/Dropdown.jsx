/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import React from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  backgroundColor: "#374151",
  overflow: "hidden",
  "&:before": {
    display: "none",
  },
  //   "&:hover": {
  //     backgroundColor: "#374151",
  //   },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ChevronRightIcon sx={{ fontSize: "20px", color: "#9ca3af" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0.1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

const Dropdown = ({ children, folderName, num }) => {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textOverflow: "ellipsis",
            //   whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
          }}>
          <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
            {folderName}
          </Typography>
          {num > 0 && (
            <Typography
              sx={{
                fontSize: 14,
                bgcolor: "#6b7280",
                px: 1,
                py: 0.2,
                mr: 1,
                borderRadius: 1,
              }}>
              {num}
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default Dropdown;
