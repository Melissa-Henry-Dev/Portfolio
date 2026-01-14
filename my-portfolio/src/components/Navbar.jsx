function Navbar () {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <span className="navbar-name">Melissa Henry</span>
                <div className="navbar-links">
                    <ul className="navbar-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#credentials">Credentials</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;