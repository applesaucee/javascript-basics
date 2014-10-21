// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict"; //strict version of js since js isn't very strict to begin with

var person = {
	fName: 'Tamanh',
	lName: 'Nguyen',
	email: 'tamvn@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

//NEVER EVER use alert!
//alert(person.getFullName());
console.log('running the getFullName function on person object');
console.log(person.getFullName());

console.log('looping through all properties of the person object');
//show all properties of the person object
for (var prop in person) {
	console.log(person[prop]); // => value of current property
}

//create a new img element
//not part of source of your page. you are not modifying html source code, you are dynamically modifying the page based on this
var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of my awesome, amazing dog';

//add this element to the top of the body
// insertBefore takes two parameters where the first param is what you want to insert, and the second is where you would like it to appear before
document.body.insertBefore(elem, document.body.firstChild);

//create a new img element
var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture of a cool cat';

//add this to the body of the page
//append will add to the end of your page
document.body.appendChild(kitty);

//note that this is not best practice if you just want a picture. js is for adding dynamic content (content that changes with the user)
//never ever create a page with js!

//function for onPuppyClick
function onPuppyClick() {
	//alert('you clicked my puppy!');
	document.getElementById('bark').play();
} //onPuppyClick()

//good practice to note start and end of a function

//selecting the puppy-pic element
var pup = document.getElementById('puppy-pic');

//new way for up-to-date browsers
if (pup.addEventListener) {
	pup.addEventListener('click', onPuppyClick);
}
//old way for the people stragglin' 
else if (pup.attachEvent) {
	pup.attachEvent('click', onPuppyClick);
}

document.addEventListener('DOMContentLoaded', function(){
 //add event listeners for elements
 //manipulate the DOM
 	alert("The DOM is ready!");
});