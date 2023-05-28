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
        backgroundColor: "#4b5563",
        overflow: "hidden",
        overflowY: "auto",
      }}>
      <Typography
        variant="h5"
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
        <Folder folderName={"1_simple_examples"} level={true}>
          <File
            label={"SQL"}
            color={"#4ade80"}
            name={"dataset_1"}
            level={true}
            levelFolder={true}
          />
          <File
            label={"SQL"}
            color={"#4ade80"}
            name={"dataset_2_with_ref"}
            level={true}
          />
        </Folder>
        <Folder folderName={"2_advanced_examples"} level={true}>
          <File
            label={"SQL"}
            color={"#4ade80"}
            name={"dataset_3_increased"}
            level={true}
          />
          <File
            label={"JS"}
            color={"#facc15"}
            name={"dataset_4_increased"}
            level={true}
          />
        </Folder>
        <Folder folderName={"3_advanced_examples"} level={true}>
          <File
            label={"OPS"}
            color={"#22d3ee"}
            name={"dataset_3_increased"}
            level={true}
          />
          <File
            label={"access"}
            color={"#fb923c"}
            name={"dataset_4_increased"}
            level={true}
          />
        </Folder>
      </Folder>
      <Folder folderName={"Models_2"}>
        <File
          label={"config"}
          color={"#06b6d4"}
          name={"dataform"}
          level={true}
        />
        <File
          label={"config"}
          color={"#06b6d4"}
          name={"package-form"}
          level={true}
        />
        <File
          label={"config"}
          color={"#06b6d4"}
          name={"package"}
          level={true}
        />
        <File
          label={"config"}
          color={"#06b6d4"}
          name={"package-form"}
          level={true}
        />
        <Folder folderName={"Models_2"} level={true}>
          <File
            label={"config"}
            color={"#06b6d4"}
            name={"dataform"}
            level={true}
          />
          <File
            label={"config"}
            color={"#06b6d4"}
            name={"package-form"}
            level={true}
          />
          <File
            label={"config"}
            color={"#06b6d4"}
            name={"package"}
            level={true}
          />
          <File
            label={"config"}
            color={"#06b6d4"}
            name={"package-form"}
            level={true}
          />
        </Folder>
      </Folder>
    </Box>
  );
};

export default Structure;
