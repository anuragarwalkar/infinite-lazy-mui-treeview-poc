import { Fragment } from "react";
import AppTreeView from "./AppTreeView";
import JsonView from "./JsonView";
import "./styles.css";

const items = [
  {
    label: "Globant Applications",
    nodeId: "1",
    nodes: [
      {
        nodeId: "2",
        label: ""
      }
    ]
  },
  {
    label: "Apple",
    nodeId: "3",
    nodes: [
      {
        nodeId: "4",
        label: "Mac OS Monterey",
        nodes: [
          {
            nodeId: "5",
            label: "Versions",
            nodes: [
              {
                nodeId: "6",
                label: "0.1.0",
                nodes: [
                  {
                    nodeId: "13",
                    label: "3.0.0"
                  }
                ]
              },
              {
                nodeId: "7",
                label: "0.1.1"
              },
              {
                nodeId: "8",
                label: "0.1.2"
              },
              {
                nodeId: "9",
                label: "0.1.3"
              }
            ]
          }
        ]
      }
    ]
  }
];

export default function App() {
  return (
    <Fragment>
      <strong>
        Note: There can be any level of nested elements at any level. the custom
        logic will handle the UI
      </strong>
      <br />
      <br />

      <div>
        <div>
          <div>Rendered Tree =={">"} </div>
          <br />
          <AppTreeView items={items} />
        </div>

        <div style={{ flexGrow: 0.4 }}>
          <div>Source JSON to render Tree</div>
          <JsonView />
        </div>
      </div>
    </Fragment>
  );
}
