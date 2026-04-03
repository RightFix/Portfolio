const username = 'RightFix';

const projectsData = [
    {
        name: 'BaseHospital',
        description: 'Hospital management web app built with Remix',
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
        description: 'JavaScript calculator web app',
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
        description: 'Graphics portfolio website',
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
        name: 'school_manager',
        description: 'Django-based school management system',
        language: 'Python',
        html_url: 'https://github.com/RightFix/Arithmetic-progression-and-geometric-progression-calculator-',
        homepage: null
    },
    {
        name: 'Calc-Kivy',
        description: 'Calculator app built with Kivy',
        language: 'Python',
        html_url: 'https://github.com/RightFix/Arithmetic-progression-and-geometric-progression-calculator-',
        homepage: null
    },
    {
        name: 'Password-Generator-Kivy',
        description: 'Password generator built with Kivy',
        language: 'Python',
        html_url: 'https://github.com/RightFix/Arithmetic-progression-and-geometric-progression-calculator-',
        homepage: null
    },
    {
        name: 'jupyter-reader-plugin',
        description: 'Read-only Jupyter notebook viewer plugin for Acode mobile editor',
        language: 'JavaScript',
        html_url: 'https://github.com/RightFix/jupyter-reader-plugin',
        homepage: null
    },
    {
        name: 'jupyter-acode-plugin',
        description: 'Jupyter Notebook extension for Acode - Read, edit and interact with .ipynb files',
        language: 'JavaScript',
        html_url: 'https://github.com/RightFix/jupyter-acode-plugin',
        homepage: null
    },
    {
        name: 'ngrok-acode-plugin',
        description: 'ngrok integration plugin for Acode mobile editor',
        language: 'JavaScript',
        html_url: 'https://github.com/RightFix/ngrok-acode-plugin',
        homepage: null
    },
    {
        name: 'Portfolio-1',
        description: 'Portfolio website',
        language: 'HTML',
        html_url: 'https://github.com/RightFix/Portfolio-1',
        homepage: null
    },
    {
        name: 'Arithmetic-progression-and-geometric-progression-calculator-',
        description: 'Arithmetic and Geometric calculator',
        language: 'HTML',
        html_url: 'https://github.com/RightFix/Arithmetic-progression-and-geometric-progression-calculator-',
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

function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'system';
    
    function setTheme(theme) {
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            themeIcon.className = prefersDark ? 'fas fa-moon' : 'fas fa-sun';
        } else {
            document.documentElement.setAttribute('data-theme', theme);
            themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        localStorage.setItem('theme', theme);
    }
    
    let currentTheme = savedTheme;
    const themes = ['light', 'dark', 'system'];
    let themeIndex = themes.indexOf(savedTheme);
    
    setTheme(currentTheme);
    
    themeBtn.addEventListener('click', () => {
        themeIndex = (themeIndex + 1) % themes.length;
        currentTheme = themes[themeIndex];
        setTheme(currentTheme);
    });
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'system') {
            setTheme('system');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProjects(projectsData);
    initTheme();

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
            }
        });
    });
});
