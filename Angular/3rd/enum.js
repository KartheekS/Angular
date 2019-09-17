var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 7] = "Sunday";
})(WeekDay || (WeekDay = {}));
function getday(d) {
    var p = Number(d);
    return WeekDay[p];
}
var z = getday(6); /// input the date (1 to 7) to get day of week
console.log(z);
