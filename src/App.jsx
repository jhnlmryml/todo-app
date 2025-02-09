import React, { useEffect, useState } from "react";
import Sections from "./sections/Sections.jsx";
import { elements } from "./constants/index.js";
import TaskForm from "./sections/TaskForm.jsx";
import ConfirmModal from "./components/ConfirmModal.jsx";

const oldTask = localStorage.getItem("tasks");

const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
    const [editableTask, setEditableTask] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        setFormVisible(false);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleDelete = (taskIndex) => {
        setTaskToDelete(taskIndex); // Set the task to delete
        setModalOpen(true); // Open the confirmation modal
    };

    const confirmDelete = () => {
        const newTasks = tasks.filter((_, index) => index !== taskToDelete);
        setTasks(newTasks);
        setTaskToDelete(null); // Clear the selected task
        setModalOpen(false); // Close the modal
    };

    const handleCancelDelete = () => {
        setTaskToDelete(null); // Clear the selected task
        setModalOpen(false); // Close the modal
    };

    const handleUpdate = (index) => {
        setEditableTask({ ...tasks[index], index });
        setFormVisible(true); // Show the task form
    };

    const handleEditSubmit = (updatedTask) => {
        const newTasks = [...tasks];
        newTasks[updatedTask.index] = updatedTask;
        setTasks(newTasks);
        setEditableTask(null); // Reset the editable task
        setFormVisible(false); // Hide the task form
    };

    const handleAddNewTask = () => {
        setEditableTask(null); // Clear the editable task
        setFormVisible(true); // Show the task form

    };

    return (
        <>
            <main className="flex justify-center items-center flex-col">
                <button
                    onClick={handleAddNewTask}
                    className={`transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up mt-20 mb-10 bg-blue-500 text-white px-4 py-2 rounded-md mb-5 hover:bg-blue-600 ${formVisible ? 'hidden' : 'block'}`}
                >
                    Add New Task
                </button>
                {formVisible && (
                    <TaskForm
                        setTasks={setTasks}
                        editableTask={editableTask}
                        handleEditSubmit={handleEditSubmit}
                        onCancel={() => setFormVisible(false)}
                    />
                )}
                <h1 className="text-4xl font-bold text-gray-800 mb-5 animate-fade-in-up tracking-wide">
                    My Todo List
                </h1>
                <div className="flex flex-col md:flex-row items-start md:justify-evenly w-3/4 p-5 gap-8 mx-auto">
                    {elements.map(({ id, status }) => (
                        <Sections
                            key={id}
                            tasks={tasks}
                            status={status}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                    ))}
                </div>
            </main>

            {/* Confirmation Modal */}
            <ConfirmModal
                isOpen={modalOpen}
                onClose={handleCancelDelete}
                onConfirm={confirmDelete}
                message="Are you sure you want to delete this task?" // Optional
            />
        </>
    );
};

export default App;
