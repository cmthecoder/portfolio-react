import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  console.log(props)
  return (
    <div>
    <img 
        src={props.project.image} 
        alt={props.project.title}
    />

    <section>
        <a href={`/projects/${hyphenateWords(props.project.title)}`}>
          <h3>
              {hyphenateWords(props.project.title)}
          </h3>
        </a>
        <Link to={`/projects/${hyphenateWords(props.project.title)}`}>
					<button>
              Learn more
          </button>
        </Link>
    </section>
</div>
  )
}

export default ProjectPreview;