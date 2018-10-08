function townPopulation(input) {
    let map = new Map();
    for (let line of input) {
        let args = line.split(" <-> ");
        if (!map.has(args[0])) {
            map.set(args[0], 0);
        } map.set(args[0], map.get(args[0]) + +args[1]);
    }
    for (const [key, value] of map) {
        console.log(`${key} : ${value}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);   