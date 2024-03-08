let employeeRecord
function createEmployeeRecord(employeeInfo){
    var newRecord = {
        firstName : employeeInfo[0],
        familyName : employeeInfo[1],
        title : employeeInfo[2], 
        payPerHour : employeeInfo[3],
        timeInEvents : [], 
        timeOutEvents : []
    }
    return newRecord
}


let employeeRecords = []
function createEmployeeRecords(recordArray){
    employeeRecords = []
    for(let i of recordArray){
        employeeRecords.push(createEmployeeRecord(i))
    }
return employeeRecords
}

 
function createTimeInEvent(timeStamp){
    let stamp = timeStamp.split(' ')
    this.timeInEvents.push({
        type : "TimeIn",
        date : stamp[0],
        hour : parseInt(stamp[1])
    })
    return this;   
}

function createTimeOutEvent(timeStamp){
    let stamp = timeStamp.split(' ')
    this.timeOutEvents.push({
        type:`TimeOut`,
        date : stamp[0],
        hour : parseInt(stamp[1])
    })
    return this;   
}

function hoursWorkedOnDate(enteredDate){
    let clockIn = this.timeInEvents.find(event => event.date === enteredDate)
    let clockOut = this.timeOutEvents.find(event => event.date === enteredDate)
    return (clockOut.hour-clockIn.hour)/100

   }


function wagesEarnedOnDate(enteredDate){
    return hoursWorkedOnDate.call(this, enteredDate) * (this.payPerHour)
}


    const allWagesFor = function () {
            const eligibleDates = this.timeInEvents.map(function (e) {
                return e.date
            })
        
            const payable = eligibleDates.reduce(function (memo, d) {
                return memo + wagesEarnedOnDate.call(this, d)
            }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
        
            return payable
        }

function calculatePayroll(array){
    console.log(array)
    let totalPayrollCost = 0
    for(let index in array){
        let indexPersonsWages = allWagesFor.call(array[index])
        totalPayrollCost = (totalPayrollCost + indexPersonsWages)
    }
 return totalPayrollCost
}

const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ];
  
  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ];
  
  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ];
  
  let employeeRecords2 = createEmployeeRecords(csvDataEmployees);
  employeeRecords2.forEach(function (rec) {
    let timesInRecordRow = csvTimesIn.find(function (row) {
      return rec.firstName === row[0];
    });
  
    let timesOutRecordRow = csvTimesOut.find(function (row) {
      return rec.firstName === row[0];
    });
  
    timesInRecordRow[1].forEach(function(timeInStamp){
      createTimeInEvent.call(rec, timeInStamp);
    });
  
    timesOutRecordRow[1].forEach(function(timeOutStamp){
      createTimeOutEvent.call(rec, timeOutStamp);
    });
  });
  
  console.log(calculatePayroll(employeeRecords)); // Output: 12480
    



function findEmployeeByFirstName(srcArray, firstName){
    let index = srcArray.findIndex(empObject => 
        empObject.firstName === firstName)
        return srcArray[index]}
        

          

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// 

