import React from "react";
import Taskcard from "../components/Taskcard.jsx";

const Sections = ({ tasks, status, handleDelete, handleUpdate}) => {
    return (
        <section className="flex flex-col items-start w-full p-5 animate-fade-in-up">
            <h2 className={`flex flex-row justify-center items-center gap-2 text-2xl font-semibold ${status === 'todo' ? 'text-red-600' : status === 'doing' ? 'text-yellow-600' : 'text-green-600'} mb-6 animate-fade-in-up`}>
                {status === 'todo' && (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Things to Start
                    </>
                )}
                {status === 'doing' && (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-8 h-8 animate-spin">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M4.5 12a7.5 7.5 0 017.5-7.5V12h7.5a7.5 7.5 0 01-7.5 7.5"/>
                        </svg>
                        Currently In Progress
                    </>
                )}
                {status === 'done' && (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6L20.25 7.5"/>
                        </svg>
                        Completed Tasks
                    </>
                )}
            </h2>

            <div className="flex flex-col gap-4 w-full">
                {tasks.map((task, index) =>
                    task.status === status ? (
                        <Taskcard
                            key={index}
                            title={task.title}
                            description={task.description}
                            created={task.createdAt}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            index={index}
                        />
                    ) : null
                )}
            </div>
        </section>


    );
};

export default Sections;
