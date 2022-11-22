import "../styles/Contact.css"

const Contact = () => {
  return (
  <div className='contact animate__animated animate__fadeInUp'>
    <h1 className="contact-text">Reach out if you'd like to work with me!</h1>
    <div className='contact-info'>
      <div>
        <img src="icons8-envelope-100.png" alt="mail" />
        <a href="mailto:Christopher.mems@yahoo.com">Christopher.mems@yahoo.com</a>
      </div>
      <div>
        <img src="icons8-linkedin-96.png" width='110' alt="LinkedIn" />
        <a href="http://www.linkedin.com/in/christopher-mems">LinkedIn</a>
      </div>
      <div>
        <img src="icons8-github.svg" width='110'  alt="Github" />
        <a href="https://github.com/cmthecoder">GitHub</a>
      </div>
    </div>
  </div>
  );
}

export default Contact;