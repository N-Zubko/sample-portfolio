
var form = document.getElementById("form");
var i = 0;

function getValue() {
	var someId = document.getElementById();
}
function turnRed(someId) {
	someId.style.borderBottom = '3px solid red';
	
}
function turnGrey(someId) {
 	someId.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
 	
}

function compareValue(someId) {
	myValue = someId && someId.value;

	if (myValue === ''){
 		turnRed(someId);
 	} else {
 		turnGrey(someId);
 		i++;
 	}
}

function validate(event) {

 	event.preventDefault();

 	var myName = document.getElementById("name");
 	compareValue(myName);

  	var myEmail = document.getElementById("email");
 	compareValue(myEmail);

 	var mySubject = document.getElementById("subject");
 	compareValue(mySubject);

 	var myMessage = document.getElementById("message");
 	compareValue(myMessage);

 	if(i === 4) {
        msg = "Message sent";
    } else {
        msg = "Message not sent";
    }
    document.getElementById("alert").innerHTML = msg;

}


 form.addEventListener('submit', validate);
