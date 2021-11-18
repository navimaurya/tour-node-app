import axios from 'axios';
import { showAlert } from './alerts';
import { stopLoader } from './loader';

export const updateSetting = async (method, url, data) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });

    if (res.data.status === 'success') {
      // document.querySelector('.err').innerHTML =
      //   '<h2 class="danger mx-auto" style="color : #55c57a"> Logged in successfully..... </h2>\n <h2 class="danger ma-bt-lg mx-auto" style = "color : #55c57a" > Loading..... </h2 >';

      document.querySelector('.load').classList.remove('loader-main');

      showAlert('success', 'Successfully Updated!');
      //   window.setTimeout(() => {
      //     location.assign('/me');
      //   }, 3000);
    }
    return res;
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
