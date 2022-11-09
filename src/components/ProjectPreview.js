import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return (
    <div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <a href={`/projects/${hyphenateWords(props.title)}`}>
          <h3>
              {hyphenateWords(props.title)}
          </h3>
        </a>
        <Link to={`/projects/${hyphenateWords(props.title)}`}>
					<button>
              Learn more
          </button>
        </Link>
    </section>
</div>
  )
}

export default ProjectPreview;