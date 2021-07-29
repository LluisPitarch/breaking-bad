import React from 'react';

import { toast } from 'react-toastify';

const ToastMessage = ({ type, message }) => {
  toast[type](
    <>
      <div>{message}</div>
    </>
  );
};

export default ToastMessage;
