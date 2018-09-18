function fruitOrVegetable(fruit) {
    if (fruit == 'banana' | fruit == 'kiwi' | fruit == 'cherry' | fruit == 'apple'
        | fruit == 'lemon' | fruit == 'grapes' | fruit == 'peach') {
        console.log('fruit');
    } else if (fruit == 'tomato' | fruit == 'cucumber' | fruit == 'pepper'
        | fruit == 'onion' | fruit == 'garlic' | fruit == 'parsley') {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

fruitOrVegetable('banana');
fruitOrVegetable('cucumber');
fruitOrVegetable('pizza');
fruitOrVegetable('apple');