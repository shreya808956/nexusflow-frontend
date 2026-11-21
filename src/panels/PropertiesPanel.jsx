
function PropertiesPanel({ selectedNode, onUpdateNode }) {
  // Show a message when no node is selected
  if (!selectedNode) {
    return (
      <div className="properties-panel">
        <h2>Properties</h2>
        <p className="empty-properties">
          Select a node to view its properties.
        </p>
      </div>
    );
  }

  // Identify the selected node
  const nodeType =
    selectedNode.data.nodeType ||
    selectedNode.id.split("-")[0];

  // Get existing sensor configuration or default values
  const config = selectedNode.data.config || {
    sensorType: "Temperature",
    unit: "°C",
    samplingInterval: 5,
  };

  return (
    <div className="properties-panel">
      <h2>Node Properties</h2>

      {/* Node ID */}
      <div className="property-group">
        <label>Node ID</label>
        <p>{selectedNode.id}</p>
      </div>

      {/* Node Name */}
      <div className="property-group">
        <label>Node Name</label>

        <input
          type="text"
          value={selectedNode.data.label || ""}
          onChange={(event) =>
            onUpdateNode(selectedNode.id, event.target.value)
          }
        />
      </div>

      {/* Node Type */}
      <div className="property-group">
        <label>Node Type</label>
        <p>{nodeType}</p>
      </div>

      {/* Sensor Configuration */}
      {nodeType === "sensor" && (
        <>
          <h3 className="configuration-heading">
            Sensor Configuration
          </h3>

          <div className="property-group">
            <label>Sensor Type</label>

            <select
              value={config.sensorType || "Temperature"}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    sensorType: event.target.value,
                  },
                })
              }
            >
              <option value="Temperature">Temperature</option>
              <option value="Humidity">Humidity</option>
              <option value="Pressure">Pressure</option>
            </select>
          </div>

          <div className="property-group">
            <label>Measurement Unit</label>

            <select
              value={config.unit || "°C"}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    unit: event.target.value,
                  },
                })
              }
            >
              <option value="°C">Celsius (°C)</option>
              <option value="°F">Fahrenheit (°F)</option>
              <option value="%">Percentage (%)</option>
              <option value="Pa">Pascal (Pa)</option>
            </select>
          </div>

          <div className="property-group">
            <label>Sampling Interval (seconds)</label>

            <input
              type="number"
              min="1"
              value={config.samplingInterval ?? 5}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    samplingInterval: Number(event.target.value),
                  },
                })
              }
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PropertiesPanel;
