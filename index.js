function App() {
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#welcome">Welcome</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
            <div className="welcome text-center" id="welcome">
                <div>
                    <img className="pic" src="./picture.jpg" alt="" />
                </div>
                <h1>Welcome!</h1>
                <p>I am <strong>Mark Oladeinde</strong>, a skilled and versatile software engineer. I am competent in Web design as well as JavaScript and React JS. I am also skilled in bootstrap and SASS.</p>
                <p>Scroll down to find some of my projects</p>
            </div>
            <div id="projects" className="text-center">
                <h2>Projects</h2>
                <div className="project-div">
                    <div className="project">
                        <h4>Shopping Cart</h4>
                        <p>This project is a shopping cart created with HTML, CSS and JavaScript. It is an ECommerce website where users can buy alcohol, check the cart content and checkout.</p>
                        <a href="https://booze.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                    <div className="project">
                        <h4>Random Quote Machine</h4>
                        <p>This </p>
                        <a href="https://booze.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))