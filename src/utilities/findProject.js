import { projects } from "../data/projects"
import { hyphenateWords } from "../utilities/hyphenateWords"

function findProjects(str){
  str = hyphenateWords(str)
  const projectData = projects.find(project => hyphenateWords(project.title) === str);
  console.log('THIS IS PROJECT DATA', projectData)
  return projectData
}


console.log(findProjects('The Flyers Club'))

export {findProjects}