document.addEventListener('DOMContentLoaded', () => {

//Get access to elements
const userForm = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const submitButton = document.getElementById('submitButton');
const sideBar = document.getElementById('sidebar');


//Create event listener
submitButton.addEventListener('click', ($event) => {
    console.log('Button clicked');
    $event.preventDefault();
    sideBar.textContent = 'Welcome ' + firstNameInput.value + ' ' +
lastNameInput.value + '. It is good to see you.';
userForm.reset();

});
});
