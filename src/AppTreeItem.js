import React from "react";
import TreeItem from "@mui/lab/TreeItem";

function AppTreeItem({ item }) {
  return item.nodes ? (
    <TreeItem {...item}>
      {item.nodes.map((inItem) => (
        <AppTreeItem item={inItem} />
      ))}
    </TreeItem>
  ) : item.loading ? (
    <div key={item.nodeId} style={{ paddingLeft: "2rem" }}>
      {"Loading Data..."}
    </div>
  ) : (
    <TreeItem {...item} />
  );
}

export default AppTreeItem;
