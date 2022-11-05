import { projects } from "../data/projects";

const ProjectDetals = () => {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src="" alt="" />
      <button>GitHub Repo</button>
      <button>Deployed Site</button>
      <h1>{projects[1].title}</h1>
      <p>{projects[1].description}</p>
      <img src="" alt="" />
      <button>GitHub Repo</button>
      <button>Deployed Site</button><h1>{projects[2].title}</h1>
      <p>{projects[2].description}</p>
      <img src="" alt="" />
      <button>GitHub Repo</button>
      <button>Deployed Site</button>
    </>
  )
}

export default ProjectDetals;