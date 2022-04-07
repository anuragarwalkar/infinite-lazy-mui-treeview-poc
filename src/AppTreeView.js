import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppTreeItem from "./AppTreeItem";
import useCustomLogic from "./customLogic";

export default function AppTreeView({ items }) {
  const [nodes, handleChange] = useCustomLogic(items);

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeToggle={handleChange}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {nodes.map((item) => {
        return <AppTreeItem item={item} />;
      })}
    </TreeView>
  );
}
