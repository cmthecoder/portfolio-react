import "../styles/Resume.css"

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="resume-text">Resume</h1>
      <a href="Christopher Mems Resume.pdf" download><img src="https://i.imgur.com/Wgq5h4E.jpg" width='340' height='300' alt="" /></a>
      <p className="documents">To download my resume, click on the image.</p>
    </div>
  );
}

export default Resume;