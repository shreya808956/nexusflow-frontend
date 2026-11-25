
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

  // Get the selected node configuration
  const config = selectedNode.data.config || {};

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

      {/* Filter Configuration */}
      {nodeType === "filter" && (
        <>
          <h3 className="configuration-heading">
            Filter Configuration
          </h3>

          <div className="property-group">
            <label>Comparison Operator</label>

            <select
              value={config.operator ?? ">"}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    operator: event.target.value,
                  },
                })
              }
            >
              <option value=">">Greater than (&gt;)</option>
              <option value="<">Less than (&lt;)</option>
              <option value=">=">Greater than or equal (&gt;=)</option>
              <option value="<=">Less than or equal (&lt;=)</option>
              <option value="==">Equal to (==)</option>
            </select>
          </div>

          <div className="property-group">
            <label>Threshold Value</label>

            <input
              type="number"
              value={config.threshold ?? 30}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    threshold: Number(event.target.value),
                  },
                })
              }
            />
          </div>
        </>
      )}

      {/* Alert Configuration */}
      {nodeType === "alert" && (
        <>
          <h3 className="configuration-heading">
            Alert Configuration
          </h3>

          <div className="property-group">
            <label>Alert Message</label>

            <textarea
              value={config.message ?? "Temperature exceeded the safe limit!"}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    message: event.target.value,
                  },
                })
              }
              placeholder="Enter alert message"
              rows={4}
            />
          </div>

          <div className="property-group">
            <label>Severity Level</label>

            <select
              value={config.severity ?? "Warning"}
              onChange={(event) =>
                onUpdateNode(selectedNode.id, {
                  config: {
                    severity: event.target.value,
                  },
                })
              }
            >
              <option value="Info">Info</option>
              <option value="Warning">Warning</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertiesPanel;
