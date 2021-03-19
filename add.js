function editLogin() {
    var userF = document.getElementById('username');
    userF.placeholder = 'Benutzername';

    var pwF = document.getElementById('password');
    pwF.placeholder = 'Passwort';

    var loginB = document.getElementById('bttSenden');
    loginB.textContent = 'Login';
}

editLogin();
