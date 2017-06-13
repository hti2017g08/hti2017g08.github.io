function currentDate(){
		var date = new Date();
		   var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";

			var d = new Date();
		
		var day = date.getDate();
		
		var m = month[d.getMonth()+1];
		var year = date.getFullYear();
		
			document.getElementById("date").innerHTML = day + " " + m + " " + year + " ";
			
		
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function open(){
	var drop = document.getElementById("dropdown");
	var tabs = document.getElementById("tabs");
	var x = false;
	drop.addEventListener("click", opening);
						
	function opening(){
		if(x == false){
			tabs.style.display = "block";
			x = true;
		} else {
			tabs.style.display = "none";
			x = false;
		}
	}	
}

function getTemp(){
			
			document.getElementById("cTemp").innerHTML = ":)";
			var temp = get("currentTemperature", "current_temperature");
		document.getElementById("cTemp").innerHTML = temp; 
}