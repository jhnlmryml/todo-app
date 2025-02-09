import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null; // Do not render anything if the modal is not open

    return (
        <div className="z-50 fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <p className="text-lg font-medium text-gray-800 mb-4">
                    {message || "Are you sure you want to delete this task?"}
                </p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
