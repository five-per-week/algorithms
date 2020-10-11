const twoSum = (nums, target) => {
    const store = {};
    for(let [index, number] of nums.entries()) {
        if(store[number] !== undefined) return [store[number], index];
        store[target - number] = index;
    }
};