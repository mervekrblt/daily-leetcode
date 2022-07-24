const isSubsequence = function (s, t) {
    let number = 0
    for (let i = 0; i < t.length; i++) {
        if (s[number] === t[i]) {
            number++
        }
    }
    return number === s.length
};
