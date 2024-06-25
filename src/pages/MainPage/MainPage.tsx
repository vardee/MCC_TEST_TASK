import { useState} from "react";
import "./mainPage.css";
import TreeComponent from "../../components/Tree/Tree.tsx";
import { Node } from "../../types/types.ts";
import { addNode, removeNode, editNode } from "../../services/NodeService.ts";

const MainPage = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [editingIndex, setEditingIndex] = useState<string | null>(null);
  const [newNodeName, setNewNodeName] = useState<string>("");
  const [editNodeName, setEditNodeName] = useState<string>("");

  const handleAdd = () => {
    if (newNodeName.trim()) {
      setNodes(addNode(newNodeName, editingIndex, nodes));
      setNewNodeName("");
      setEditingIndex(null);
    }
  };

  const handleRemove = () => {
    if (editingIndex !== null) {
      setNodes(removeNode(editingIndex, nodes));
      setEditingIndex(null);
    }
  };

  const handleEdit = () => {
    if (editingIndex !== null && editNodeName.trim()) {
      setNodes(editNode(editingIndex, editNodeName.trim(), nodes));
      setEditingIndex(null);
      setEditNodeName("");
    }
  };

  const handleReset = () => {
    setNodes([]);
    setEditingIndex(null);
    setNewNodeName("");
    setEditNodeName("");
  };
  return (
    <div className="tree-container" >
      <TreeComponent
        nodes={nodes}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />
      <div className="controls">
        <input
          type="text"
          placeholder="Add new node"
          value={newNodeName}
          onChange={(e) => setNewNodeName(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <input
          type="text"
          placeholder="Edit selected node"
          value={editNodeName}
          onChange={(e) => setEditNodeName(e.target.value)}
        />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default MainPage;
