const checkPasswordStrength = (password: string): string => {
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
  .addEventListener('click', (e) => {
    const inputElement: HTMLInputElement = document.querySelector('#password-input');
    const userPassword = inputElement.value;
    if (checkPasswordStrength(userPassword) === 'weak') {
      document.body.innerHTML = '<p>Příliš slabé heslo</p>';
    } else {
      document.body.innerHTML = '<p>Heslo uloženo</p>';
    }
  });
