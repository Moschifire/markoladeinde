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
            <div className="welcome text-center container" id="welcome">
                <div>
                    <img className="pic" src="./picture.jpg" alt="" />
                </div>
                <h1>Welcome!</h1>
                <p>I am <strong>Mark Oladeinde</strong>, a skilled and versatile software engineer. I am competent in Web design as well as JavaScript and React JS. I am also skilled in bootstrap and SASS.</p>
                <p>Scroll down to find some of my projects</p>
            </div>
            <div id="projects" className="text-center section">
                <h2>Projects</h2>
                <div className="project-div">
                    <div className="project">
                        <h4>Shopping Cart</h4>
                        <p>This project is a shopping cart created with HTML, CSS and JavaScript. It is an ECommerce website where users can buy alcohol, check the cart content and checkout.</p>
                        <a href="https://booze.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                    <div className="project">
                        <h4>Random Quote Machine</h4>
                        <p>This random quote machine was created with react using react cdn. When a user clicks new quote, the app randomly generates a new quote.</p>
                        <a href="https://random-quote-machine-seps.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                    <div className="project">
                        <h4>Drum Machine</h4>
                        <p>This drum machine was created with react. When a key is clicked, it plays a sound which is recorded and can be replayed. The speed of play as well as the volume can be adjusted.</p>
                        <a href="https://drum-machine-nu-ruddy.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                    <div className="project">
                        <h4>JavaScript React Calculator</h4>
                        <p>React framework was used to create this calculator. It performs basic operations which are addition, subtraction, multiplication and division.</p>
                        <a href="https://javascript-react-calc.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                    <div className="project">
                        <h4>Pomodoro Clock</h4>
                        <p>Also known as a 25 + 5 clock, this clock that was created with react has 5 breaks each with a session of 25 minutes. At each break, a beep alerts the user. It can be paused and reset.</p>
                        <a href="https://pomodoro-clock-sigma.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                    <div className="project">
                        <h4>Feed-A-Mole Game</h4>
                        <p>Instead of whacking the moles, the moles are fed in this game. It was created with HTML, CSS and JavaScript. The moles are fed or they return sad.</p>
                        <a href="https://mole-game-rose.vercel.app/" className="btn btn-primary" target="_blank">Click here to visit</a>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h2>Contact Me</h2>
                <div id="location">
                    <p><i class="fa-solid fa-location-dot"></i> Lagos, Nigeria</p>
                    <a className="email" href="mailto:markoladeinde@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i> markoladeinde@gmail.com</a>
                </div>
                <div id="social">
                    <a id="icon" href="https://twitter.com/SchinoTheRapper" className="btn" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a id="icon" href="https://github.com/Moschifire" className="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a id="icon" href="https://www.linkedin.com/in/mark-oladeinde-aa21271b2/" className="btn" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a id="icon" href="https://drive.google.com/file/d/1TK0QAPoLZyPYpX22MOyJEzltATuZzQbT/view?usp=sharing" className="btn" target="_blank"><i class="fa-solid fa-file"></i></a>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))