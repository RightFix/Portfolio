export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>Interested in working together? Let's connect!</p>
          <div className="contact-links">
            <a
              href="mailto:righteousnessude@gmail.com"
              className="btn btn-primary"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href="https://github.com/RightFix"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}