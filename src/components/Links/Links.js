import './Links.scss'

import github from './github.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import whats from './whatsapp.png'

function Links(){
    return(
        <div className="link">
                <div className="link-github">
                    <a href={"https://github.com/viinii3"}>
                        <img src={github} alt='github'></img>
                    </a>
                </div>
                <div className="link-linkedin">
                    <a href={"https://www.linkedin.com/in/marcosvclementec/"}>
                        <img src={linkedin} alt='linkedin'></img>
                    </a>
                </div>
                <div className="link-instagram">
                    <a href="https://www.instagram.com/viinii__3/">
                        <img src={instagram} alt='instagram'></img>
                    </a>
                </div>
                <div className="link-contato-devzone">
                    <a href="https://wa.me/5511912125307">
                        <img src={whats} alt='whatsapp'></img>
                    </a>
                </div>
            </div>
    )
}

export default Links