function About() {
    return (
        <>
        <section id="about">
            <div className="about-container">
                <div className="about-text">
                    <h1>Melissa Henry</h1>
                    <h2>Full-Stack Developer</h2>
                    <p className="about-summary">
                        Short summary sentence goes here.
                    </p>
                    <div className="about-links">
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </div>
                    <div className="about-context">
                        <p>Context paragraph one.</p>
                        <p>Context paragraph two.</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src="" alt="Profile" />
                </div>
            </div>
        </section>
        </>
    );
}

export default About;