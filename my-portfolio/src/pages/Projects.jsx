function Projects() {
    return (
        <section>
            <div className="section-title">
                <h1>Projects</h1>
            </div>
            <div className="project-container">
                <div className="project-one">
                    <div className="project-left">
                        <img src="" alt="Project Sustainability Dashboard" />
                    </div>
                    <div className="project-right">
                        <h2 className="project-title">Sustainability Dashboard</h2>
                        <div className="case-study">
                            <p className="project-desc">
                                A front-end dashboard that visualizes sustainability data to help users better understand energy, water, and waste usage. Sustainability data is often difficult to interpret when presented as raw numbers. I built a responsive React dashboard that focuses on clarity and trends using simple, interactive charts.
                            </p>
                        </div>
                        <div className="tech-stack">
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>Chart library</li>
                            </ul>
                        </div>
                        <div className="project-links">
                            <ul>
                                <li><a href="">Live Demo</a></li>
                                <li><a href="">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project-two">
                    <div className="project-left">
                        <img src="" alt="Project Energy Usage API" />
                    </div>
                    <div className="project-right">
                        <h2 className="project-title">Energy Usage API</h2>
                        <div className="case-study">
                            <p className="project-desc">
                                A RESTful API for storing and aggregating household energy usage data. Energy data is not useful without validation, structure, and aggregation. I built a Django REST API that validates, stores, and exposes summarized energy usage data.
                            </p>
                        </div>
                        <div className="tech-stack">
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>PostgreSQL</li>
                                <li>Insomnia</li>
                            </ul>
                        </div>
                        <div className="project-links">
                            <ul>
                                <li><a href="">Live Demo</a></li>
                                <li><a href="">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project-three">
                    <div className="project-left">
                        <img src="" alt="Project Image Energy Tracker" />
                    </div>
                    <div className="project-right">
                        <h2 className="project-title">Personal Energy Tracker</h2>
                        <div className="case-study">
                            <p className="project-desc">
                                A full-stack web application that allows users to track and visualize household energy usage. Individuals often lack clear visibility into their personal energy consumption. I built a React frontend connected to a Django REST API that securely stores and visualizes energy usage data.
                            </p>
                        </div>
                        <div className="tech-stack">
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Chart library</li>
                                <li>Python</li>
                                <li>Django</li>
                                <li>PostgreSQL</li>
                                <li>GitHub</li>
                                <li>Insomnia</li>
                                <li>Netlify</li>
                            </ul>
                        </div>
                        <div className="project-links">
                            <ul>
                                <li><a href="">Live Demo</a></li>
                                <li><a href="">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;