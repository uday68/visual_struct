text = [
    "Stack", "Queue", "LinkedList", "Tree", "Graph", "Hash", "Heap", 
    "Trie", "SkipList", "SegmentTree", "FenwickTree", "BinaryIndexedTree", 
    "SuffixArray", "SuffixTree", "BTree", "RedBlackTree", "AVLTree", "KDTree", 
    "DisjointSet", "BinarySearch", "BFS", "DFS", "TopologicalSort", "Kruskal", 
    "Dijkstra", "BellmanFord", "FloydWarshall", "MaxFlow", "MinCut"
]  

def create_html_files():
    for item in text:
        filename = f"{item.lower()}.html"
        try:
            with open(filename, "w", encoding="utf-8") as f:
                content = f"""{{% include 'visualizer.html' %}}
{{% block content %}}
<h1>{item}</h1>
<p>Content for {item} goes here.</p>
{{% endblock %}}
"""
                f.write(content)
        except Exception as e:
            print(f"Failed to create {filename}: {e}")
    return "Files created successfully"

print(create_html_files())