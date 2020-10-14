function encryption(s) {
    const floor = Math.floor(Math.sqrt(s.length));
    const ceil = Math.ceil(Math.sqrt(s.length));
    let candidates = [];
    for(let i = 0; i < s.length; i += ceil) {
        candidates.push(s.substring(i, i+ ceil))
    }
    let result = '';
    for(let i = 0; i < candidates[0].length; i++) {
        for(let j = 0; j < candidates.length; j++) {
            result += candidates[j][i] ? candidates[j][i] : '';
        }
        result += ' ';
    }
    return result
}