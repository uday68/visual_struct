# views.py
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
    return render(request, "initial.html")

def array(request):
    return render(request, "Array.html")

def stack(request):
    return render(request, "Stack.html")

def queue(request):
    return render(request, "Queue.html")

def linkedlist(request):
    return render(request, "LinkedList.html")

def tree(request):
    return render(request, "Tree.html")

def graph(request):
    return render(request, "Graph.html")

def hash(request):
    return render(request, "Hash.html")

def heap(request):
    return render(request, "Heap.html")

def trie(request):
    return render(request, "Trie.html")

def skiplist(request):
    return render(request, "SkipList.html")

def segmenttree(request):
    return render(request, "SegmentTree.html")

def fenwicktree(request):
    return render(request, "FenwickTree.html")

def binaryindexedtree(request):
    return render(request, "BinaryIndexedTree.html")

def suffixarray(request):
    return render(request, "SuffixArray.html")

def suffixtree(request):
    return render(request, "SuffixTree.html")

def btree(request):
    return render(request, "BTree.html")

def redblacktree(request):
    return render(request, "RedBlackTree.html")

def avltree(request):
    return render(request, "AVLTree.html")

def kdtree(request):
    return render(request, "KDTree.html")

def disjointset(request):
    return render(request, "DisjointSet.html")

def binarysearch(request):
    return render(request, "BinarySearch.html")

def bfs(request):
    return render(request, "BFS.html")

def dfs(request):
    return render(request, "DFS.html")

def topologicalsort(request):
    return render(request, "TopologicalSort.html")

def kruskal(request):
    return render(request, "Kruskal.html")

def prim(request):
    return render(request, "Prim.html")

def dijkstra(request):
    return render(request, "Dijkstra.html")

def bellmanford(request):
    return render(request, "BellmanFord.html")

def floydwarshall(request):
    return render(request, "FloydWarshall.html")

def maxflow(request):
    return render(request, "MaxFlow.html")

def mincut(request):
    return render(request, "MinCut.html")
def contact(request):
    return render(request, "contact.html")
def about(request):
    return render(request, "abouts.html")
def privacy(request):
    return render(request, "privacy.html")
def terms(request):
    return render(request, "terms.html")