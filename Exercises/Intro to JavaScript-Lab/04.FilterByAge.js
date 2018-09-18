function filterByAge(minAge,name1,age1,name2,age2) {
    if(minAge<=age1){
        let person1 = {name:name1, age:age1};
        console.log(person1);
    }
    if (minAge<= age2){
        let person = {name:name2, age:age2};
        console.log(person);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);