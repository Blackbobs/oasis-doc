import React, { useState } from "react";
import {
  successToast,
  errorToast,
  infoToast,
  warningToast,
} from "oasis-toast";

const ToastTrigger: React.FC = () => {
  // State to manage the selected toast type
  const [toastType, setToastType] = useState<string>("success");

  // Function to trigger the selected toast
  const handleTriggerToast = () => {
    const message = "This is a toast message";
    const description = "This is the toast description.";

    switch (toastType) {
      case "success":
        successToast(message, description);
        break;
      case "error":
        errorToast(message, description);
        break;
      case "info":
        infoToast(message, description);
        break;
      case "warning":
        warningToast(message, description);
        break;
      default:
        successToast(message, description);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-transparent rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Trigger a Toast</h2>

      {/* Dropdown to select toast type */}
      <div className="mb-4">
        <label htmlFor="toast-type" className="block text-sm font-medium text-gray-700">
          Select Toast Type
        </label>
        <select
          id="toast-type"
          value={toastType}
          onChange={(e) => setToastType(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900-500"
        >
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
        </select>
      </div>

      {/* Button to trigger the toast */}
      <button
        onClick={handleTriggerToast}
        className="w-full px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-slate-900 transition-all duration-500 ease-in-out focus:outline-none"
      >
        Trigger Toast
      </button>
    </div>
  );
};

export default ToastTrigger;