import { Node } from "../types/types.ts";


export const addNode = (newNodeName: string, parentId: string | null, nodes: Node[]): Node[] => {
  const newId = generateId();
  const newNode: Node = {
    id: newId,
    name: newNodeName.trim(),
    parentId,
    nodeChilds: [],
  };

  if (parentId === null) {
    return [...nodes, newNode];
  }

  return nodes.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        nodeChilds: [...node.nodeChilds, newNode],
      };
    }
    return {
      ...node,
      nodeChilds: addNode(newNodeName, parentId, node.nodeChilds),
    };
  });
};

export const removeNode = (id: string, nodes: Node[]): Node[] => {
  return nodes
    .filter((node) => node.id !== id)
    .map((node) => ({
      ...node,
      nodeChilds: removeNode(id, node.nodeChilds),
    }));
};

export const editNode = (id: string, newName: string, nodes: Node[]): Node[] => {
  return nodes.map((node) => {
    if (node.id === id) {
      return {
        ...node,
        name: newName,
      };
    }
    return {
      ...node,
      nodeChilds: editNode(id, newName, node.nodeChilds),
    };
  });
};

const generateId = () => {
  return (
    Date.now().toString(36) + Math.random().toString(36).substring(2, 10)
  );
};
