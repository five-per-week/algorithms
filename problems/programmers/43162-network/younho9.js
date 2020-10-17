function solution(n, computers) {
    const networks = [];
    let visited = new Set();

    computers.forEach((_, i) => {
        if (visited.has(i)) {
            return;
        }
        const network = visit(i, computers, new Set());
        visited = new Set([...visited, ...network]);
        networks.push(network);
    });

    return networks.length;
}

function visit(i, computers, connected) {
    connected.add(i);
    computers[i].forEach((_, j) => {
        if (!connected.has(j) && computers[i][j]) {
            visit(j, computers, connected);
        }
    });

    return connected;
}

module.exports = solution;
