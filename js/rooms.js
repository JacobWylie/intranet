var meetingRooms = new XMLHttpRequest();
meetingRooms.onreadystatechange = function () {
	if(meetingRooms.readyState === 4 && meetingRooms.status === 200) {
		var rooms = JSON.parse(meetingRooms.responseText);
		var statusHTML = '<ul class="rooms">';
		for (var i=0; i<rooms.length; i += 1) {
			if (rooms[i].available === true) {
				statusHTML += '<li class="empty">';
			} else {
				statusHTML += '<li class="full">';
			}
			statusHTML += rooms[i].room;
			statusHTML += '</li>';
		}
		statusHTML += '</ul>';
		document.getElementById('roomList').innerHTML = statusHTML;
	}
};
meetingRooms.open('GET', '../data/rooms.json');
meetingRooms.send();