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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toastOptions = [
    { value: "success", label: "Success", color: "bg-green-500" },
    { value: "error", label: "Error", color: "bg-red-500" },
    { value: "info", label: "Info", color: "bg-blue-500" },
    { value: "warning", label: "Warning", color: "bg-yellow-500" },
  ];

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

  const handleSelect = (value: string) => {
    setToastType(value);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-transparent rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Trigger a Toast</h2>

      {/* Dropdown to select toast type */}
      <div className="relative mb-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-4 py-2 bg-slate-950 border border-slate-900 rounded-md flex items-center justify-between hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          <span>
            {toastOptions.find((option) => option.value === toastType)?.label}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Modal */}
        {isDropdownOpen && (
          <div className="absolute z-50 mt-2 w-full bg-[#0c0a0a4d] rounded-md shadow-lg">
            {toastOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-4 py-2 cursor-pointer flex items-center space-x-2 hover:bg-slate-900 ${
                  toastType === option.value ? "bg-slate-950" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${option.color}`}
                ></div>
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button to trigger the toast */}
      <button
        onClick={handleTriggerToast}
        className="w-full px-4 py-2 bg-white text-slate-950 rounded-md focus:outline-none"
      >
        Trigger Toast
      </button>
    </div>
  );
};

export default ToastTrigger;