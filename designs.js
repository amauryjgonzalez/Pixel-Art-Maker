//Watched various youtube videos and asked Udacity Mentors for guidance

// Variables for button, color, form, and table
let penColor = document.querySelector('#colorPicker');
let table = document.querySelector('#pixelCanvas');
//Variable for the created submitbutton id int H
let submitButton = document.querySelector('#submitButton'); 

// Variables for height and width of box
let height = document.querySelector('#inputHeight').value;
let width = document.querySelector('#inputWidth').value;
makeGrid(height, width);


//Creates Table Function
//Watched various youtube videos and asked Udacity Mentors
function makeGrid(height, width) {

	for(var x = 0; x < height; x++){
		let row = table.insertRow(x); 
		for(var y = 0; y < width; y++){
			let cell = row.insertCell(y);
			cell.addEventListener('click', function(event){
				event.preventDefault();
				cell.style.background = penColor.value; 
			})
		}
	}


}
// Creates event on the submit button to save input
submitButton.addEventListener('click', function(event){
	event.preventDefault();
	let height = document.getElementById('inputHeight').value;
	let width = document.getElementById('inputWidth').value;
	table.firstElementChild.remove();
	makeGrid(height, width);
});



//Changes h1 box background color in set intervals 
//(Got this from codepen which was open source & made a few modifications)
var x = document.getElementById('heading');
var backColor = ["blue", "green", "yellow", "red"];
setInterval(function() {
   for(let y = 0; y < 4; y++){
    x.style.backgroundColor = backColor[Math.floor(Math.random() * 3)];  
  }
}, 300) ;



