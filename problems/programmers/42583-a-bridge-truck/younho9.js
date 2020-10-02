function solution(birdge_length, weight, truck_weights) {
    const onBridge = Array.from({ length: birdge_length }, () => null);
    const overBridge = [];
    let onBridgeWeight = 0;
    let time = 0;

    let waitingTruckIndex = 0;
    while (overBridge.length !== truck_weights.length) {
        const truck = onBridge[time];
        time++;

        if (truck) {
            overBridge.push(truck);
            onBridgeWeight -= truck;
        }

        if (
            onBridgeWeight + truck_weights[waitingTruckIndex] > weight ||
            waitingTruckIndex >= truck_weights.length
        ) {
            onBridge[time + birdge_length - 1] = null;
            continue;
        }

        onBridge[time + birdge_length - 1] = truck_weights[waitingTruckIndex];
        onBridgeWeight += truck_weights[waitingTruckIndex];
        waitingTruckIndex++;
    }

    return time;
}

module.exports = solution;
