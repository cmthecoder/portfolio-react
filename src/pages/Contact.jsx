import "../styles/Contact.css"

const Contact = () => {
  return (
  <div className='contact animate__animated animate__fadeInUp'>
    <h1 className="contact-text">Reach out if you'd like to work with me!</h1>
    <div className='contact-info'>
      <div>
        <a href="mailto:Christopher.mems@yahoo.com"><img src="icons8-envelope-100.png" alt="mail" /></a>
      </div>
      <div>
        <a href="http://www.linkedin.com/in/christopher-mems"><img src="icons8-linkedin-96.png" width='110' alt="LinkedIn" /></a>
      </div>
      <div>
        <a href="https://twitter.com/chris_mems"><img src='icons8-twitter.svg' width='110'  alt="Twitter" /></a>
      </div>
      <div>
        <a href="https://github.com/cmthecoder"><img src="icons8-github.svg" width='110'  alt="Github" /></a>
      </div>
    </div>
  </div>
  );
}

export default Contact;