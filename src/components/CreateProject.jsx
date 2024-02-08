import {useState} from 'react';
import React from 'react';

export default function CreateProject ({handleCreate, handleHomePress}){

    const [project, setProject] = React.useState({
        title: "",
        description: "",
        dueDate: "",
        tasks: []
    });

    const inputProjectData = (value, type) => {
        setProject({
            ...project,
            [type]: value
        });
    }

    const handleInvalidParams = () =>{
        console.log("Invalid params! Please fill in all fields.");
    }

    return (
        <div>
            <div>
                <button className="bg-stone-700 text-stone-500 p-2 m-2 rounded" onClick={()=>{handleHomePress()}}>
                    <span className="text-lg text-center">Cancel</span>
                </button>
                <button className="bg-stone-700 text-stone-500 p-2 m-2 rounded" 
                    onClick={(project.title==null || project.description=="" || project.dueDate=="") ? ()=>{handleInvalidParams} : ()=>{handleCreate(project)}}
                >
                    <span className="text-lg text-center">Create</span>
                </button>
            </div>
            <div className="text-center text-3xl font-bold p-4">
                <label className="text-stone-500 text-sm">TITLE</label><br></br>
                <input type="text" value={project.title} className="p-2 m-4 rounded bg-stone-300 text-stone-500" onChange={(e)=>{inputProjectData(e.target.value, "title")}}/><br></br>
                <label className="text-stone-500 text-sm">DESCRIPTION</label><br></br>
                <input type="text" value={project.description} className="p-2 m-4 rounded bg-stone-300 text-stone-500" onChange={(e)=>{inputProjectData(e.target.value, "description")}}/><br></br>
                <label className="text-stone-500 text-sm">DUE DATE</label><br></br>
                <input type="date" value={project.dueDate} className="p-2 m-4 rounded bg-stone-300 text-stone-400 text-sm" onChange={(e)=>{inputProjectData(e.target.value, "dueDate")}}/><br></br>
            </div>
        </div>
    )
}