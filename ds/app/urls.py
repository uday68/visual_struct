from django.urls import path
from . import views

urlpatterns = [
    # Base pages
    path("", views.animation, name="animation"),
    path("home/", views.home, name="home"),
    path("nav/", views.nav, name="nav"),
    path("visualizer/", views.visualizer, name="visualizer"),

    # Data Structures and Algorithms
    path("visualizer/array/", views.array, name="array"),
    path("visualizer/stack/", views.stack, name="stack"),
    path("visualizer/queue/", views.queue, name="queue"),
    path("visualizer/linkedlist/", views.linkedlist, name="linkedlist"),
    path("visualizer/tree/", views.tree, name="tree"),
    path("visualizer/graph/", views.graph, name="graph"),
    path("visualizer/hash/", views.hash, name="hash"),
    path("visualizer/heap/", views.heap, name="heap"),
    path("visualizer/trie/", views.trie, name="trie"),
    path("visualizer/skiplist/", views.skiplist, name="skiplist"),
    path("visualizer/segmenttree/", views.segmenttree, name="segmenttree"),
    path("visualizer/fenwicktree/", views.fenwicktree, name="fenwicktree"),
    path("visualizer/binaryindexedtree/", views.binaryindexedtree, name="binaryindexedtree"),
    path("visualizer/suffixarray/", views.suffixarray, name="suffixarray"),
    path("visualizer/suffixtree/", views.suffixtree, name="suffixtree"),
    path("visualizer/btree/", views.btree, name="btree"),
    path("visualizer/redblacktree/", views.redblacktree, name="redblacktree"),
    path("visualizer/avltree/", views.avltree, name="avltree"),
    path("visualizer/kdtree/", views.kdtree, name="kdtree"),
    path("visualizer/disjointset/", views.disjointset, name="disjointset"),
    path("visualizer/binarysearch/", views.binarysearch, name="binarysearch"),
    path("visualizer/bfs/", views.bfs, name="bfs"),
    path("visualizer/dfs/", views.dfs, name="dfs"),
    path("visualizer/topologicalsort/", views.topologicalsort, name="topologicalsort"),
    path("visualizer/kruskal/", views.kruskal, name="kruskal"),
    path("visualizer/prim/", views.prim, name="prim"),
    path("visualizer/dijkstra/", views.dijkstra, name="dijkstra"),
    path("visualizer/bellmanford/", views.bellmanford, name="bellmanford"),
    path("visualizer/floydwarshall/", views.floydwarshall, name="floydwarshall"),
    path("visualizer/maxflow/", views.maxflow, name="maxflow"),
    path("visualizer/mincut/", views.mincut, name="mincut"),
]