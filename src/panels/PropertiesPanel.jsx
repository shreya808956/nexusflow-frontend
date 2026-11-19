function PropertiesPanel({selectedNode,onUpdateNode}){
    //if no node is selected show an empyty message 
    if(!selectedNode){
        return(
            <div className="properties-panel">
                <h2>Properties</h2>
                
                <p className="empty-properties">
                    select a node to view its properties
                </p>
            </div>
        );
    }
    return (
        <div className="properties-panel">
            <h2>Node Properties</h2>

            <div className="property-group">
                <label>Node ID </label>
                <p>{selectedNode.id}</p>
            </div>
            <div className="property-group">
                <label>Node Name</label>

                <input 
                type="text"
                value={selectedNode.data.label || ""}
                onChange={(event)=>
                onUpdateNode(selectedNode.id,event.target.value)
                  }
                />
            </div>
            <div className="property=group">
                <label>Node Type</label>
                <p>{selectedNode.type}</p>
            </div>

        </div>

    );


}
export default PropertiesPanel;