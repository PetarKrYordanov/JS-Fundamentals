function countWordsWithMaps([input]) {
    let map = new Map();
    let words = input.toLowerCase().split(/[\W]+/).filter(e => e != '').forEach(e => {
        if (!map.has(e)) {
            map.set(e, 0);
        }
        map.set(e, map.get(e) + 1);
    });

    let sortedKeys = Array.from(map.keys()).sort();
    for (let key of sortedKeys) {
        console.log(`'${key}' -> ${map.get(key)} times`);
    }
}
countWordsWithMaps(['Far too slow, you\'re far too slow.']);
countWordsWithMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);