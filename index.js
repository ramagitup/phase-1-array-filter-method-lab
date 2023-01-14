// Code your solution here
function findMatching(params, str) {
    return params.filter((n) => {
        return (n == str.toUpperCase() || n == str.toLowerCase() || n == str)
    });
}

function fuzzyMatch(params, char) {
    return params.filter((n) => {
        return (n[0] == char[0]);
    })
}
function matchName(params, namee) {
    let x = [{}]
    let i = 0;
    for (const user of params) {
        if (user.name == namee) {
            x[i] = (user);
            i++;
        }
    }
    return x;
}