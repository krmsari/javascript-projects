// variables
const classForm = document.getElementById('class-form');
const classList = document.getElementById('class-list');
const gpaDisplay = document.getElementById('gpa');
let classes = [];

// functions -----
function addClass(event) {
	event.preventDefault();
	const className = document.getElementById('class-name').value;
	const creditHours = parseInt(document.getElementById('credit-hours').value);
	const grade = parseFloat(document.getElementById('grade').value);
	const gradePoints = creditHours * grade;
	const newClass = { className, creditHours, grade, gradePoints };
	classes.push(newClass);
	displayClasses();
	updateGPA();
	resetForm();
}

function displayClasses() {
	classList.innerHTML = '';
	for (let i = 0; i < classes.length; i++) {
		let row = document.createElement('tr');
		let nameCell = document.createElement('td');
		let hoursCell = document.createElement('td');
		let gradeCell = document.createElement('td');
		let pointsCell = document.createElement('td');
		let deleteCell = document.createElement('td');
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('delete-button');
		deleteButton.dataset.index = i;
		nameCell.textContent = classes[i].className;
		hoursCell.textContent = classes[i].creditHours;
		gradeCell.textContent = classes[i].grade;
		pointsCell.textContent = classes[i].gradePoints.toFixed(2);
		deleteCell.appendChild(deleteButton);
		row.appendChild(nameCell);
		row.appendChild(hoursCell);
		row.appendChild(gradeCell);
		row.appendChild(pointsCell);
		row.appendChild(deleteCell);
		classList.appendChild(row);
	}
}

function updateGPA() {
	let totalPoints = 0;
	let totalHours = 0;
	for (let i = 0; i < classes.length; i++) {
		totalPoints += classes[i].gradePoints;
		totalHours += classes[i].creditHours;
	}
	const gpa = (totalPoints / totalHours).toFixed(2);
	gpaDisplay.textContent = gpa;
}

function deleteClass(event) {
	if (event.target.classList.contains('delete-button')) {
		const index = parseInt(event.target.dataset.index);
		classes.splice(index, 1);
		displayClasses();
		updateGPA();
	}
}

function resetForm() {
	classForm.reset();
}

classForm.addEventListener('submit', addClass);
classList.addEventListener('click', deleteClass);