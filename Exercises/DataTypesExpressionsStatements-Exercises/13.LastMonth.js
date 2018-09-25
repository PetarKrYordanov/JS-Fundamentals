function lastMonth([days, month, year]) {
    function daysInMonth (month, year) {
        return new Date(year, month-1, 0).getDate();
    }

    console.log(daysInMonth(month, year));
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);