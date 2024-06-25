export interface Node {
    id: string;
    name: string;
    parentId: string | null;
    nodeChilds: Node[];
}


export interface NodeProps {
    node: Node;
    isSelected: boolean;
    onClick: (id: string) => void;
    level: number;
    editingIndex: string | null; 
}

export interface TreeProps {
  nodes: Node[];
  editingIndex: string | null;
  setEditingIndex: (id: string | null) => void;
}
