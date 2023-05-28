/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import { Box } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  backgroundColor: "#4b5563",
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
  flexDirection: "row-reverse",
  overflow: "hidden",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0.1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: 0,
  // margin: 0,
}));

const Folder = ({ children, folderName, level = false }) => {
  return (
    <div>
      <Accordion
        sx={
          {
            // pl: level ? 2.5 : 0,
          }
        }>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textOverflow: "ellipsis",
              //   whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
            }}>
            <FolderIcon sx={{ mr: 0.5, color: "#9ca3af" }} />
            <Typography sx={{ fontSize: 15, fontWeight: "bolder" }}>
              {folderName}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Folder;
