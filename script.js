function login() {
    const username = doocument.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password'){
        document.getElementById('loginForm').classList.remove('active');
        document.getElementById('infoForm').classList.add('active');
    } else {
        document.getElementById('loginError').innerText = 'Invalid user or password';
    }
}

function submitInfo() {
    const age = parseInt(document.getElementById('age').value);
    if (age < 18){
        document.getElementById('ageError').innerText = 'You must be 18 to proceed';
    } else {
        alert('Information submitted successfully');
    }
}