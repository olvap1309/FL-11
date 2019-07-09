let email, password, passwordConfirm;
let change = false;
const passwordLength = 5;
const emailLength = 6;

email = prompt('Enter your email please:');

if (!email) {
    alert('Canceled.');
}

if (email.length < emailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols.');
} else {
    if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
        password = prompt('Enter your password please:');
    } else {
        alert('I don\'t know you.');
    }
}

if (!password) {
    alert('Canceled.');
}

if (email === 'user@gmail.com' && password === 'UserPass' ||
    email === 'admin@gmail.com' && password === 'AdminPass') {
    change = confirm('Do you want to change your password?');
} else {
    alert('Wrong password.');
}

if (!change) {
    alert('You have failed the change.');
} else {
    password = prompt('Enter your old password please:');
    if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        password = prompt('Enter your new password please:');
        if (password.length < passwordLength) {
            alert('It\'s too short password. Sorry.');
        } else {
            passwordConfirm = prompt('Enter your new password again please:');
            if (password !== passwordConfirm) {
                alert('You wrote the wrong password.');
            } else {
                alert('You have successfully changed your password.');
            }
        }
    } else {
        alert('Wrong password.');
    }
}





