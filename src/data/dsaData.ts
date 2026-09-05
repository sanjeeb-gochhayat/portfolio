export interface DsaConcept {
  id: string;
  name: string;
  category: 'Searching' | 'Trees' | 'Sorting' | 'Graphs' | 'Recursion';
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  conceptSummary: string;
  keyInsight: string;
  codeSnippet: string;
}

export const dsaConcepts: DsaConcept[] = [
  {
    id: "binary-search",
    name: "Binary Search",
    category: "Searching",
    timeComplexity: {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(log n)"
    },
    spaceComplexity: "O(1)",
    conceptSummary: "Divide-and-conquer on a sorted dataset, halving the search space at each iteration by comparing the target with the median element.",
    keyInsight: "Reduces search space exponentially from 1,000,000 items down to just ~20 comparisons.",
    codeSnippet: `function binarySearch(arr: number[], target: number): number {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`
  },
  {
    id: "bst-traversal",
    name: "Binary Tree Traversal",
    category: "Trees",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)"
    },
    spaceComplexity: "O(h) where h = height",
    conceptSummary: "Systematically visiting every node in a hierarchical tree structure. In-order traversal of a BST yields elements in strictly sorted ascending order.",
    keyInsight: "Underpins DOM tree reconciliation, AST parsing in Babel/SWC, and React fiber tree traversals.",
    codeSnippet: `function inOrder(node: TreeNode | null, visit: (val: number) => void) {
  if (!node) return;
  inOrder(node.left, visit);   // Recurse left
  visit(node.val);             // Visit root
  inOrder(node.right, visit);  // Recurse right
}`
  },
  {
    id: "quick-sort",
    name: "Quick Sort / Partitioning",
    category: "Sorting",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)"
    },
    spaceComplexity: "O(log n)",
    conceptSummary: "Selects a pivot element and partitions the array such that elements smaller than the pivot move left, and larger move right.",
    keyInsight: "Cache-friendly in-place sorting that powers standard library implementations across multiple runtimes.",
    codeSnippet: `function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`
  },
  {
    id: "graph-bfs",
    name: "Graph BFS (Breadth-First Search)",
    category: "Graphs",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)"
    },
    spaceComplexity: "O(V)",
    conceptSummary: "Explores nodes layer by layer using a FIFO Queue, guaranteeing the shortest path in unweighted networks.",
    keyInsight: "Essential for social graph recommendations, routing protocols, and dependency graph resolution in bundlers.",
    codeSnippet: `function bfs(graph: Map<string, string[]>, start: string): string[] {
  const queue = [start];
  const visited = new Set<string>([start]);
  const order: string[] = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);
    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}`
  }
];
