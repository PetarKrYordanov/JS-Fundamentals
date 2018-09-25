function composeTag(arr) {
    let location = arr[0];
    let altText = arr[1];

    console.log(`<img src="${location}" alt="${altText}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);