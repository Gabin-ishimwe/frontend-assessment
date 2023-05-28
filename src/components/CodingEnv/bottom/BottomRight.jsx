/* eslint-disable no-unused-vars */
import { Close } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React from "react";
import { dataRows } from "../../../utils/dataset";
import CustomChip from "../../folderStructure/CustomChip";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderColor: "#6b7280",
  [`&.${tableCellClasses.head}`]: {
    color: "white",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "bold",
  },
}));

const BottomRight = () => {
  return (
    <Box
      sx={{
        flexBasis: "60%",
        overflow: "auto",
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 3,
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          <CustomChip label={"view"} color={"#06b6d4"} />
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
            dataform_demo.dataset_1
          </Typography>
        </Box>
        <Close sx={{ fontSize: "32" }} />
      </Box>
      <Divider sx={{ backgroundColor: "#6b7280" }} />
      <TableContainer>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Field</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <StyledTableCell>{row.field}</StyledTableCell>
                <StyledTableCell>{row.type}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BottomRight;
