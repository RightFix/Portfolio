const username = 'RightFix';

const projectsData = [
    {
        name: 'BaseHospital',
        description: 'My first project using remix',
        language: 'CSS',
        html_url: 'https://github.com/RightFix/BaseHospital',
        homepage: 'https://base-hospital.vercel.app'
    },
    {
        name: 'Birthday_wish',
        description: 'Birthday wish application',
        language: 'Python',
        html_url: 'https://github.com/RightFix/Birthday_wish',
        homepage: null
    },
    {
        name: 'Calc',
        description: 'Simple arithmetic calculator',
        language: 'Python',
        html_url: 'https://github.com/RightFix/Calc',
        homepage: null
    },
    {
        name: 'calculator',
        description: 'JavaScript calculator',
        language: 'JavaScript',
        html_url: 'https://github.com/RightFix/calculator',
        homepage: 'https://calculator-smoky-two.vercel.app'
    },
    {
        name: 'Casimir_Chatbot',
        description: 'AI Chatbot project',
        language: 'Python',
        html_url: 'https://github.com/RightFix/Casimir_Chatbot',
        homepage: null
    },
    {
        name: 'ChristianaUdeResume',
        description: 'Resume website',
        language: 'HTML',
        html_url: 'https://github.com/RightFix/ChristianaUdeResume',
        homepage: 'https://christiana-ude-resume.vercel.app'
    },
    {
        name: 'Danny-Graphics',
        description: 'Graphics portfolio',
        language: 'CSS',
        html_url: 'https://github.com/RightFix/Danny-Graphics',
        homepage: 'https://dannygraphics.vercel.app'
    },
    {
        name: 'Dice-App',
        description: 'Dice rolling application',
        language: 'JavaScript',
        html_url: 'https://github.com/RightFix/Dice-App',
        homepage: null
    },
    {
        name: 'Arithmetic-progression-and-geometric-progression-calculator-',
        description: 'Arithmetic and Geometric calculator',
        language: 'HTML',
        html_url: 'https://github.com/RightFix/Arithmetic-progression-and-geometric-progression-calculator-',
        homepage: null
    },
    {
        name: 'Portfolio-1',
        description: 'Portfolio website',
        language: 'HTML',
        html_url: 'https://github.com/RightFix/Portfolio-1',
        homepage: null
    }
];

function displayProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.name}</h3>
            <p>${project.description || 'No description available'}</p>
            <span class="project-language">${project.language || 'Unknown'}</span>
            <div class="project-links">
                <a href="${project.html_url}" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
                ${project.homepage ? `<a href="${project.homepage}" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live
                </a>` : ''}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    displayProjects(projectsData);

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
