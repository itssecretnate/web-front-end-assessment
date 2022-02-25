console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted!');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector('img');

picture.addEventListener('mouseover', () => alert('You look nice!'));
