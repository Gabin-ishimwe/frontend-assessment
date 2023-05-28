/* eslint-disable no-unused-vars */
import Editor, { useMonaco } from "@monaco-editor/react";
import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const TopLeft = () => {
  const monaco = useMonaco();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="#"
      sx={{
        color: "#9ca3af",
        fontWeight: "bold",
      }}>
      definitions
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="#"
      sx={{
        color: "#9ca3af",
        fontWeight: "bold",
      }}>
      1_simple_examples
    </Link>,
    <Typography
      key="3"
      color="text.primary"
      sx={{
        color: "#9ca3af",
        fontWeight: "bold",
      }}>
      dataset_2_with_ref.sql
    </Typography>,
  ];
  const content = `--- learn more on http://docs.project.co.guides/table

-- js type('table')

SELECT country as country
        device_type as device_type
        sum(revenue) as revenue
        sum(sessions) as sessions
        sum(pageviews) as pageviews
FROM my_table
WHERE country = "FRANCE"
GROUP BY 1, 2`;

  React.useEffect(() => {
    const editorTheme = {
      base: "vs-dark", // Specify the base theme (you can choose other themes as well)
      inherit: true, // Inherit the rest of the theme from the base theme
      rules: [],
      colors: {
        // Customize background and other colors
        "editor.background": "#374151",
        "editorLineNumber.foreground": "#ddd",
      },
    };
    monaco.editor.defineTheme("custom-theme", editorTheme);
  }, [monaco]);
  return (
    <Box
      sx={{
        flexBasis: "70%",
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2,
        }}>
        <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
        <Button
          variant="contained"
          disableElevation
          sx={{
            fontSize: 15,
            textTransform: "none",
            borderRadius: 2,
            flexShrink: 1,
            backgroundColor: "#6b7280",
            "&:hover": {
              backgroundColor: "#6b7280",
            },
          }}>
          save
        </Button>
      </Box>
      <Divider sx={{ backgroundColor: "#6b7280" }} />
      <Editor
        height={"100%"}
        width={"100%"}
        theme="custom-theme"
        defaultLanguage="sql"
        value={content}
      />
    </Box>
  );
};

export default TopLeft;
