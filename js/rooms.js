var meetingRooms = new XMLHttpRequest();
meetingRooms.onreadystatechange = function () {
	if(meetingRooms.readyState === 4 && meetingRooms.status === 200) {
		var rooms = JSON.parse(meetingRooms.responseText);
		var roomsHTML = '<ul class="rooms">';
		for (var i=0; i<rooms.length; i += 1) {
			if (rooms[i].available === true) {
				roomsHTML += '<li class="empty">';
			} else {
				roomsHTML += '<li class="full">';
			}
			roomsHTML += rooms[i].room;
			roomsHTML += '</li>';
		}
		roomsHTML += '</ul>';
		document.getElementById('roomList').innerHTML = roomsHTML;
	}
};
meetingRooms.open('GET', '../data/rooms.json');
meetingRooms.send();