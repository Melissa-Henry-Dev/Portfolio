function About() {
    return (
        <section>
            <div className="section-title-sub">
                <h2>Melissa Henry</h2>
                <h3>Full-Stack Developer</h3>
            </div>
            <div className="left-card">
                <div className="profile-photo">
                    <img src="" alt="Photo of Self" />
                </div>
            </div>
            <div className="right-card">
                <div className="bio">
                    <p>I'm a junior full-stack developer with a focus on building clear, reliable web applications.</p>
                    <p>I'm self-taught through professional certification programs, including Meta's Front-End and Back-End Developer tracks, and I enjoy learning by building practical projects with real-world relevance.</p> 
                    <p>I have international experience from living and working in South Africa and the Netherlands, and I'm interested in roles where technology is used thoughtfully, particularly in sustainability-focused and socially responsible products.</p>
                </div>
                <div className="contact-info">
                    <button className="linkedIn"><a href="">LinkedIn</a></button>
                    <button className="git-hub"><a href="">GitHub</a></button>
                </div>
            </div>
        </section>
    );
}

export default About;