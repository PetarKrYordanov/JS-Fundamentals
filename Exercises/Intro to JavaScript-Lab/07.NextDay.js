function nextDay(year, month, day) {
    let tomorrow;
    let date = new Date(Number(year), Number(month - 1), Number(day));
    let oneDay =24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + '-' + (nextDate.getMonth()+1) + '-' + nextDate.getDate();
}

nextDay(2016, 9, 30);