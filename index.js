// Code your solution here
function findMatching(names, checkName) {
    return names.filter(function (name) {
        return name.toLowerCase() == checkName.toLowerCase();
    });
}

function fuzzyMatch(names, checkName) {
    return names.filter(function (name) {
        return name.slice(0, checkName.length) == checkName;
    });
}

function matchName(names, checkName) {
    return names.filter(function (driver) {
        return driver.name == checkName;
    });
}