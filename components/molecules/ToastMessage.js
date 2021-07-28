import React from 'react';

import { toast } from 'react-toastify';

const ToastMessage = ({ type, message, autoClose }) => {
  toast[type](
    <>
      <div>{message}</div>
    </>
  );
};

export default ToastMessage;
