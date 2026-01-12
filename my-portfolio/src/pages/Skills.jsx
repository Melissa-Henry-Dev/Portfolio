function Skills() {
    return (
        <section>
            <div className="section-title">
                <h1>Skills</h1>
            </div>
            <div className="grid">
                <div className="left-grid">
                    <div className="front-end">
                        <h3 className="grid-name">Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Responsive Design</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                </div>
                <div className="center-grid">
                    <div className="back-end">
                        <h3 className="grid-name">Backend</h3>
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>API design (RESTful)</li>
                            <li>Version Control</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="right-grid">
                    <div className="tools">
                        <h3 className="grid-name">Tools & technologies</h3>
                        <ul>
                            <li>Figma</li>
                            <li>VS Code</li>
                            <li>Git, GitHub</li>
                            <li>Insomnia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;