
import { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import PropertiesPanel from "../panels/PropertiesPanel";
import "../styles/workflow.css";

const initialNodes = [
  {
    id: "sensor-1",
    type: "default",
    position: { x: 100, y: 140 },
    data: { label: "Temperature Sensor" },
  },
  {
    id: "filter-1",
    type: "default",
    position: { x: 400, y: 140 },
    data: { label: "Temperature Filter" },
  },
  {
    id: "alert-1",
    type: "default",
    position: { x: 700, y: 140 },
    data: { label: "Alert Notification" },
  },
];

const initialEdges = [
  {
    id: "edge-1",
    source: "sensor-1",
    target: "filter-1",
    animated: true,
  },
  {
    id: "edge-2",
    source: "filter-1",
    target: "alert-1",
    animated: true,
  },
];

function WorkflowEditor() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const [nodeCounter, setNodeCounter] = useState(1);
  

  const onConnect = useCallback(
    (connection) => {
      setEdges((currentEdges) =>
        addEdge(
          {
            ...connection,
            animated: true,
          },
          currentEdges
        )
      );
    },
    [setEdges]
  );
  const onNodeClick = useCallback((event,node)=>{
    setSelectedNode(node);

  },[]);
  const updateNode = (nodeId,newLabel) =>{
    setNodes((currentNodes) =>
    currentNodes.map((node)=>
    node.id === nodeId
  ? {
    ...node,
    data:{
      ...node.data,
      label: newLabel,
    },
  }
: node
)
);
setSelectedNode((currentNode) =>
currentNode && currentNode.id === nodeId
? {
  ...currentNode,
  data: {
    ...currentNode.data,
    label: newLabel,
  },
}
: currentNode
);
};

  const addNode = (nodeName) => {
    const newNode = {
      id: `${nodeName.toLowerCase()}-${nodeCounter}`,
      type: "default",
      position: {
        x: 180 + nodeCounter * 40,
        y: 320 + nodeCounter * 25,
      },
      data: {
        label: `${nodeName} ${nodeCounter}`,
      },
    };

    setNodes((currentNodes) => [...currentNodes, newNode]);
    setNodeCounter((count) => count + 1);
  };

  const resetWorkflow = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setNodeCounter(1);
  };

  return (
    <div className="workflow-page">

      <div className="workflow-heading">
        <div>
          <h1>Workflow Builder</h1>
          <p>
            Design, connect and manage your IoT workflows.
          </p>
        </div>

        <button
          className="reset-button"
          onClick={resetWorkflow}
        >
          Reset Workflow
        </button>
      </div>

      <div className="workflow-toolbar">
        <span className="toolbar-label">ADD NODE</span>

        <button
          className="sensor-button"
          onClick={() => addNode("Sensor")}
        >
          + Sensor
        </button>

        <button
          className="filter-button"
          onClick={() => addNode("Filter")}
        >
          + Filter
        </button>

        <button
          className="alert-button"
          onClick={() => addNode("Alert")}
        >
          + Alert
        </button>
      </div>

      <div className="workflow-workspace">

  <div className="workflow-canvas">
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      fitView
      deleteKeyCode={["Backspace", "Delete"]}
      nodesConnectable={true}
      nodesDraggable={true}
      elementsSelectable={true}
    >
      <Background gap={20} size={1} />
      <Controls />
      <MiniMap />
    </ReactFlow>
  </div>

  <PropertiesPanel
    selectedNode={selectedNode}
    onUpdateNode={updateNode}
  />

  </div>
      <div className="workflow-footer">
        <span>{nodes.length} nodes</span>
        <span>{edges.length} connections</span>
        <span className="canvas-status">Canvas ready</span>
      </div>

    </div>
  );
}

export default WorkflowEditor;
