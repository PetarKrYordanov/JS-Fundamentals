function kompot(input) {
    let peachWeight = 0.14 * 2.5;
    let plumWeight = Number(0.02 * 10);
    let cherryWeight = 0.009 * 25;

    let [cherry, plum, peach, rakia] = [0.0, 0.0, 0.0, 0.0];

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(/\s* | ,/);

        switch (args[0].toLowerCase()) {
            case 'peach': peach += Number(args[1]); break;
            case 'cherry': cherry += Number(args[1]); break;
            case 'plum': plum += Number(args[1]); break;
            default:
                rakia += Number(args[1]); break;
        }
    }
    let cherryKompots = parseInt(cherry / 0.009 / 25);
    let peachKompots = parseInt((peach / 0.14 / 2.5));
    let plumKompots = parseInt(plum / 10 / 0.02);

    console.log('Cherry kompots: ' + cherryKompots);
    console.log('Peach kompots: ' + peachKompots);
    console.log('Plum kompots: ' + plumKompots);
    console.log(`Rakiya liters: ${(rakia * 0.2).toFixed(2)}`);
}

kompot(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);

kompot(['apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65'
    , 'watermelon 20.54'
]
);