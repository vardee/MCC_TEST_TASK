import { NodeProps } from "../../types/types.ts";
import "./node.css";

const NodeComponent = ({
  node,
  isSelected,
  onClick,
  level,
  editingIndex,
}: NodeProps) => {
  return (
    <li>
      <span
        onClick={() => onClick(node.id)}
        className={isSelected ? "selected" : ""}
      >
        {node.name}
      </span>
      {node.nodeChilds.length > 0 && (
        <ul>
          {node.nodeChilds.map((childNode) => (
            <NodeComponent
              key={childNode.id}
              node={childNode}
              isSelected={editingIndex === childNode.id}
              onClick={onClick}
              level={level + 1}
              editingIndex={editingIndex}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NodeComponent;
