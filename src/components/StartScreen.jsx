import React from 'react';

export default function StartScreen({handleCreatePress}){

    return (
        <div className="text-center text-3xl font-bold p-4">
            <img src="logo.png" alt="project app logo" className="w-24 mx-auto"/>
            <h1 className="text-stone-600">No Project Selected</h1>
            <h3 className="text-stone-400 text-sm m-4">Select a project or get started with a new one</h3>
            <button className="bg-stone-700 text-stone-500 p-2 m-4 rounded" onClick={()=>{handleCreatePress()}}>
                <span className="text-lg text-center">Create new project</span>
            </button>
        </div>
    )

}