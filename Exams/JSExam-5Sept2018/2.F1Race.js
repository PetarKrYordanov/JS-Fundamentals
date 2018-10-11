function f1Race(input) {
    let pilots = input[0].split(' ');
    let lines = input.slice(1);

    for (const args of lines) {
        let [command, curPilot] = args.split(' ');
        let index = pilots.indexOf(curPilot);
        if (index == -1 && command !== 'Join') {
            continue;
        }
        switch (command) {
            case 'Pit':
                let temp = pilots[index + 1];
                pilots[index] = temp;
                pilots[index + 1] = curPilot;
                break;
            case 'Overtake':
                if (index == 0) c
                continue;
                let temp1 = pilots[index - 1];
                pilots[index - 1] = curPilot;
                pilots[index] = temp1;
                break;
            case 'Join':
                pilots.push(curPilot); break;
            case 'Crash':
                pilots[index] = '';
                pilots = pilots.filter(e => e !== '');
                break;
        }
    }
    console.log(pilots.join(' ~ '));
}

f1Race(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]
);

f1Race(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);