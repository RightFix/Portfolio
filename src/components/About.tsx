const skills = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Django',
  'Kivy',
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'Remix',
  'REST APIs',
  'Shell',
];

const tools = [
  'Vercel',
  'Acode',
  'Git',
  'PostgreSQL',
  'Paystack',
  'JWT',
];

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with expertise in building modern web
              applications, mobile application and API's. I love creating elegant solutions to complex problems
              and contributing to open source projects.
            </p>
            <p>
              I worked at <strong>Bluesea Mobile</strong>, building innovative solutions.
              With a focus on clean code and user experience, I continuously
              learning and adapting to new technologies.
            </p>
          </div>
          <div className="skills">
            <h3>Tech Stack</h3>
            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <h3 style={{ marginTop: '1.5rem' }}>Tools & Services</h3>
            <div className="skill-tags">
              {tools.map((tool) => (
                <span key={tool} className="skill-tag tool-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
