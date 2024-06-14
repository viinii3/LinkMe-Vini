import './Skills.scss'

function Skills(){
    return(
        <div className="skills">
            <div className="skills-detail">
                <h3>Principais Skills</h3>
            </div>
            <div className="skills-imgs">
                <ul>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='react'></img>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='next'></img>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='js'></img>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt='sass'></img>
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt='bootstrap'></img>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills