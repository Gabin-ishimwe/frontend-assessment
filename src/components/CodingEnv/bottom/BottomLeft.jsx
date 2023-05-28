/* eslint-disable no-unused-vars */
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RefreshIcon from "@mui/icons-material/Refresh";

import { Box, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import React from "react";
import ViewedData from "./ViewedData";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  backgroundColor: "#1f2937",
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
  padding: 0,
  margin: 0,
}));

const BottomLeft = () => {
  return (
    <Box
      sx={{
        flexBasis: "40%",
        overflow: "auto",
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 3,
          py: 3,
        }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            pr: 1,
          }}>
          Refresh
        </Typography>
        <RefreshIcon sx={{ rotate: "90deg" }} />
      </Box>
      <Accordion>
        <AccordionSummary>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}>
            datafrom_demo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ViewedData label={"data_set_1"} />
          <ViewedData label={"data_set_2"} />
          <ViewedData label={"data_set_3"} />
          <ViewedData label={"data_set_4"} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}>
            datafrom_set2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ViewedData label={"data_set_5"} />
          <ViewedData label={"data_set_6"} />
          <ViewedData label={"data_set_7"} />
          <ViewedData label={"data_set_8"} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}>
            datafrom_set2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ViewedData label={"data_set_5"} />
          <ViewedData label={"data_set_6"} />
          <ViewedData label={"data_set_7"} />
          <ViewedData label={"data_set_8"} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BottomLeft;
