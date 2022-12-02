import { findProjects } from "../utilities/findProject";
import { useParams } from "react-router-dom";
import "../styles/ProjectDetails.css"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const ProjectDetails = () => {
  let {projectDetails} = useParams()
  const project = findProjects(projectDetails)
  return (
    <div className='project-details'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} width='1000px' alt="" />
      <a href={project.repositoryLink}><Button className='repo-link' variant="dark">GitHub Repo</Button></a>
      <a href={project.deploymentLink}><Button className='deployed-link' variant="dark">Deployed Site</Button></a>
      <Link to='/projects'><Button className='return-link' variant="dark">Back</Button></Link>
      {/* <a href="/projects"><Button className='return-link' variant="dark">Back</Button></a> */}
    </div>
  )
}



export default ProjectDetails;