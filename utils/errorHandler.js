import { showErrorNotification } from './feedbackToast';

export const errorHandler = (error) => {
  console.error(error?.response);

  showErrorNotification(
    `Something went wrong please reload the App and try it again.`
  );
};
