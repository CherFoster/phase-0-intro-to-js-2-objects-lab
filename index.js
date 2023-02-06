const employee = {
    name: "Sara",
    streetAddress: "MainStreet"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    newEmployee[key] = undefined;
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key] = undefined;
    return employee;
}