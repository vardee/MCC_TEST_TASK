import NodeComponent from "../Node/Node.tsx";
import { TreeProps } from "../../types/types.ts";
import "./tree.css";

const TreeComponent = ({ nodes, editingIndex, setEditingIndex }: TreeProps) => {
  const handleClickNode = (index: string) => {
    if (index === editingIndex) {
      setEditingIndex(null);
    } else {
      setEditingIndex(index);
    }
  };

  return (
    <div className="tree">
      <ul>
        {nodes.map((node) => (
          <NodeComponent
            key={node.id}
            node={node}
            isSelected={editingIndex === node.id}
            onClick={handleClickNode}
            level={0}
            editingIndex={editingIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default TreeComponent;
