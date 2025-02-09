import React, { useState, useEffect } from "react";

const TaskForm = ({ setTasks, editableTask, handleEditSubmit, onCancel }) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "",
        createdAt: new Date(),
    });
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    useEffect(() => {
        if (editableTask) {
            setForm({
                ...editableTask,
            });
        }
    }, [editableTask]);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editableTask) {
            handleEditSubmit(form);
        } else {
            setTasks((prev) => [...prev, { ...form, createdAt: new Date() }]);
        }
        resetForm();
    };

    const resetForm = () => {
        setForm({
            title: "",
            description: "",
            status: "",
            createdAt: new Date(),
        });
    };

    const handleClose = () => {
        if (form.title || form.description || form.status) {
            setShowConfirmDialog(true);
        } else {
            onCancel();
            resetForm();
        }
    };

    const handleDiscard = () => {
        setShowConfirmDialog(false);
        resetForm();
        onCancel();
    };

    return (
        <section className="z-30 flex items-center justify-center w-full p-5 mt-5">
            <form
                className="flex flex-col gap-5 w-full max-w-xl bg-white shadow-md p-6 rounded-lg animate-fade-in-down"
                onSubmit={handleSubmit}
            >
                <h3 className="text-lg font-semibold">
                    {editableTask ? "Update Task" : "Add New Task"}
                </h3>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Title"
                    value={form.title}
                    name="title"
                    required
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    rows={5}
                    value={form.description}
                    name="description"
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    value={form.status}
                    required
                    name="status"
                >
                    <option disabled value="">
                        Status
                    </option>
                    <option value="todo">To Start</option>
                    <option value="doing">In Progress</option>
                    <option value="done">Completed Tasks</option>
                </select>
                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        {editableTask ? "Update Task" : "Add Task"}
                    </button>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>

            {/* Confirmation Dialog */}
            {showConfirmDialog && (
                <div className="fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <p className="text-lg font-medium text-gray-800 mb-4">
                            You have unsaved changes. Are you sure you want to discard them?
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowConfirmDialog(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDiscard}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Discard
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TaskForm;
