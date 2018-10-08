function cityMarkets(sales) {
    let map = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let income = quantityPrice.split(/\s*:\s*/).reduce((a, b) => { return (a * b); });

        if (!map.has(town)) {
            map.set(town, new Map());
        }
        let oldIncome = map.get(town).get(product);
        income = oldIncome ? income += oldIncome : income;
        map.get(town).set(product, income);
    }
    for (let [town, product] of map) {
        console.log(`Town - ${town}`);
        for (let [name, income] of product) {
            console.log(`$$$${name} : ${income}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);
