function About() {
    return (
        <section>
            <div className="section-title-sub">
                <h2>Hoi, My name is Melissa.</h2>
            </div>
            <div className="left-card">
                <div className="profile-photo">
                    <img src="" alt="Photo of Self" />
                </div>
            </div>
            <div className="right-card">
                <div className="bio">
                    <p className="bio-desc"></p>
                </div>
                <div className="contact-info">
                    <button className="linkedIn">LinkedIn</button>
                    <button className="git-hub">GitHub</button>
                    <button className="cv-download">CV</button>
                </div>
            </div>
        </section>
    );
}

export default About;