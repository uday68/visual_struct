from django.shortcuts import render

# Create your views here.
def animation(request):
    return render(request, "animation.html")

def home(request):
    text = [
        {"name": "Array", "url": "array"},
        {"name": "Stack", "url": "stack"},
        {"name": "Queue", "url": "queue"},
        {"name": "LinkedList", "url": "linkedlist"},
        {"name": "Tree", "url": "tree"},
        {"name": "Graph", "url": "graph"},
        {"name": "Hash", "url": "hash"},
        {"name": "Heap", "url": "heap"},
        {"name": "Trie", "url": "trie"},
        {"name": "SkipList", "url": "skiplist"},
        {"name": "SegmentTree", "url": "segmenttree"},
        {"name": "FenwickTree", "url": "fenwicktree"},
        {"name": "BinaryIndexedTree", "url": "binaryindexedtree"},
        {"name": "SuffixArray", "url": "suffixarray"},
        {"name": "SuffixTree", "url": "suffixtree"},
        {"name": "BTree", "url": "btree"},
        {"name": "RedBlackTree", "url": "redblacktree"},
        {"name": "AVLTree", "url": "avltree"},
        {"name": "KDTree", "url": "kdtree"},
        {"name": "DisjointSet", "url": "disjointset"},
        {"name": "BinarySearch", "url": "binarysearch"},
        {"name": "BFS", "url": "bfs"},
        {"name": "DFS", "url": "dfs"},
        {"name": "TopologicalSort", "url": "topologicalsort"},
        {"name": "Kruskal", "url": "kruskal"},
        {"name": "Prim", "url": "prim"},
        {"name": "Dijkstra", "url": "dijkstra"},
        {"name": "BellmanFord", "url": "bellmanford"},
        {"name": "FloydWarshall", "url": "floydwarshall"},
        {"name": "MaxFlow", "url": "maxflow"},
        {"name": "MinCut", "url": "mincut"},
        # Add more items if necessary
    ]
    return render(request, "home.html", {"text": text})

def nav(request):
    return render(request, "nav.html")

def visualizer(request):
    return render(request, "visualizer.html")

def array(request):
    return render(request, "array.html")

def stack(request):
    return render(request, "stack.html")

def queue(request):
    return render(request, "queue.html")

def linkedlist(request):
    return render(request, "linkedlist.html")

def tree(request):
    return render(request, "tree.html")

def graph(request):
    return render(request, "graph.html")

def hash(request):
    return render(request, "hash.html")

def heap(request):
    return render(request, "heap.html")

def trie(request):
    return render(request, "trie.html")

def skiplist(request):
    return render(request, "skiplist.html")

def segmenttree(request):
    return render(request, "segmenttree.html")

def fenwicktree(request):
    return render(request, "fenwicktree.html")

def binaryindexedtree(request):
    return render(request, "binaryindexedtree.html")

def suffixarray(request):
    return render(request, "suffixarray.html")

def suffixtree(request):
    return render(request, "suffixtree.html")

def btree(request):
    return render(request, "btree.html")

def redblacktree(request):
    return render(request, "redblacktree.html")

def avltree(request):
    return render(request, "avltree.html")

def kdtree(request):
    return render(request, "kdtree.html")

def disjointset(request):
    return render(request, "disjointset.html")

def binarysearch(request):
    return render(request, "binarysearch.html")

def bfs(request):
    return render(request, "bfs.html")

def dfs(request):
    return render(request, "dfs.html")

def topologicalsort(request):
    return render(request, "topologicalsort.html")

def kruskal(request):
    return render(request, "kruskal.html")

def prim(request):
    return render(request, "prim.html")

def dijkstra(request):
    return render(request, "dijkstra.html")

def bellmanford(request):
    return render(request, "bellmanford.html")

def floydwarshall(request):
    return render(request, "floydwarshall.html")

def maxflow(request):
    return render(request, "maxflow.html")

def mincut(request):
    return render(request, "mincut.html")