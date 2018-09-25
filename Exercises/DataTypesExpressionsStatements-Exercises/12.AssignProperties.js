function assignProperties(arr) {
    let person = {};

    for (let i = 1; i < arr.length; i += 2) {
        person[arr[i - 1]] = arr[i];
    }
    console.log(person);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
