const employee = {
    name: 'Sam',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'));
  console.log(employee);
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'));
  console.log(employee);
  
  let newEmployee = deleteFromEmployeeByKey(employee, 'name');
  console.log(newEmployee);
  console.log(employee); 
  
  newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log(newEmployee);
  
