function championship(arr) {
    let result = {};

    arr.map(line => {
        let [team, pilot, points] = line.split(' -> ');
        if (!result.hasOwnProperty(team)) {
            result[team] = {};
            result[team].total = 0;

        }
        if (!result[team].hasOwnProperty(pilot)) {
            result[team][pilot] = 0;
        }
        result[team][pilot] += +points;
        result[team].total += +points;
    });


    var props = Object.keys(result).map(function (key) {
        return { key: key, value: this[key] };
    }, result);
    props.sort(function (p1, p2) { return p2.value.total - p1.value.total; });
    var topThree = props.slice(0, 3);

    var topThreeObj = props.slice(0, 3).reduce(function (obj, prop) {
        obj[prop.key] = prop.value;
        return obj;
    }, {});

    for (const key in topThreeObj) {
        console.log(`${key}: ${topThreeObj[key].total}`);

        let pilots = Object.keys(topThreeObj[key])
            .filter(e => e != 'total')
            .sort((a, b) => {
                // console.log(topThreeObj[key][b]);
                // console.log(topThreeObj[key][a]);
                return topThreeObj[key][b] - topThreeObj[key][a];
            });
        for (const pilot of pilots) {
            console.log(`-- ${pilot} -> ${topThreeObj[key][pilot]}`);
        }
    }
}

championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Ferrari -> Sebastian Vettel -> 22",
    "gOSOSO -> OIAHDO -> 23",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "gOSOSO -> asfasf -> 32",

    "Red Bull -> Daniel Ricciardo -> 4"]
);

championship([
    'Ferrari -> Kimi Raikonnen -> 25'
    , 'Ferrari -> Sebastian Vettel -> 18'
    , 'Mercedes -> Lewis Hamilton -> 10'
    , 'Mercedes -> Valteri Bottas -> 8'
    , 'Red Bull -> Max Verstapen -> 6'
    , 'Red Bull -> Daniel Ricciardo -> 4'
    , 'Mercedes -> Lewis Hamilton -> 25'
    , 'Mercedes -> Valteri Bottas -> 18'
    , 'Haas -> Romain Grosjean -> 25'
    , 'Haas -> Kevin Magnussen -> 25']);