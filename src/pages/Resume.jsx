import "../styles/Resume.css"

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="resume-text">Resume</h1>
      <img src="https://i.imgur.com/Wgq5h4E.jpg" width='340' height='300' alt="" />
      <p className="documents">To download my resume, click this <a href="Christopher Mems Resume.pdf" download><span>link.</span></a>
      </p>
    </div>
  );
}

export default Resume;