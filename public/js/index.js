import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { updateSetting } from './updateSettings';
import { runLoader, stopLoader } from './loader';
import { bookTour } from './stripe';

//Dom
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOut = document.querySelector('.nav__el--logout');
const updateUserForm = document.querySelector('.form-user-data');
const updatePassForm = document.querySelector('.form-user-settings');
const bookBtn = document.getElementById('book-tour');

//mapbox
if (mapBox) {
  const locations = JSON.parse(document.getElementById('map').dataset.location);
  displayMap(locations);
}
// login
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    runLoader();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
    stopLoader();
  });
}

if (logOut) {
  logOut.addEventListener('click', () => {
    logout();
  });
}

// Update user name email
if (updateUserForm) {
  updateUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    runLoader();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    const res = await updateSetting('PATCH', '/api/v1/users/updateMe', form);
    location.reload();
    stopLoader();
  });
}

// Update paassword
if (updatePassForm) {
  updatePassForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    runLoader();
    const currentPassword = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSetting('PATCH', '/api/v1/users/updatepassword', {
      currentPassword,
      password,
      passwordConfirm,
    });
    stopLoader();
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

if (bookBtn) {
  bookBtn.addEventListener('click', async (e) => {
    runLoader();
    const { tourid } = e.target.dataset;
    // console.log(tourid);

    await bookTour(tourid);

    stopLoader();
  });
}
