var checkPasswordStrength = function (password) {
    if (password === '') {
        return 'weak';
    }
    if (password.length < 12) {
        return 'weak';
    }
    return 'strong';
};
document
    .querySelector('#savepass-btn')
    .addEventListener('click', function (e) {
    var inputElement = document.querySelector('#password-input');
    var userPassword = inputElement.value;
    if (checkPasswordStrength(userPassword) === 'weak') {
        document.body.innerHTML = '<p>Příliš slabé heslo</p>';
    }
});
