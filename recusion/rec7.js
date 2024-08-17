function count(str1, char) {
    if (str1.length === 0) {
        return 0;
    }
    if (str1[0] == char) {
        return 1 + count(str1.slice(1), char);
    } else {
        return count(str1.slice(1), char);
    }
}
console.log(count('malafneshthmm', 'm')); 