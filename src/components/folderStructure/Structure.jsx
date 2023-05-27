/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import React from "react";
import File from "./File";
import Folder from "./Folder";

const Structure = () => {
  return (
    <Box
      sx={{
        flexBasis: "20%",
        maxWidth: "100%",
        backgroundColor: "#4b5563",
        overflow: "hidden",
        overflowY: "auto",
      }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          pt: 4,
          px: 2,
          pb: 1,
        }}>
        Files
      </Typography>
      <File label={"config"} color={"#06b6d4"} name={"dataform"} />
      <File label={"config"} color={"#06b6d4"} name={"package-form"} />
      <File label={"config"} color={"#06b6d4"} name={"package"} />
      <Folder folderName={"models"}>
        <Folder folderName={"1_simple_examples"}>
          <File label={"SQL"} color={"#4ade80"} name={"dataset_1"} />
          <File label={"SQL"} color={"#4ade80"} name={"dataset_2_with_ref"} />
        </Folder>
        <Folder folderName={"2_advanced_examples"}>
          <File label={"SQL"} color={"#4ade80"} name={"dataset_3_increased"} />
          <File label={"JS"} color={"#facc15"} name={"dataset_4_increased"} />
        </Folder>
        <Folder folderName={"3_advanced_examples"}>
          <File label={"OPS"} color={"#22d3ee"} name={"dataset_3_increased"} />
          <File
            label={"access"}
            color={"#fb923c"}
            name={"dataset_4_increased"}
          />
        </Folder>
      </Folder>
      <Folder folderName={"Folder 2"}>
        <File label={"config"} color={"#06b6d4"} name={"dataform"} />
        <File label={"config"} color={"#06b6d4"} name={"package-form"} />
        <File label={"config"} color={"#06b6d4"} name={"package"} />
        <File label={"config"} color={"#06b6d4"} name={"package-form"} />
      </Folder>
    </Box>
  );
};

export default Structure;
