var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="bulleted">';
		for (var i=0; i<employees.length; i+=1) {
			employees[i];
		}
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();