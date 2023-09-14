//Get access to elements
const userForm = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const submitButton = document.querySelector('button');
const sideBar = document.getElementById('sidebar');


//Create event listener
submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    sideBar.textContent = 'Welcome ' + firstNameInput.value + ' ' +
lastNameInput.value + '. It is good to see you.';
userForm.reset();

})
