(function() {
    let gridData = [];
    let selectedNodes = [];
    let edges = [];
    let mstEdges = [];
    let visitedNodes = new Set();
    let actionStack = [];

    const width = 600;
    const height = 600;
    let rows = 5;
    let cols = 5;

    const svg = d3.select("#graph-container").append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define arrow marker
    svg.append("defs").append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "#2c3e50");

    // Tooltip
    const tooltip = d3.select("#tooltip");

    document.getElementById("generate-grid-button").addEventListener("click", () => {
        rows = parseInt(document.getElementById("rows").value);
        cols = parseInt(document.getElementById("cols").value);
        generateGrid(rows, cols);
        document.getElementById("start-button").disabled = true;
        document.getElementById("undo-button").disabled = true;
        resetReport();
    });

    document.getElementById("undo-button").addEventListener("click", undoLastAction);

    function generateGrid(rows, cols) {
        gridData = [];
        selectedNodes = [];
        edges = [];
        mstEdges = [];
        visitedNodes.clear();
        actionStack = [];
        d3.select("#graph-container svg").remove();
        d3.select("#graph-container").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("defs").append("marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 15)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("fill", "#2c3e50");

        const newSvg = d3.select("#graph-container svg");

        const cellWidth = width / cols;
        const cellHeight = height / rows;

        // Create grid cells
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                gridData.push({
                    x: c * cellWidth + cellWidth / 2,
                    y: r * cellHeight + cellHeight / 2,
                    id: `${r}-${c}`
                });
            }
        }

        newSvg.selectAll(".grid-cell")
            .data(gridData)
            .enter()
            .append("circle")
            .attr("class", "grid-cell node")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", 15)
            .on("click", function (event, d) {
                if (selectedNodes.length < 2 && !selectedNodes.includes(d)) {
                    selectedNodes.push(d);
                    d3.select(this).classed("selected", true);
                    if (selectedNodes.length === 2) {
                        promptForEdge();
                    }
                }
            })
            .on("mouseover", function(event, d) {
                tooltip.style("opacity", 1)
                       .html(`Node: ${d.id}`)
                       .style("left", (event.pageX + 10) + "px")
                       .style("top", (event.pageY - 20) + "px");
            })
            .on("mouseout", function() {
                tooltip.style("opacity", 0);
            });

        // Initialize edges and weight labels
        updateEdges();
        updateReport();
    }

    function promptForEdge() {
        if (selectedNodes.length === 2) {
            let weight = prompt("Enter weight for the edge:");
            weight = parseFloat(weight);
            if (isNaN(weight) || weight <= 0) {
                alert("Invalid weight. Please enter a positive numerical value.");
                invalidateEdge(selectedNodes[0], selectedNodes[1], weight);
                selectedNodes = [];
                d3.selectAll(".selected").classed("selected", false);
                return;
            }

            const fromNode = selectedNodes[0];
            const toNode = selectedNodes[1];

            // Prevent self-loop
            if (fromNode.id === toNode.id) {
                alert("Self-loops are not allowed.");
                invalidateEdge(fromNode, toNode, weight);
                selectedNodes = [];
                d3.selectAll(".selected").classed("selected", false);
                return;
            }

            // Check if edge already exists
            const exists = edges.some(edge =>
                (edge.from.id === fromNode.id && edge.to.id === toNode.id) ||
                (edge.from.id === toNode.id && edge.to.id === fromNode.id)
            );

            if (exists) {
                alert("Edge already exists.");
                invalidateEdge(fromNode, toNode, weight);
            } else {
                // Add edge between nodes
                const newEdge = {from: fromNode, to: toNode, weight: weight};
                edges.push(newEdge);
                actionStack.push({action: 'add', edge: newEdge});
                updateEdges();
                updateReport();

                // Enable start and undo buttons
                document.getElementById("start-button").disabled = false;
                document.getElementById("undo-button").disabled = false;
            }

            // Clear selection and reset
            selectedNodes = [];
            setTimeout(() => {
                d3.selectAll(".grid-cell").classed("selected", false);
            }, 500);
        }
    }

    function invalidateEdge(from, to, weight) {
        const svg = d3.select("#graph-container svg");
        svg.append("line")
            .attr("class", "edge invalid-edge")
            .attr("x1", from.x)
            .attr("y1", from.y)
            .attr("x2", to.x)
            .attr("y2", to.y)
            .attr("stroke", "#e74c3c")
            .attr("stroke-width", 2)
            .attr("marker-end", "url(#arrow)");

        svg.append("text")
            .attr("class", "weight-label")
            .attr("x", (from.x + to.x) / 2)
            .attr("y", (from.y + to.y) / 2)
            .text(weight)
            .attr("fill", "#e74c3c");
    }

    function updateEdges() {
        const svg = d3.select("#graph-container svg");

        // Update edges
        const lines = svg.selectAll(".edge")
            .data(edges, d => `${d.from.id}-${d.to.id}`);

        lines.enter()
            .append("line")
            .attr("class", "edge")
            .on("click", function(event, d) {
                removeEdge(d);
            })
            .on("mouseover", function(event, d) {
                tooltip.style("opacity", 1)
                       .html(`Edge: ${d.from.id} - ${d.to.id}<br>Weight: ${d.weight}`)
                       .style("left", (event.pageX + 10) + "px")
                       .style("top", (event.pageY - 20) + "px");
            })
            .on("mouseout", function() {
                tooltip.style("opacity", 0);
            })
            .merge(lines)
            .attr("x1", d => d.from.x)
            .attr("y1", d => d.from.y)
            .attr("x2", d => d.to.x)
            .attr("y2", d => d.to.y)
            .attr("stroke", "#2c3e50")
            .attr("stroke-width", 2)
            .attr("marker-end", "url(#arrow)");

        lines.exit().remove();

        // Update weight labels
        const labels = svg.selectAll(".weight-label")
            .data(edges, d => `${d.from.id}-${d.to.id}`);

        labels.enter()
            .append("text")
            .attr("class", "weight-label")
            .merge(labels)
            .attr("x", d => (d.from.x + d.to.x) / 2)
            .attr("y", d => (d.from.y + d.to.y) / 2)
            .text(d => d.weight)
            .attr("fill", "#000");

        labels.exit().remove();
    }

    function removeEdge(edge) {
        // Remove edge from edges array
        edges = edges.filter(e => !(e.from.id === edge.from.id && e.to.id === edge.to.id) &&
                                 !(e.from.id === edge.to.id && e.to.id === edge.from.id));
        actionStack.push({action: 'remove', edge: edge});
        updateEdges();
        updateReport();

        // Enable or disable buttons based on edges
        if (edges.length === 0) {
            document.getElementById("start-button").disabled = true;
            document.getElementById("undo-button").disabled = true;
        }
    }

    function undoLastAction() {
        if (actionStack.length === 0) return;

        const lastAction = actionStack.pop();
        if (lastAction.action === 'add') {
            // Remove the last added edge
            edges = edges.filter(e => !(e.from.id === lastAction.edge.from.id && e.to.id === lastAction.edge.to.id) &&
                                     !(e.from.id === lastAction.edge.to.id && e.to.id === lastAction.edge.from.id));
        } else if (lastAction.action === 'remove') {
            // Re-add the removed edge
            edges.push(lastAction.edge);
        }
        updateEdges();
        updateReport();

        // Disable buttons if no edges left
        if (edges.length === 0) {
            document.getElementById("start-button").disabled = true;
            document.getElementById("undo-button").disabled = true;
        }
    }

    function startPrims() {
        const startButton = document.getElementById("start-button");
        startButton.disabled = true;
        document.getElementById("undo-button").disabled = true;

        mstEdges = [];
        visitedNodes = new Set();
        resetReport();

        if (gridData.length === 0) return;

        // Initialize with the first node
        let currentNode = gridData[0];
        visitedNodes.add(currentNode.id);
        highlightNode(currentNode);

        function animateStep() {
            // Find all possible edges from visited nodes
            let possibleEdges = edges.filter(edge =>
                (visitedNodes.has(edge.from.id) && !visitedNodes.has(edge.to.id)) ||
                (visitedNodes.has(edge.to.id) && !visitedNodes.has(edge.from.id))
            );

            if (possibleEdges.length === 0) {
                alert("Prim's Algorithm Completed.");
                updateReport();
                return;
            }

            // Find the edge with the minimum weight
            possibleEdges.sort((a, b) => a.weight - b.weight);
            const nextEdge = possibleEdges[0];
            mstEdges.push(nextEdge);
            updateReport();

            // Add the new node to visited
            const newNodeId = visitedNodes.has(nextEdge.from.id) ? nextEdge.to.id : nextEdge.from.id;
            const newNode = gridData.find(node => node.id === newNodeId);
            visitedNodes.add(newNode.id);

            // Highlight the edge and node
            highlightEdge(nextEdge);
            highlightNode(newNode);

            setTimeout(animateStep, 1000);
        }

        animateStep();
    }

    function highlightEdge(edge) {
        const svg = d3.select("#graph-container svg");
        svg.selectAll(".edge")
            .filter(d => (d.from.id === edge.from.id && d.to.id === edge.to.id) ||
                         (d.from.id === edge.to.id && d.to.id === edge.from.id))
            .classed("active", true)
            .attr("stroke", "#e74c3c")
            .attr("stroke-width", 4);
    }

    function highlightNode(node) {
        const svg = d3.select("#graph-container svg");
        svg.selectAll(".grid-cell")
            .filter(d => d.id === node.id)
            .classed("active", true)
            .attr("fill", "#e74c3c")
            .attr("stroke", "#c0392b")
            .attr("r", 18);
    }

    function updateReport() {
        document.getElementById("vertex-count").innerText = gridData.length;
        document.getElementById("edge-count").innerText = edges.length;

        // Calculate total minimum cost
        let totalCost = mstEdges.reduce((sum, edge) => sum + edge.weight, 0);
        document.getElementById("total-cost").innerText = totalCost;

        // List MST edges
        const mstList = document.getElementById("mst-edges-list");
        mstList.innerHTML = "";
        mstEdges.forEach(edge => {
            const li = document.createElement("li");
            li.innerText = `${edge.from.id} - ${edge.to.id} (Weight: ${edge.weight})`;
            mstList.appendChild(li);
        });
    }

    function resetReport() {
        document.getElementById("vertex-count").innerText = gridData.length;
        document.getElementById("edge-count").innerText = edges.length;
        document.getElementById("total-cost").innerText = 0;
        document.getElementById("mst-edges-list").innerHTML = "";
    }

    // Initialize grid on page load
    generateGrid(rows, cols);
})();