import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51GwkAxJVkLdgMbrcGZtJIxg9m7gs8xEW4oF5N61MfLhZMqZIZnkgGOFoXMB23cvhuKkKVCr186JK2UKKCUzB2baN00M35SCLel'
  );
  try {
    const session = await axios(`/api/v1/bookings/checkout-Session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
