const returnFirstTwoDrivers = function(driverNames) {
    return driverNames.slice(0,2)
};

const returnLastTwoDrivers = function(driverNames){
    const len = driverNames.length;
    return driverNames.slice(len - 2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier}
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverNames, func) {
    return func(driverNames)
}; 