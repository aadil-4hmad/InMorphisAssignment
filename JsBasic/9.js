function daysUntilChristmas() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    var difference_ms = christmas - today;
    var days_left = Math.ceil(difference_ms / (1000 * 60 * 60 * 24));
    return days_left;
}

var daysLeft = daysUntilChristmas();
console.log(daysLeft);