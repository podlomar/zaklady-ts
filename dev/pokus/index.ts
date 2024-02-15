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

  const handleClick = (event: Event) => {
    document.body.innerHTML = `Kliknuto na pozici x: ${event.clientX}, y: ${event.clientY}`;
  };


const submitForm = (event: Event): void => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  console.log(formData);
};
