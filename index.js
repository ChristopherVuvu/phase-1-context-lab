/* Your Code Here */
function createEmployeeRecord(array){
    return{
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(employeeRecord, dateTimeString){
    const [date, time] = dateTimeString.split(' ');
    const [hour, minute] = time.split(':');

    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour),
        minute: parseInt(minute)
    })
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateTimeString) {
    const [date, time] = this.dateTimeString.split(' ');
    const [hour, minute] = this.time.split(':');
    
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        date: this.date,
        hour: parseInt(hour),
        minute: parseInt(minute)
    })

    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = this.employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.employeeRecord.timeOutEvents.find(event => event.date === date);
    
    const timeIn = new Date(timeInEvent.date + ' ' + timeInEvent.hour);
    const timeOut = new Date(timeOutEvent.date + ' ' + timeOutEvent.hour);
    
    const hoursWorked = (timeOut - timeIn) / (1000 * 60 * 60);
    
    return hoursWorked;
}

function hoursWorkedOnDate(employeeRecord, date) {
    // find the timeIn and timeOut events for the given date
    const timeIn = this.employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = this.employeeRecord.timeOutEvents.find(event => event.date === date);
    
    // calculate the number of hours worked
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    
    return hoursWorked;
}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = this.employeeRecord.payPerHour;
    return hoursWorked * payRate;
}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = this.employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
}

function calculateTotalWages(employees) {
    let totalWages = 0;
    
    for (let i = 0; i < employees.length; i++) {
        totalWages += allWagesFor(employees[i]);
    }
    
    return totalWages;
}

function calculatePayroll(employees) {
    let totalPayroll = 0;
    
    employees.forEach(employee => {
        const wages = allWagesFor(employee);
        totalPayroll += wages;
    });
    
    return totalPayroll;
}
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

