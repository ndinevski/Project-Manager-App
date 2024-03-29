import React from 'react';
import StartScreen from './components/StartScreen';
import SideBar from './components/SideBar';
import CreateProject from './components/CreateProject';
import Project from './components/Project';


function App() {

  const [projects, setProjects] = React.useState([]);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [creatingProject, setCreatingProject] = React.useState(false);


  const handleCreatePress = () => {
    setCreatingProject(true);
    if(selectedProject) {
      setSelectedProject(null);
    }
  }

  const handleHomePress = () => {
    setSelectedProject(null);
    setCreatingProject(false);
    console.log(projects);
  }

  const handleCreate = (project) => {
      setProjects( (prevProjects) => {
        return [...prevProjects, project];
        });
      setCreatingProject(false);
  }

  const handleProjectPress = (project) => {
    setSelectedProject(project);
    if (creatingProject) {
      setCreatingProject(false);
    }
  }

  const handleDeletePress = (project) => {
    setProjects( (prevProjects) => {
      return prevProjects.filter((p) => p !== project);
    });
    setSelectedProject(null);
  }

  const addTaskToProject = (project, task) => {
    setProjects( (prevProjects) => 
      prevProjects.map((p) =>{
        if(p.title === project.title){
          p.tasks.push(task);
        }
        return p;
      })
    );
  }

  const removeTaskFromProject = (project, task) => {
    setProjects( (prevProjects) => 
      prevProjects.map((p) =>{
        if(p.title === project.title){
          p.tasks = p.tasks.filter((t) => t!== task);
        }
        return p;
      })
    );
  }

  return (
    <>
      <div className="">
        <SideBar className="" handleHomePress={handleHomePress} handleCreatePress={handleCreatePress} handleProjectPress={handleProjectPress} projects={projects}/>
        {(selectedProject!==null && !creatingProject) && <Project className="" removeTaskFromProject={removeTaskFromProject} addTaskToProject={addTaskToProject} handleDeletePress={handleDeletePress} project={selectedProject}/>}
        {(selectedProject===null && creatingProject) && <CreateProject className="" handleHomePress={handleHomePress} handleCreate={handleCreate}/>}
        {(selectedProject===null && !creatingProject) && <StartScreen className="" handleCreatePress={handleCreatePress}/>}
      </div>
    </>
  );
}

export default App;
