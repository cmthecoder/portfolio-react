import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import '../styles/ProjectPreview.css'
import Button from 'react-bootstrap/Button';

const ProjectPreview = (props) => {
  return (
    <div className="project-preview">
    <img 
        src={props.project.image} width='1000px' 
        alt={props.project.title}
    />

    <section className="learn-project">
      <h3>
          {hyphenateWords(props.project.title)}
      </h3>
      <Link to={`/projects/${hyphenateWords(props.project.title)}`}>
        <Button className='learn-more' variant="dark">Learn More</Button>
      </Link>
    </section>
</div>
  )
}

export default ProjectPreview;