function solution(n, computers) {
    const networks = [];
    const stack = computers.map((_, i) => i);
    let visited = new Set();

    while (stack.length) {
        const cur = stack.pop();

        if (visited.has(cur)) {
            continue;
        }

        const network = visit(cur, computers, new Set());
        visited = new Set([...visited, ...network]);
        networks.push(network);
    }

    return networks.length;
}

function visit(i, computers, visited) {
    visited.add(i);
    for (let [j, computer] of computers.entries()) {
        if (!visited.has(j) && computers[i][j]) {
            visit(j, computers, visited);
        }
    }
    return visited;
}

module.exports = solution;
