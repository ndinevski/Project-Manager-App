import React from 'react';

export default function SideBar({handleCreatePress, handleProjectPress, handleHomePress, projects}){

    return (
        <aside className="bg-black flex-row items-center">
            <h1 className="text-stone-300 text-3xl font-bold p-4"><button onClick={handleHomePress}>Your Projects</button></h1>
            <ul className="text-white text-center">
                {projects && projects.map(project =>{return <li key={project.title}><button className="hover:bg-stone-600 py-2 px-16 mx-auto" onClick={()=>handleProjectPress(project)}>
                    {project.title}
                </button></li>})}
            </ul>
            <button className="bg-stone-700 text-stone-500 p-2 m-4 rounded" onClick={()=>{handleCreatePress()}}><span>+ Add Project</span></button>
        </aside>
    )
}