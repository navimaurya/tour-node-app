import axios from 'axios';
import { showAlert } from './alerts';
import { stopLoader } from './loader';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      // document.querySelector('.err').innerHTML =
      //   '<h2 class="danger mx-auto" style="color : #55c57a"> Logged in successfully..... </h2>\n <h2 class="danger ma-bt-lg mx-auto" style = "color : #55c57a" > Loading..... </h2 >';

      // stopLoader();
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 3000);
    }
  } catch (err) {
    // stopLoader();
    // document.querySelector('.load').classList.remove('loader-main');
    // document.querySelector('.err').innerHTML =
    //   '<h2 class="danger ma-bt-lg mx-auto" style="color : #ff0000"> ' +
    //   err.response.data.message +
    //   ' </h2>';
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if (res.data.status == 'success') {
      location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
