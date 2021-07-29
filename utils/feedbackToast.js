import { toast } from 'react-toastify';
import ToastMessage from '../components/molecules/ToastMessage';

export const showErrorNotification = (message, action, actionMessage) => {
  toast.dismiss();
  ToastMessage({
    type: 'error',
    message,
    autoClose: 5000,
  });
};
