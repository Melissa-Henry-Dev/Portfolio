function ProjectCard({title, description, tech}) {
    return (
        <div className="project-card">
            <div className="project-image">Image</div>
            <div className="project-content">
                <h4>{title}</h4>
                <p>{description}</p>
                <p className="tech">{tech}</p>
                <div className="project-links">
                    <a href="#">Source Code</a>
                    <a href="#">Live Demo</a>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <>
        <section id="projects">
            <h3>Projects</h3>
            <ProjectCard 
                title="Sustainability Dashboard"
                description=""
                tech=""
            />
            <ProjectCard 
                title="Energy Usage API"
                description=""
                tech=""
            />
            <ProjectCard 
                title="Personal Energy Tracker"
                description=""
                tech=""
            />
        </section>
        </>
    );
}

export default Projects;