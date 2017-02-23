var employeeStatus = new XMLHttpRequest();
employeeStatus.onreadystatechange = function () {
  if(employeeStatus.readyState === 4 && employeeStatus.status === 200) {
    var employees = JSON.parse(employeeStatus.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
employeeStatus.open('GET', '../data/employees.json');
employeeStatus.send();
