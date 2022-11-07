import { projects } from "../data/projects";
import { findProjects } from "../utilities/findProject";
import { useParams } from "react-router-dom";



const ProjectDetails = () => {
  let {projectDetails} = useParams()
  console.log('THIS PROJECT DETAILS', projectDetails)
  const project = findProjects(projectDetails)
  console.log('THIS PROJECT', project)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src="" alt="" />
      <button>GitHub Repo</button>
      <button>Deployed Site</button>
    </>
  )
}

export default ProjectDetails;