function dnaEx(arr) {
    let genes = {};
    let line = arr.shift();
    let pattern = /^([a-z!@#$?]+)=([1-9][0-9]{0,5})--([1-9][0-9]{0,5})<<([a-zA-Z]+)$/;
    let regex = RegExp(pattern, 'g');
    while (line != 'Stop!') {
        let result = pattern.exec(line);
        if (result !== null) {
            let geneName = result[1].replace(/[\!\@\#\$\?]/g, '');
            if (geneName.length == parseInt(result[2])) {
                let organism = result[4];
                let count = parseInt(result[3]);

                if (!genes.hasOwnProperty(organism)) {
                    genes[organism] = 0;
                }
                genes[organism] += count;
            }
        }
        line = arr.shift();
    }

    let keys = Object.keys(genes).sort(function (a, b) {
        return genes[b] - genes[a];
    });

    for (const key of keys) {
        console.log(`${key} has genome size of ${genes[key]}`);
    }
}

dnaEx(['!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!'
]);

dnaEx([
    '=12<<cat',
    '!vi@rus?=2--142',
    '?!cur##viba@cter!!=11--800<<cat',
    '!fre?esia#=7--450<<mouse',
    '@pa!rcuba@cteria$=13--351<<mouse',
    '!richel#ia??=8--900<<human',
    'Stop!'
]);

dnaEx(['!@ру?би#=4--57<<polecat',
    '?do?@#ri#=4--89<<polecat',
    '=12<<cat',
    '!vi@rus?=2--142',
    '@pa!rcu>ba@cteria$=13--234<<mouse',
    '?!cur##viba@cter!!=11--680<<cat',
    'Stop!'
]);