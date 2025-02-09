import React from "react";

const Taskcard = ({ title, description, created, handleDelete, handleUpdate, index }) => {

    const formattedDate = new Date(created).toLocaleString();
    const truncatedDescription = description.length > 50
        ? description.substring(0, 50) + "..."
        : description;
    return (
        <article className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-sm text-gray-600">{truncatedDescription}</p>
                <p className="text-xs text-gray-400">Created: {formattedDate}</p>
            </div>
            <div className="flex gap-3 mt-3">
                <button onClick={() => handleUpdate(index)} className="text-blue-500 hover:underline">
                    Update
                </button>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:underline">
                    Delete
                </button>
            </div>
        </article>
    );
};

export default Taskcard;
