import React from 'react';

export default function Project ({project, handleDeletePress, addTaskToProject, removeTaskFromProject}){

    const [task, setTask] = React.useState("");

    const createTask = (task) => {
        setTask(task);
    }

    const addTask = (project, task) => {
        addTaskToProject(project, task);
        setTask("");
    }

    const removeTask = (project, task) => {
        removeTaskFromProject(project, task);
    }

    return (<div>
        <div className="text-center text-3xl font-bold p-4">
            <button className="bg-stone-700 text-stone-500 p-2 m-2 rounded text-sm" onClick={()=>{handleDeletePress(project)}}>
                <span>Delete</span>
                </button>
            <h1 className="text-stone-700">{project.title}</h1>
            <h4 className="text-stone-400 text-sm m-4">{project.dueDate}</h4>
            <h4 className="text-stone-500 text-sm m-4">{project.description}</h4>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800"/>
        <div className="text-center text-3xl font-bold p-4">
            <h1 className="text-stone-700">Tasks</h1>
            <input type="text" value={task} className="p-2 m-4 rounded bg-stone-300 text-stone-500" onChange={(e)=>{createTask(e.target.value)}}/>
            <button className="bg-stone-300 text-stone-500 p-2 m-2 rounded text-sm" onClick={()=>addTask(project, task)}>
                <span>Add Task</span>
            </button>
            <div className="bg-stone-300 h-80">
                <ul>{project.tasks.length > 0 && project.tasks.map((task) => {
                    return <li>
                        <span className="text-stone-800 text-2xl m-4">{task}</span>
                        <button className='text-stone-500 text-sm hover:bg-stone-700 w-16 rounded' onClick={()=>{removeTask(project, task)}}>
                            Clear
                        </button>
                    </li>
                            
                })}</ul>
                
                {project.tasks.length === 0 && <div className="text-stone-500 text-sm">This project does not have any tasks yet.</div>}
            </div>
            
        </div>
    </div>);
}