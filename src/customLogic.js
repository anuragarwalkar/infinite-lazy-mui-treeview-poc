import { useState } from "react";

const useCustomLogic = (items) => {
  const [nodes, setNodes] = useState(items);

  const findNode = (allNodes, nodeId) => {
    for (let node of allNodes) {
      if (node.nodeId === nodeId) {
        return node;
      }

      if (node.nodes) {
        let item = findNode(node.nodes, nodeId);

        if (item) {
          return item;
        }
      }
    }
  };

  const cloneAndFind = (nodes, nodeId) => {
    const newNodes = [...nodes]; // Temp shallow clone
    return [newNodes, findNode(newNodes, nodeId)];
  };

  const handleChange = (e, [nodeId]) => {
    // Temp condition
    if (nodeId === "1") {
      // Adding temp node to show loader
      setNodes((oldNodes) => {
        let [newNodes, currentNodes] = cloneAndFind(oldNodes, nodeId);
        let existingNode = currentNodes.nodes.find(
          (item) => item.nodeId === nodeId
        );
        if (!existingNode) {
          currentNodes.nodes.push({
            nodeId: "9",
            loading: true
          });
        }
        return newNodes;
      });

      // Assuming we got the API res after 2 sec
      setTimeout(() => {
        setNodes((oldNodes) => {
          let [newNodes, currentNode] = cloneAndFind(oldNodes, nodeId);
          currentNode.nodes = currentNode.nodes.filter((item) => !item.loading);
          const existingNode = currentNode.nodes.find(
            (item) => item.nodeId === nodeId
          );
          if (!existingNode) {
            currentNode.nodes.push({
              nodeId: "10",
              label: "Glow"
            });
          }
          return newNodes;
        });
      }, 2000);
    }
    // End func
  };

  return [nodes, handleChange];
};

export default useCustomLogic;
